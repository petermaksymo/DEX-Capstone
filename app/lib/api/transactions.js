export async function getTransactions(username) {
  const res = await fetch(`http://localhost:5000/transactions?username=${username}`)
  const result = await res.json()

  return result
}
