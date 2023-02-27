const API_BASE_URL = process.env.API_BASE_URL

export async function getGraphData(interval = 180, is_server=true) {
  const exchanges = [
    { coin1: "coin_a", coin2: "coin_b" },
    { coin1: "coin_a", coin2: "coin_c" },
    { coin1: "coin_a", coin2: "coin_d" },
    { coin1: "coin_b", coin2: "coin_c" },
    { coin1: "coin_b", coin2: "coin_d" },
    { coin1: "coin_c", coin2: "coin_d" },
  ]

  const base_URL = is_server ? 'http://localhost:5000' : API_BASE_URL
  const get_quote_data = async (coin1, coin2) => {
    const res = await fetch(
      `${base_URL}/quotes?coin1=${coin1}&coin2=${coin2}&single=false&interval=${interval}`
    )
    return res.json()
  }

  const data = await Promise.all(
    exchanges.map((e) => get_quote_data(e.coin1, e.coin2))
  )
  const ids = [
    "Coin A - Coin B",
    "Coin A - Coin C",
    "Coin A - USD",
    "Coin B - Coin C",
    "Coin B - USD",
    "Coin C - USD",
  ]

  return ids.map((id, idx) => ({
    id,
    data: data[idx],
  }))
}
