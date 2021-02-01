export interface Weather {
    error?: Number
    name: String
    region: String
    country: String
    localtime: String
    weather_code: Number
    timezone_id: String
    temperature: Number
    weather_icon: String
    weather_description: String
    id?: Number // id opcional
}