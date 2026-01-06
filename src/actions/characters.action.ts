import { charactersApi } from '@/api/characters.api'
import type { ICharacter } from '@/types/character'

export const getCharacters = async (): Promise<ICharacter[]> => {
  const { data } = await charactersApi.get<ICharacter[]>('/')

  return data
}
