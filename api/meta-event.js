import { createHash } from 'crypto';

/**
 * Meta Conversion API (CAPI) — server-side "Schedule" event.
 * Env: META_PIXEL_ID, META_ACCESS_TOKEN (server-side only)
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.error('META_PIXEL_ID or META_ACCESS_TOKEN is not set');
    return res.status(500).json({ error: 'Meta CAPI not configured' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }
  body = body && typeof body === 'object' ? body : {};

  const { event_id, fbp } = body;
  if (!event_id || typeof event_id !== 'string') {
    return res.status(400).json({ error: 'event_id is required' });
  }

  const external_id = createHash('sha256')
    .update(event_id)
    .digest('hex');

  const userAgent = req.headers['user-agent'] || '';
  const forwarded = req.headers['x-forwarded-for'];
  let clientIp = '';
  if (typeof forwarded === 'string' && forwarded.length) {
    clientIp = forwarded.split(',')[0].trim();
  } else if (Array.isArray(forwarded) && forwarded[0]) {
    clientIp = String(forwarded[0]).trim();
  }
  if (!clientIp && req.socket?.remoteAddress) {
    clientIp = req.socket.remoteAddress;
  }

  const eventTime = Math.floor(Date.now() / 1000);

  const user_data = {
    client_user_agent: userAgent,
    client_ip_address: clientIp,
    external_id: [external_id],
  };
  if (typeof fbp === 'string' && fbp.trim()) {
    user_data.fbp = fbp.trim();
  }

  const graphPayload = {
    data: [
      {
        event_name: 'Schedule',
        event_time: eventTime,
        action_source: 'website',
        event_id,
        user_data,
      },
    ],
  };

  const url = `https://graph.facebook.com/v18.0/${encodeURIComponent(
    pixelId
  )}/events?access_token=${encodeURIComponent(accessToken)}`;

  try {
    const graphRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphPayload),
    });

    const graphJson = await graphRes.json().catch(() => ({}));

    if (!graphRes.ok) {
      console.error('Meta CAPI error:', graphRes.status, graphJson);
      return res.status(502).json({
        error: 'Meta Graph API error',
        status: graphRes.status,
        details: graphJson,
      });
    }

    return res.status(200).json({ ok: true, events_received: graphJson });
  } catch (err) {
    console.error('meta-event handler:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
