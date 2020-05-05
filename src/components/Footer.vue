<template>
  <div class="footer">
    <button
      id="upButton"
      class="up-btn"
      v-scroll-to="'#app'"
      data-aos-duration="500"
      data-aos="zoom-in"
    >
      <div class="up-btn--icon"></div>
    </button>

    <div class="footer__details text-center text-light">
      Designed by Nazmul Ahmed, 2020. &nbsp;
      <a>sajib906@gmail.com</a>
    </div>

    <nav class="footer__social-icons">
      <a href="https://twitter.com/sajib906" target="_blank" class="icon-link">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        href="https://www.facebook.com/sajib906"
        target="_blank"
        class="icon-link"
      >
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a href="https://github.com/nzml906" target="_blank" class="icon-link">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        href="https://www.linkedin.com/in/nazmul-ahmed/"
        target="_blank"
        class="icon-link"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
