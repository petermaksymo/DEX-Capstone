export async function getWallet(username, format) {
  const format_query = format ? `&format=${format}` : ''

  const res = await fetch(`http://localhost:5000/wallet?username=${username}${format_query}`)
  const result = await res.json()

  return result
}
