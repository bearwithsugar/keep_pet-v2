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
import apply_form from '../components/apply_form'
import v_apply_process from '../components/volenteer/v_apply_process'
import v_apply_detail from '../components/volenteer/v_apply_detail'
import u_apply_process from '../components/u_apply_process'
import u_apply_detail from '../components/u_apply_detail'

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
        },
        {
          path:'apply_form',
          name:'apply_form',
          component:apply_form,
        },
        {
          path:'v_apply_process',
          name:'v_apply_process',
          component:v_apply_process,
        },
        {
          path:'v_apply_detail',
          name:'v_apply_detail',
          component:v_apply_detail,
        },
        {
          path:'u_apply_process',
          name:'u_apply_process',
          component:u_apply_process,
        },{
          path:'u_apply_detail',
          name:'u_apply_detail',
          component:u_apply_detail,
        },,{
          path:'addmanager',
          name:'addmanager',
          component:add_manager,
        },
      ]

    },
    {path:'/detail/:id', component:detail},

  ],

})
