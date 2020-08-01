/*
 * @Author: zxy
 * @Date: 2020-07-01 16:27:12
 * @LastEditors: zxy
 * @LastEditTime: 2020-07-01 17:04:30
 * @Description: 
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'api/doubanapi.js'
import { Toast } from 'vant';
import { Lazyload } from 'vant';
//导入数据请求js
import DBAPI from './assets/js/api/doubanapi.js'
//挂载到vue原型，供所有组件使用
Vue.prototype.DBAPI = DBAPI;
Vue.use(Lazyload,{
  error:require('./assets/default.png'),
  loading:require('./assets/default.png')
})
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$Toast = Toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
