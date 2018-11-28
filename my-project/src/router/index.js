import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
    {
      path: '/',
      component: () => import('@/views/index/index'),
      hidden: true
    },
    {
      path: '/orderRecord',
      component: () => import('@/views/orderRecord/orderRecord'),
      hidden: true
    },
    {
      path: '/orderdetail',
      component: () => import('@/views/orderdetail/orderdetail'),
      hidden: true
    },
    {
      path: '/product',
      component: () => import('@/views/product/product'),
      hidden: true
    },
    {
      path: '/paysuccess',
      component: () => import('@/views/paysuccess/paysuccess'),
      hidden: true
    },
    {
      path: '/exchangesuc',
      component: () => import('@/views/exchangesuc/exchangesuc'),
      hidden: true
    },
    {
      path: '/recharge',
      component: () => import('@/views/recharge/recharge'),
      hidden: true
    },
    {
      path: '/redexchange',
      component: () => import('@/views/redexchange/redexchange'),
      hidden: true
    },
    {
      path: '/join',
      component: () => import('@/views/join/join'),
      hidden: true
    },
    {
      path: '/plandetail',
      component: () => import('@/views/plandetail/plandetail'),
      hidden: true
    },
    {
      path: '/mypeanut',
      component: () => import('@/views/mypeanut/mypeanut'),
      hidden: true
    },
    {
      path: '/invite',
      component: () => import('@/views/invite/invite'),
      hidden: true
    },
    {
      path: '/upload',
      component: () => import('@/views/upload/upload'),
      hidden: true
    }
  
  ]
  
  export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  })
  
