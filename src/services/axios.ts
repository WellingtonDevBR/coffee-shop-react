import axios from 'axios'

export function getAxiosInstance(url: string) {
  const instance = axios.create({
    baseURL: url,
  })
  return instance
}
