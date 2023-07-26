import axios from 'axios'
export function option (val) {
  const server = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 6000
  })
  // 请求拦截
  server.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    console.log(error)
  })

  // 添加响应拦截器
  server.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log(error)
  })

  return server(val)
}
