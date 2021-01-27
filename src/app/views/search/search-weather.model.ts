export interface Weather {
    error: number
    name: String
    region: string
    country: string
    localtime: string
    weather_code: number
    id?: number // id opcional
}