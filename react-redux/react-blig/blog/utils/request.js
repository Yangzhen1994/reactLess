import axios from 'axios'
import { message,Modal } from 'antd'

// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:7001', // api 的 base_url
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
      config.headers['jwt-token'] = '1'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 501 || res.code === 403 || res.code === 401) {
      Modal.error('系统未登录，请重新登录', '错误', {
        confirmButtonText: '确定',
        type: 'error'
      }).then(() => {
      })
      return Promise.reject('error')
    } else if (res.code === 502) {
      Modal.error('系统内部错误，请联系管理员维护', '错误', {
        confirmButtonText: '确定',
        type: 'error'
      })
      return Promise.reject('error')
    } else if (res.code === 503) {
      Modal.error('请求业务目前未支持', '警告', {
        confirmButtonText: '确定',
        type: 'error'
      })
      return Promise.reject('error')
    } else if (res.code === 504) {
      Modal.error('更新数据已经失效，请刷新页面重新操作', '警告', {
        confirmButtonText: '确定',
        type: 'error'
      })
      return Promise.reject('error')
    } else if (res.code === 505) {
      Modal.error('更新失败，请再尝试一次', '警告', {
        confirmButtonText: '确定',
        type: 'error'
      })
      return Promise.reject('error')
    } else if (res.code === 506) {
      Modal.error('没有操作权限，请联系管理员授权', '错误', {
        confirmButtonText: '确定',
        type: 'error'
      })
      return Promise.reject('error')
    } else if (res.code && (res.code !== 200 && res.code != '000000' && res.code != 0)) {
      /* Message.error(res.errmsg || '出错了')*/
      // 非5xx的错误属于业务错误，留给具体页面处理
      return Promise.reject(response)
    } else if (!res.code) {
      return response
    } else {
      return response
    }
  }, error => {
    if (error.response && error.response.status == 401) {
      Modal.error(error.response.data.message || '系统未登录，请重新登录', '错误', {
        confirmButtonText: '确定',
        type: 'error'
      }).then(() => {
      })
      return Promise.reject(error)
    }
    message.error( '登录连接超时（后台不能连接，请联系系统管理员）')
    return Promise.reject(error)
  })

export default service
