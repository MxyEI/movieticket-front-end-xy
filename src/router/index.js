import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/HomePage.vue'
import home from '../template/home.vue'
import movie from '../template/movie.vue'
import detail from '../template/detail.vue'
import toplist from '../template/toplist.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homepage,
      children:[
        {
          path: '/',
          component:home
        },
      {
          path: '/movie',
          component:movie
        },
      {
          path: '/detail',
          component:detail
        },
      {
          path: '/toplist',
          component:toplist
        },
      ]
    },
  ]
})
