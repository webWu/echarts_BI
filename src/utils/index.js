import mockRequests from './mockAjax'

// 获取轮播图的接口
export const reqCar = () =>
  mockRequests({
    url: '/car',
    method: 'get'
  })

// 获取双争评比接口
// export const reqGetComparison = () =>
//   mockRequests({
//     url: '/comparison',
//     method: 'get'
//   })
