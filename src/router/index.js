import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import City from '@/components/City'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/City',
      name: 'City',
      component: City
    },{
      path: '/Detail/:detail_id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
