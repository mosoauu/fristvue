import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
//const router = new VueRouter({
  mode: 'history',
  routes:[{
    path:'/',
    component: require('../pages/Home.vue')
  },{

    path:'/about',
    component: require('../pages/About.vue')

  },{
    path:'/article/:id(\\d+)',
    component: require('../pages/About.vue')
  },{
    path: '*',
    redirect:'/'
  }]

})