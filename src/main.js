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
import 'api/httpapi.js'
import { Toast } from 'vant';
import { Lazyload } from 'vant';
//导入数据请求js
import {DBAPI,BaiduMapAPI} from './assets/js/api/httpapi.js'
//挂载到vue原型，供所有组件使用
Vue.prototype.DBAPI = DBAPI;
Vue.prototype.BaiduMapAPI = BaiduMapAPI;
Vue.use(Lazyload,{
  error:require('./assets/default.png'),
  loading:require('./assets/default.png')
})
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$Toast = Toast
Vue.prototype.BaseUrl = getRootPath().slice(0,-1)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
function getRootPath(){
  var curPageUrl = window.document.location.href;
  var rootPath = curPageUrl.split("//")[0] + curPageUrl.split("//")[1].split("/")[0] 
                 + "/" + curPageUrl.split("//")[1].split("/")[1];
  return rootPath;
}