import Vue from 'vue'
import Router from 'vue-router'
import PetShop from '@/components/PetShop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: PetShop
    }
  ]
})
