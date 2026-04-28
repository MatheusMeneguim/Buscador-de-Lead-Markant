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

    // Busca detalhes (telefone + site) para cada lead em paralelo
    const leads = await Promise.all(
      data.results.map(async (item) => {
        let phone = null
        let website = null

        try {
          const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&fields=formatted_phone_number,website&language=pt-BR&key=${process.env.GOOGLE_PLACES_API_KEY}`
          const detailRes = await fetch(detailUrl)
          const detailData = await detailRes.json()
          phone = detailData.result?.formatted_phone_number || null
          website = detailData.result?.website || null
        } catch {
          // Se falhar, deixa null
        }

        return {
          title: item.name || 'Sem nome',
          address: item.formatted_address || 'Endereço não disponível',
          phone,
          rating: item.rating || null,
          reviews: item.user_ratings_total || 0,
          website,
          place_id: item.place_id,
        }
      })
    )

    res.status(200).json(leads)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}