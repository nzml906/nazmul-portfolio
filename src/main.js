import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import i18n from './i18n';

import '@/assets/scss/main.scss';

// require('intersection-observer');

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

import { VLazyImagePlugin } from 'v-lazy-image';
import scroll from './directives/scroll';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueMeta from 'vue-meta';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faTh,
  faEnvelope,
  faLink,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';

import {
  faTwitter,
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faCodepen,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faVuejs,
  faBootstrap,
  faSass,
  faNpm
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faTwitter,
  faBootstrap,
  faCodepen,
  faCss3Alt,
  faFacebookF,
  faGithub,
  faHtml5,
  faJsSquare,
  faVuejs,
  faSass,
  faNpm,
  faLinkedinIn,
  faTh,
  faEnvelope,
  faLink,
  faAngleUp
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueMeta);
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease in out',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(scroll);
Vue.use(VLazyImagePlugin);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
