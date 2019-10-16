import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import './element-variables.scss';
import './permission';
import './assets/font/iconfont.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
