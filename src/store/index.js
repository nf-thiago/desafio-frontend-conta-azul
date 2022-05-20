import { createStore } from 'vuex';

import Weather from '@/models/Weather';
import openWeatherService from '@/services/OpenWeatherService';

const store = new createStore({
  state: {
    weatherOfCities: []
  },

  mutations: {
    addIndexStateWeatherOfCities(state, name) {
      if (state.weatherOfCities[name]) {
        return;
      }
      state.weatherOfCities[name] = new Weather();
    },

    setWeather(state, city) {
      state.weatherOfCities[city.name] = city.weather;
      localStorage.setItem(`${city.name}`, JSON.stringify(city.weather));
    },

    setLoading(state, city) {
      state.weatherOfCities[city.name].isLoading = city.isLoading;
    },

    setError(state, city) {
      state.weatherOfCities[city.name].hasError = city.hasError;
    }
  },

  getters: {},

  actions: {
    addIndexStateWeatherOfCities(state, name) {
      store.commit('addIndexStateWeatherOfCities', name);
    },

    getWeatherCity(state, city) {
      store.commit('setError', { name: city.name, hasError: false });

      let weatherLocalStorage = JSON.parse(localStorage.getItem(`${city.name}`));

      if (weatherLocalStorage) {
        weatherLocalStorage = new Weather(weatherLocalStorage);

        if (!weatherLocalStorage.isTimeCacheExpired()) {
          store.commit('setWeather', { name: city.name, weather: weatherLocalStorage });
          window.setTimeout(() => {
            state.dispatch('getWeatherCity', city);
          }, weatherLocalStorage.getTimeCacheToExpire());
          return;
        }

        localStorage.removeItem(`${city.name}`);
      }

      store.commit('setLoading', { name: city.name, isLoading: true });

      openWeatherService.getWeather(city.idOpenWeather)
        .then((weather) => {
          store.commit('setWeather', { name: city.name, weather: new Weather(weather) });
          window.setTimeout(() => {
            state.dispatch('getWeatherCity', city);
          }, weather.getTimeCacheToExpire());
        })
        .catch((error) => {console.log(error)
          store.commit('setError', { name: city.name, hasError: true });
        })
        .finally(() => {
          store.commit('setLoading', { name: city.name, isLoading: false });
        });
    }
  },
});

export default store;
