const CHAIN3_URL = 'http://47.92.110.121:8545'

import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

import Chain3 from 'chain3'
import global_ from './global'
Vue.prototype.GLOBAL = global_

global_.chain3 = new Chain3()
global_.chain3.setProvider(new Chain3.providers.HttpProvider(CHAIN3_URL))

if (!global_.chain3.isConnected()) {
  console.log('Chain3 RPC is not connected!')
} else {
  console.log('Chain3 connected')
}

/*
 * 这是vue-social-share加出来的。
 */
// import Share from 'vue-social-share'
// Vue.use(Share)
// import 'vue-social-share/dist/client.css'

/*
 * 这是vue-social-sharing加出来的。
 */
// import SocialSharing from 'vue-social-sharing'
// Vue.use(SocialSharing)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    // mode: 'history',
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
