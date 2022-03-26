export type Place = {
  _id: string
  name: string
  country: string
  description: string
  type: string
  coordinates: {_type: string, alt: number, lat: number, lng: number} 
  visited: boolean
}
