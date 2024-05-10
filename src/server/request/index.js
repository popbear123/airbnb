import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class XYRequest {
  constructor(baseURL, timeout) {
    this.axios = axios.create({ baseURL, timeout })

    this.axios.interceptors.response.use((res) => {
      return res.data
    }, (err) => {
      console.log(err);
    })
  }

  request(config) {
    return this.axios.request(config)
  }

  get(url, params, config) {
    return this.request({ url, params, ...config, method: "GET" })
  }

  post(url, data, config) {
    return this.request({ url, data, ...config, method: "POST" })
  }

  delete(url, data, config) {
    return this.request({ url, data, ...config, method: "DELETE" })
  }
}

const request = new XYRequest(BASE_URL, TIMEOUT)

export {
  request
}