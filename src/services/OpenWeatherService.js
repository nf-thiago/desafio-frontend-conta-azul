import axios from 'axios';
import Weather from '@/models/Weather';

const BASE_API = 'https://openweathermap.org/data/2.5/weather';
const ID_API = '439d4b804bc8187953eb36d2a8c26a02';

class OpenWeatherService {
  getWeather(idOpenWeather) {
    return axios.get(`${BASE_API}`, {
      params: {
        id: idOpenWeather,
        mode: 'json',
        appid: ID_API,
        units: 'metric'
      }
    })
      .then(({ data }) => {
        if (!data.main) {
          return Promise.reject();
        }
        return new Weather({
          temp: data.main.temp.toFixed(0),
          humidity: data.main.humidity,
          pressure: data.main.pressure
        });
      }).catch(() => {
        return Promise.reject();
      });
  }
}

const openWeatherService = new OpenWeatherService();
Object.freeze(OpenWeatherService);

export default openWeatherService;
