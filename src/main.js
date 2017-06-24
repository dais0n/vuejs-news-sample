// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routess from './router';

// install router
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routess,
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

