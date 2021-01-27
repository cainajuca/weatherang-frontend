export interface Weather {
    error?: number
    name: String
    region: string
    country: string
    localtime: string
    weather_code: number
    timezone_id: string
    temperature: number
    weather_icon: string
    weather_description: string
    id?: number // id opcional
}