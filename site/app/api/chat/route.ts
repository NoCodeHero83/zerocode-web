export async function POST(req: Request) {
  try {
    const { message, history = [] } = await req.json()
    if (!message || typeof message !== 'string') {
      return Response.json({ error: 'message is required' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return Response.json({ error: 'AI service not configured' }, { status: 500 })
    }

    const safeHistory = history
      .filter((m: { role: string; content: string }) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-8)

    const messages = [...safeHistory, { role: 'user', content: message }]

    const systemPrompt = process.env.SYSTEM_PROMPT || 'You are Nathan, a senior advisor at ZEROCODE.'

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return Response.json({ error: 'AI service error' }, { status: 502 })
    }

    const data = await response.json()
    const reply = data.content?.[0]?.text ?? 'No response received.'
    return Response.json({ reply })
  } catch {
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
