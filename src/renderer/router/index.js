import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/iframe/imeduplus',
      name: 'imeduplus',
      component: require('@/components/Iframe/imeduplus.vue').default
    },
    {
      path: '/iframe/ksx',
      name: 'ksx',
      component: require('@/components/Iframe/ksx.vue').default
    }
  ]
})
