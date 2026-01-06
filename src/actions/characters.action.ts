import { charactersApi } from '@/api/characters.api'

export const getCharacters = async () => {
  const { data } = await charactersApi.get('/')

  return data
}
