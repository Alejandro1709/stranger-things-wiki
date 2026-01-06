import { locationsApi } from '@/api/locations.api'
import type { IPlace } from '@/types/location'

export const getLocations = async (): Promise<IPlace[]> => {
  const { data } = await locationsApi.get<IPlace[]>('/')

  return data
}
