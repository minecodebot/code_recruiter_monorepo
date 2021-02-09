import useSWR from 'swr'
import api from '../services/api'

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async url => {
      const response = await api.get(`http://localhost:3030/${url}`)
      return response.data
    },
    {
      revalidateOnFocus: true
    }
  )
  return { data, error, mutate }
}
