import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dataFilter',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/components/Layout.vue'),
      children: [
        // dashboard
        {
          path: 'dataFilter',
          name: 'DataFilter',
          component: () => import('@/views/DataFilter.vue'),
          // meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse},
        }
      ]
    },
  ],
});
