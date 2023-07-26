import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'

import BaiduMap from 'vue-baidu-map'
// element国际化，按需引入
// 引入高德地图
import VueAMap from 'vue-amap'

import 'element-ui/lib/theme-chalk/index.css'
import '@/mock/mock.js'
Vue.use(BaiduMap, {
  ak: '你申请的key'
})

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'gdMap',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})

Vue.use(VueAMap) // 1.先引入

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
