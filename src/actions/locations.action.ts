import { locationsApi } from '@/api/locations.api'

export const getLocations = async () => {
  const { data } = await locationsApi.get('/')

  return data
}
