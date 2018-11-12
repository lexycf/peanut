import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function

const whiteList = ['/index', '/exchange', '/about', '/login', '/authredirect', '/register','/freeIssuing','/opration', '/forgetpwd','/userCenter','/secondVali','/changePwd','/publishCoinIndex','/pubRecord','/userAgreement','/subSuccess','/resetPwd','/bindSmsVerifi','/setMoneyPwd','/asset','/forgetPwd','/coinManage']// no redirect whitelist


router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (getToken()) { // determine if there has token
    /* has token*/
    if (to.path === '/login'||to.path === '/') {
      next({ path: '/index' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      store.dispatch('GetUserInfo').then(res => { // 拉取user_info
        next()
      }).catch((err) => {
        store.dispatch('FedLogOut').then(() => {
          Message.error(err || 'Verification failed, please login again')
          next({ path: '/index' })
        })
      })
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/index') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
