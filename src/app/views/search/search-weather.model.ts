export interface Weather {
    success: Boolean
    name: String
    region: string
    country: string
    localtime: string
    weather_code: number
    id?: number // id opcional
}