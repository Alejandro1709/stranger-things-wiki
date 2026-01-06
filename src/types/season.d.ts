export interface ISeason {
  id: number
  number: number
  title: string
  episodes: number
  releaseYear: number
  description: string
  villain:
    | 'Demogorgon'
    | 'Azotamentes'
    | 'Vecna / Henry Creel'
    | 'Por confirmarse'
}
