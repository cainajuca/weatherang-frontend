export interface Weather {
    name: String
    region: string
    country: string
    localtime: string
    weather_code: number
    id?: number // id opcional
}