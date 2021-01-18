import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Portfolio },
    { path: '/Contact', component: Contact },
    { path: '/*', component: NotFound }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
