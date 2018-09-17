import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

import main from '../components/Main'
import swipe from '../components/Swipe'
import uploud from '../components/Uploud'
import save from '../components/saveMessage'
import share from '../components/sharePets'
import user from '../components/userMessage'
import detail from '../components/detailOfPets'
import test from '../components/characterTest'
import show_manager from '../components/manager/show_manager'

import 'vue2-animate/dist/vue2-animate.min.css'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default new Router({
  // linkActiveClass:'is-link',
  routes: [
    {path: '/', name: 'App', component:swipe},
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
        }
      ]

    },
    {path:'/detail/:id', component:detail},

  ],

})