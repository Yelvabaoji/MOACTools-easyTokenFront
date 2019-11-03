import MyLayout from 'layouts/MyLayout.vue'
import MyTokenList from 'pages/myTokenList.vue'
import EasyToken from 'pages/easyToken.vue'
import EasyTokenHelp from 'pages/help.vue'

import SocialShare from 'pages/Share'
import SocialSharing from 'pages/Sharing'

const routes = [
  {
    path: '/',
    component: MyLayout,
    children: [
      { path: '/', component: MyTokenList, name: 'myTokenList' },
      { path: 'myTokenList', component: MyTokenList, name: 'myTokenList' },
      { path: 'easyToken', component: EasyToken, name: 'easyToken' },
      { path: 'easyTokenHelp', component: EasyTokenHelp, name: 'easyTokenHelp' },
      { path: 'socialshare', component: SocialShare, name: 'socialshare' },
      { path: 'socialsharing', component: SocialSharing, name: 'socialsharing' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
