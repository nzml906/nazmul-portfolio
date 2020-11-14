<template>
  <div class="home-container">
    <div class="home-container__title">
      <h1 class="fw-100">FRONT-END DEVELOPER</h1>
    </div>

    <div class="home-container__title__fullname">
      <h1 class="fw-700 letter-space1">Nazmul Ahmed</h1>
    </div>

    <div class="home-container--description text-center">
      <p v-html="$t('message.home.msg')"></p>
      <button class="home-btn mt-4">
        <router-link class="text-white" to="/portfolio">{{
          $t('message.home.btn')
        }}</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>
