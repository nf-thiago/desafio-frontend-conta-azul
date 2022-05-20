<template>
  <article class="c-card">
    <div class="c-card__title">{{ city.name }}, {{ city.country }}</div>

    <div v-if="!weatherCity.isLoading && !weatherCity.hasError">
      <div class="c-card__body">
        <span v-bind:class="{'font--blue': weatherCity.isTempBlue(), 'font--orange': weatherCity.isTempOrange(), 'font--red': weatherCity.isTempRed()}">
          {{ weatherCity.temp }}°
        </span>
      </div>

      <div class="c-card__footer">
        <div class="c-card__footer__details">
          <div>
            <h3>HUMIDITY</h3>
            <span>{{ weatherCity.humidity }}</span>
            <span>%</span>
          </div>
          <div>
            <h3>PRESSURE</h3>
            <span>{{ weatherCity.pressure }}</span>
            <span>hPa</span>
          </div>
        </div>
        <div class="c-card__footer__update">Update at {{ weatherCity.getLastUpdateHourFormated() }}</div>
      </div>
    </div>

    <div class="c-card__loading" v-if="weatherCity.isLoading">
      <img alt="WeatherNow Loader" src="../assets/images/loader.svg">
    </div>

    <div class="c-card__error" v-if="weatherCity.hasError">
      <div>
        <h3 class="font--red">Something went wrong</h3>
        <button v-on:click="getWeatherCity()">Try Again</button>
      </div>
    </div>
  </article>
</template>

<script>

import City from '@/models/City';

export default {
  name: 'WeatherCard',

  props: {
    city: City,
  },

  mounted() {
    this.getWeatherCity();
  },

  computed: {
    weatherCity: {
      get() {
        return this.$store.state.weatherOfCities[this.city.name];
      }
    }
  },

  methods: {
    getWeatherCity() {
      this.$store.dispatch('getWeatherCity', this.city);
    }
  },

  created() {
    this.$store.dispatch('addIndexStateWeatherOfCities', this.city.name);
  }
};

</script>

<style scoped lang="scss">

  @import '@/assets/sass/styles.scss';

  .font--blue {
    color: $blue;
  }

  .font--orange {
    color: $orange;
  }

  .font--red {
    color: $red;
  }

  .c-card {
    background-color: $white;
    box-shadow: 2px 3px 5px 0px $box-shadow;
    border-radius: 5px;
    width: 250px;
    margin: 25px;
    text-align: center;
    color: $font-color-secondary;

    &__title {
      height: 45px;
      border-bottom: 1px solid $divider-color;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $font-color-primary;
    }

    &__body {
      height: 140px;
      font-weight: 400;
      font-size: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__footer {
      background-color: $card-footer-background-color;
      font-size: 10px;

      &__details {
        width: 100%;
        height: 35px;
        padding-top: 15px;
        display: flex;
        font-size: 12px;
        line-height: 18px;
        justify-content: space-around;
        flex-flow: row;

        div {
          span {
            color: $font-color-primary;
            font-size: 18px;
          }

          span:last-child {
            font-size: 11px;
          }
        }
      }

      &__update {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
      }
    }

    &__loading {
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__error {
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        display: block;

        h3 {
          margin-bottom: 20px;
        }
      }

      button {
        background-color: $white;
        color: $font-color-primary;
        border: 2px solid $font-color-primary;
        border-radius: 25px;
        padding: 10px 15px;
        font-size: 15px;
        cursor: pointer;
      }
    }
  }

</style>
