<template>
  <section>
    <WeatherCard v-for="city in cities" :key="city.idOpenWeather" :city="city" />
  </section>
</template>

<script>

import City from '@/models/City';
import WeatherCard from '@/components/WeatherCard';

export default {
  name: 'CitiesList',

  components: {
    WeatherCard,
  },

  data() {
    return {
      cities: [
        new City({
          idOpenWeather: 3421319,
          name: 'Nuuk',
          country: 'GL'
        }),
        new City({
          idOpenWeather: 3445709,
          name: 'Urubici',
          country: 'BR'
        }),
        new City({
          idOpenWeather: 184742,
          name: 'Nairobi',
          country: 'KE'
        }),
      ],
    };
  },
};

</script>

<style scoped lang="scss">

  @import '@/assets/sass/styles.scss';

  section {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
    min-height: calc(100vh - $header-height);
  }

</style>
