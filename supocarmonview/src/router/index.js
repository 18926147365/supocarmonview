import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import executeCodeView from '@/views/executeCodeView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
      	path:"toExecuteCodeView",
      	name:"executeCode",
      	component:executeCodeView
      }]
    }
  ]
})
