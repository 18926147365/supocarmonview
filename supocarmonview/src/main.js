// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import global from '@/components/Global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import axios from 'axios'
import qs from 'Qs'
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.config.productionTip = false

axios.defaults.withCredentials =true;
Vue.prototype.qs=qs
Vue.config.productionTip = false
Vue.prototype.$ajax=axios
Vue.prototype.global=global
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
