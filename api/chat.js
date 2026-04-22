export default async function handler(req, res) {
  // CORS for same-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, history = [] } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message is required' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not set');
    return res.status(500).json({ error: 'AI service not configured' });
  }

  // Build message array: keep last 8 turns for context
  const safeHistory = history
    .filter(m => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-8);

  const messages = [...safeHistory, { role: 'user', content: message }];

  const systemPrompt = process.env.SYSTEM_PROMPT ||
    `You are Zerocode AI, the intelligent assistant for Zerocode (zerocode.la).
Zerocode builds custom AI and automation solutions for established businesses —
including AI chatbots, workflow automations, predictive tools, and digital transformation consulting.
Your goal: help visitors understand what Zerocode does, how we can solve their operational bottlenecks,
and guide them toward booking a call or contacting the team.
Keep answers concise (2-4 sentences max). Be warm, professional, and helpful.
If the user asks something unrelated to Zerocode or business AI, gently redirect to how Zerocode can help them.
Respond in the same language the user uses (English or Spanish).`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic API error:', err);
      return res.status(502).json({ error: 'AI service error' });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? 'No response received.';
    return res.json({ reply });

  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
