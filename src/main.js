import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { imageHost } from './util/filters';

Vue.config.productionTip = false;

Vue.filter('imageHost', imageHost);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
