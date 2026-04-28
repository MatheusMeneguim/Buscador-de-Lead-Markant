export default async function handler(req, res) {
  const { nicho, cidade } = req.query

  if (!nicho || !cidade) {
    return res.status(400).json({ error: 'Nicho e cidade são obrigatórios' })
  }

  const query = `${nicho} em ${cidade}`
  const params = new URLSearchParams({
    apikey: process.env.ZENSERP_API_KEY,
    q: query,
    tbm: 'lcl',
    num: '20',
  })

  try {
    const response = await fetch(`https://app.zenserp.com/api/v2/search?${params}`)
    const data = await response.json()

    const leads = (data.local_results || []).map(item => ({
      title: item.title || 'Sem nome',
      address: item.address || 'Endereço não disponível',
      phone: item.phone || null,
      rating: parseFloat(item.rating) || null,
      reviews: parseInt(item.reviews) || 0,
      website: item.website || null,
      place_id: item.place_id || Math.random().toString(),
    }))

    res.status(200).json(leads)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar na API' })
  }
}