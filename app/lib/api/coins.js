const API_BASE_URL = process.env.API_BASE_URL

export async function getCoinData(coin) {
  const coin_query = coin ? `?coin=${coin}` : ""

  const res = await fetch(`${API_BASE_URL}/coins${coin_query}`)
  const result = await res.json()

  return result
}
