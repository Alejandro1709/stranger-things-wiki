import { seasonsApi } from '@/api/seasons.api'
import type { ISeason } from '@/types/season'

export const getSeasons = async (): Promise<ISeason[]> => {
  const { data } = await seasonsApi.get<ISeason[]>('/')

  return data
}
