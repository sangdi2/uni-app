import App from './App'
import {$http} from '@escook/request-miniprogram'
// import store from '@/store/store.js'

// #ifndef VUE3
import Vue from 'vue'
import store from '@/store/store.js'

uni.$http=$http



$http.beforeRequest=function(){
	uni.showLoading({
		title:"正在加载中..."
	})
}
$http.afterRequest=function(){
	uni.hideLoading();
}
uni.$showMeg=function(title="数据请求失败",duration=1500){
	uni.showToast({
		title,
		duration,
		icon:"none"
	})
	
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import store from './store/store.js'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	store
  }
}
// #endif