import useSWR from 'swr'
import api from '../services/api'

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async url => {
      console.log('response')
      console.log(url)
      const response = await api.get(`http://localhost:3030/${url}`)
      console.log(response)
      return response.data
    },
    {
      revalidateOnFocus: true
    }
  )
  return { data, error, mutate }
}
