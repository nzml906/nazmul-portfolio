<template>
  <div id="app">
    <!--navbar-->
    <div id="nav" class="desk-nav-menu">
      <ul class="desk-nav-menu__nav">
        <!-- home -->
        <li class="desk-nav-menu__nav--link">
          <router-link
            class="route-link"
            to="/"
            @click.native="bodyColor('#414657')"
            exact
            >{{ $t('message.nav.intro') }}</router-link
          >
        </li>
        <!-- skills -->
        <li class="desk-nav-menu__nav--link">
          <router-link
            class="route-link"
            to="/skills"
            @click.native="bodyColor('#414657')"
            exact
            >{{ $t('message.nav.skills') }}</router-link
          >
        </li>
        <!-- portfolio -->
        <li class="desk-nav-menu__nav--link">
          <router-link
            class="route-link"
            to="/portfolio"
            @click.native="bodyColor('#414657')"
            exact
            >{{ $t('message.nav.portfolio') }}</router-link
          >
        </li>
      </ul>
    </div>

    <!--body-->
    <transition name="pageToggle" mode="out-in">
      <router-view />
    </transition>

    <!--mobile-nav-btn-->
    <div class="mob-nav-btn">
      <input
        type="checkbox"
        ref="mobToggle"
        id="menu-toggle"
        @click="showMobNav = !showMobNav"
      />
      <label for="menu-toggle" class="menu-toggle-label">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </div>

    <!--mobile-nav-menu-->
    <transition name="fadeNav">
      <div v-show="showMobNav" class="mob-nav-menu">
        <nav class="mob-nav-menu__nav">
          <ul class="mob-nav-menu__nav--list">
            <li class="mob-nav-menu__nav--list--link">
              <router-link
                class="route-link"
                to="/"
                @click.native="closeMobNav('#414657')"
                >{{ $t('message.nav.intro') }}</router-link
              >
            </li>

            <li class="mob-nav-menu__nav--list--link">
              <router-link
                class="route-link"
                to="/skills"
                @click.native="closeMobNav('#414657')"
                >{{ $t('message.nav.skills') }}</router-link
              >
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link
                class="route-link"
                to="/portfolio"
                @click.native="closeMobNav('#414657')"
                >{{ $t('message.nav.portfolio') }}</router-link
              >
            </li>
          </ul>
          <div class="mob-nav-menu__nav--icons">
            <h4>{{ $t('message.nav.touch') }}</h4>

            <a
              href="mailto:sajib906@gmail.com"
              target="_blank"
              class="icon-link"
            >
              <font-awesome-icon :icon="['fa', 'envelope']" />
            </a>
            <a
              href="https://www.linkedin.com/in/nazmul-ahmed/"
              target="_blank"
              class="icon-link"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a
              href="https://github.com/nzml906"
              target="_blank"
              class="icon-link"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Nazmul Ahmed | Front End Developer',
      meta: [
        { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Apasionado Front End Developer, autodidacta y que le gustan los retos, dispuesto a contribuir y aprender.'
        },
        {
          property: 'og:title',
          content: 'Miguel Alonso Marroquin | Front End Developer'
        },
        { property: 'og:site_name', content: 'Miguel Alonso Marroquin' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://malbonm07.github.io' },
        { property: 'og:image', content: 'https://i.imgur.com/ZoQbreu.png' },
        { property: 'og:description', content: 'Front End Developer' },
        //twitter card.
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: 'https://malbonm07.github.io' },
        {
          name: 'twitter:title',
          content: 'Miguel ALonso Marroquin - Portfolio'
        },
        {
          name: 'twitter:description',
          content: 'Self taught | Front End Web Developer'
        },

        { name: 'twitter:creator', content: '@malbonm07' },
        {
          name: 'twitter:image:src',
          content: 'https://i.imgur.com/ZoQbreu.png'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://malbonm07.github.io' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        }
      ]
    };
  },
  data() {
    return {
      showMobNav: false
    };
  },
  methods: {
    closeMobNav(color) {
      if (this.showMobNav) {
        document.body.style.background = color;
        this.showMobNav = false;
        this.$refs.mobToggle.checked = false;
      }
    },
    bodyColor(color) {
      document.body.style.background = color;
    }
  },
  computed: {
    activeRoute() {
      return this.$route;
    }
  }
};
</script>
