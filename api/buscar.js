export default async function handler(req, res) {
  const { nicho, cidade } = req.query

  if (!nicho || !cidade) {
    return res.status(400).json({ error: 'Nicho e cidade são obrigatórios' })
  }

  const query = `${nicho} ${cidade} Brasil`
  const params = new URLSearchParams({
    apikey: process.env.ZENSERP_API_KEY,
    q: query,
    num: '20',
    hl: 'pt',
    gl: 'br',
  })

  try {
    const response = await fetch(`https://app.zenserp.com/api/v2/search?${params}`)
    const data = await response.json()

    // Tenta pegar de local_results ou organic
    const raw = data.local_results || data.organic || []

    if (raw.length === 0) {
      return res.status(200).json({ debug: data, leads: [] })
    }

    const leads = raw.map(item => ({
      title: item.title || 'Sem nome',
      address: item.address || item.displayed_link || 'Endereço não disponível',
      phone: item.phone || null,
      rating: parseFloat(item.rating) || null,
      reviews: parseInt(item.reviews) || 0,
      website: item.url || item.website || null,
      place_id: item.place_id || Math.random().toString(),
    }))

    res.status(200).json(leads)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}