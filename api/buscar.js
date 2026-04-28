export default async function handler(req, res) {
  const { nicho, cidade } = req.query

  if (!nicho || !cidade) {
    return res.status(400).json({ error: 'Nicho e cidade são obrigatórios' })
  }

  try {
    const query = `${nicho} em ${cidade} PR Brasil`
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&language=pt-BR&region=br&key=${process.env.GOOGLE_PLACES_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    if (!data.results || data.results.length === 0) {
      return res.status(200).json([])
    }

    const leads = data.results.map(item => ({
      title: item.name || 'Sem nome',
      address: item.formatted_address || 'Endereço não disponível',
      phone: null,
      rating: item.rating || null,
      reviews: item.user_ratings_total || 0,
      website: null,
      place_id: item.place_id || Math.random().toString(),
    }))

    res.status(200).json(leads)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}