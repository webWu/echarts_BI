import { option } from './request'
// 主页数据
export function getHome () {
  return option({
    url: '/home/multidata',
    methods: 'get'
  })
}
// 分类列表
export function getList (type, page) {
  return option({
    url: '/home/data',
    methods: 'get',
    params: {
      type,
      page
    }
  })
}
// 详情数据
export function getDetail (iid) {
  return option({
    url: '/detail',
    methods: 'get',
    params: {
      iid
    }
  })
}
// 天气
// 详情数据

export function getTianqi (appid) {
  return option({
    url: 'https://tianqiapi.com/free/day',
    methods: 'get',
    params: {
      appid: '43656176', // 账号ID
      appsecret: 'I42og6Lm', // 账号密钥
      // 城市编号,不要带CN, 以下参数3选1，当前以西湖区举例
      //   cityid: '101210113',
      city: '无锡', // 城市名称,不要带市和区
      callback: 0 // jsonp方式
    }
  })
}

// 高德地图
export function getWeather (city) {
  return option({
    url: 'https://restapi.amap.com/v3/weather/weatherInfo?key=f1e9fadfdad92ea520efa8f305f221ec&city=320205',
    methods: 'get',
    params: {
      city: '无锡' // 城市名称,不要带市和区
    }
  })
}
