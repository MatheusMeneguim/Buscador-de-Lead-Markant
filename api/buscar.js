export default async function handler(req, res) {
  const { nicho, cidade } = req.query

  if (!nicho || !cidade) {
    return res.status(400).json({ error: 'Nicho e cidade são obrigatórios' })
  }

  const query = `${nicho} em ${cidade} PR Brasil`
  const params = new URLSearchParams({
    apikey: process.env.ZENSERP_API_KEY,
    q: query,
    tbm: 'lcl',
    num: '20',
    hl: 'pt',
    gl: 'br',
    location: 'Parana,Brazil',
  })

  try {
    const response = await fetch(`https://app.zenserp.com/api/v2/search?${params}`)
    const data = await response.json()
    return res.status(200).json({ debug: data })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}