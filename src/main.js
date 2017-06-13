// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import NewsList from './components/NewsList';
import Contents from './components/Contents';

// install router
Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/items', component: NewsList },
    { path: '/item/:id', component: Contents },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
