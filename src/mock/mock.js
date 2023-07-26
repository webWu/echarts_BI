// 先引入mockjs模块
import Mock from 'mockjs'
// 把JSON数据格式引入进来
// [JSON数据格式根本没有对外暴露，但是可以引入]，因为 webpack默认对外暴露的：图片、JSON数据格式
import car from './json/car.json'

// 模拟首页大轮播图的数据
// mock数据:第一个参数：请求地址   第二个参数：请求数据（200代表请求成功，data代表数据）
Mock.mock('/mock/car', {
  code: 200,
  data: car
})
