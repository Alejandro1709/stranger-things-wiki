type LocationType =
  | 'ciudad'
  | 'dimensión paralela'
  | 'instalación gubernamental'
  | 'escuela'
  | 'residencia'
  | 'centro comercial'
  | 'mansión abandonada'
  | 'salón recreativo'
  | 'heladeria'
  | 'prisión'
  | 'lago'

export interface IPlace {
  id: number
  name: string
  type: LocationType
  description: string
}
