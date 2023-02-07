const fetchData = async () => {
  const res = await fetch(import.meta.env.VITE_BASE_URL)
  const result = await res.json()
  return result.articles
}

export { fetchData }
