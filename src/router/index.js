import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EmptyViewComponent from '../views/EmptyViewComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/portfolio',
    component: EmptyViewComponent,
    children: [
      {
        path: '',
        component: () => import('../views/Portfolio.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
