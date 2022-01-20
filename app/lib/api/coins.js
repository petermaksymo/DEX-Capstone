export async function getCoinData(coin) {
  const coin_query = coin ? `?coin=${coin}` : ''

  const res = await fetch(`http://localhost:5000/coins${coin_query}`)
  const result = await res.json()

  return result
}
