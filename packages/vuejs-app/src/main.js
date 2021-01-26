import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Art from './views/Art';
import NotFound from './views/NotFound';

Vue.use(VueRouter)

import './scss/main.scss';
import VueExpandableImage from 'vue-expandable-image';
Vue.use(VueExpandableImage);



Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Portfolio },
    { path: '/contact', component: Contact },
    { path: '/art', component: Art },
    { path: '/*', component: NotFound }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
