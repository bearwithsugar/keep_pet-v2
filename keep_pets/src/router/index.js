import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

import main from '../components/Main'
import swipe from '../components/Swipe'
import upload from '../components/Upload'
import save from '../components/saveMessage'
import share from '../components/sharePets'
import user from '../components/userMessage'
import detail from '../components/detailOfPets'
import test from '../components/characterTest'
import show_manager from '../components/manager/show_manager'
import detail_manager from '../components/manager/detail_manager'
import add_manager from '../components/manager/add_manager'
import search from '../components/search/search'

import 'vue2-animate/dist/vue2-animate.min.css'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default new Router({
  // linkActiveClass:'is-link',
  routes: [
    {path: '/', name: 'App', component:swipe},
    {path:'/search',name:'search',component:search},
    {path: '/main', name: 'main',component:main, children:[
        {
          path: 'usermessage',
          name: 'usermessage',
          component:user,
        },
        {
          path: 'save',
          component:save,
        },
        {
          path: 'share',
          name: 'share',
          component:share,
        },
        {
          path:'test',
          component:test,
        },
        {
          path:'show_manager',
          name:'show_manager',
          component:show_manager,
        },
        {
          path:'detail_manager',
          name:'detail_manager',
          component:detail_manager,
        },
        {
          path:'upload',
          name:'upload',
          component:upload,
        }
      ]

    },
    {path:'/detail/:id', component:detail},

  ],

})
