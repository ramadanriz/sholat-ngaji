import useSWR from "swr"

export const useFetch = (endpoint) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, isLoading } = useSWR(endpoint, fetcher)

  return {
    data,
    isLoading,
  }
}
