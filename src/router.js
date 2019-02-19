import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Config from './views/Config.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Post from './views/Post';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'config',
          component: Config,
        },
        Post
      ]
    }
  ]
});
