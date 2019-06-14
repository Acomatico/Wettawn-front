export interface AuthInfo {
  token: String,
  expiresIn: Number,
  uuid: String
}

export interface WeatherInfo {
  temperature: Number,
  minTemp: Number,
  maxTemp: Number,
  pressure: Number,
  humidity: String,
  weather: String,
  cloudiness: String,
  windSpeed: Number,
  windDir: String,
  rain: Number,
  snow: Number
}