<template>
  <header class="c-header">
    <img alt="WeatherNow Logo" src="@/assets/images/logo.svg">
  </header>
</template>

<script>

export default {
  name: 'Topbar'
};

</script>

<style lang="scss">

  @import '@/assets/sass/styles.scss';

  .c-header {
    background-color: $white;
    height: $header-height;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $divider-color;

    img {
      height: 24px;
    }
  }

</style>
