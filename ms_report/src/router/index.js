import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
Vue.use(Router)

let routes = []

const requireContext = require.context(
  './',
  true,
  /\.js$/
)
requireContext.keys().forEach(filename => {
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new Router({
  routes
})
router.addRoutes([
  {
    path: '/', 
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/login'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '@/views/home'),
    children: [
      // {
      //   path: 'index',
      //   name: 'index',
      //   component: () => import('@/views/Recruitment'),
      // },
    ]
  },
 
  // {
  //   path: '/home/notice',
  //   name: 'notice',
  //   component: () => import('@/views/Recruitment/notice.vue'),
  // },
  // {
  //   path: '/home/policy',
  //   name: 'policy',
  //   component: () => import('@/views/Recruitment/policy.vue'),
  // },
  // {
  //   path: '/home/plan',
  //   name: 'plan',
  //   component: () => import('@/views/Recruitment/plan.vue'),
  // },
  // {
  //   path: '/home/plan_none',
  //   name: 'plaplan_nonen',
  //   component: () => import('@/views/Recruitment/plan_none.vue'),
  // },
  // {
  //   path: '/home/work',
  //   name: 'work',
  //   component: () => import('@/views/Recruitment/work.vue'),
  // },
  // {
  //   path: '/home/policyGl',
  //   name: 'policyGl',
  //   component: () => import('@/views/Recruitment/policyGl.vue'),
  // },
  // {
  //   path: '/home/noticeGl',
  //   name: 'noticeGl',
  //   component: () => import('@/views/Recruitment/noticeGl.vue'),
  // },
  // {
  //   path: '/home/password',
  //   name: 'password',
  //   component: () => import('@/views/Recruitment/password.vue'),
  // },
  
])
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
