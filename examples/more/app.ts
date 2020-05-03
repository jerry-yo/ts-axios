/*
 * @Author: yangjingpuyu@aliyun.com
 * @Date: 2020-03-30 21:37:34
 * @LastEditors: yangjingpuyu@aliyun.com
 * @LastEditTime: 2020-05-02 00:17:10
 * @FilePath: /ts-axios/examples/more/app.ts
 * @Description: Do something ...
 */
import axios, { AxiosError } from '../../src/index'
import qs from 'qs'

// ------------- withCredentials ------------

// document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/; secure=false; samesite=none';

// axios.get('/more/get').then(res => {
//   console.log(res, 'resouce')
// })

// axios.post('http://127.0.0.1:8088/more/serverf', { withCredentials: true }, {
//   withCredentials: true,
// }).then(res => {
//   console.log(res)
// })

// ---------------- xsrf ----------------

// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// })

// instance.get('/more/get').then(res => {
//   console.log(res)
// })

// ------------------ auth -----------------

// axios.post('/more/post', {
//   a: 1
// }, {
//   auth: {
//     username: 'Yee',
//     password: '123456'
//   }
// }).then(res => {
//   console.log(res)
// })

// ------------------ custom status error -----------------

// axios.get('/more/304').then(res => {
//   console.log(res)
// }).catch((e: AxiosError) => {
//   console.log('no custom')
//   console.log(e.message)
// })

// axios.get('/more/304', {
//   validateStatus(status) {
//     return status >= 200 && status < 400
//   }
// }).then(res => {
//   console.log(res)
// }).catch((e: AxiosError) => {
//   console.log('custom')
//   console.log(e.message)
// })

// ------------------ params serializer  -----------------

// axios.get('/more/get', {
//   params: new URLSearchParams('a=b&c=d')
// }).then(res => {
//   console.log(res)
// })

// axios.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res)
// })

// const instance = axios.create({
//   paramsSerializer(params) {
//     return qs.stringify(params, { arrayFormat: 'indices' })
//   }
// })

// instance.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res)
// })

// ------------------ baseURL  -----------------


// const instance = axios.create({
//   baseURL: 'https://img.mukewang.com/'
// })

// instance.get('5cc01a7b0001a33718720632.jpg')

// instance.get('https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg')

// ------------------- axios.all axios.spread ------------
function getA() {
  return axios.get('/more/A')
}

function getB() {
  return axios.get('/more/B')
}

const axiosAll = axios.all([getA(), getB()])

console.log(axiosAll)

axiosAll
.then(res => {
  console.log(res)
})


axiosAll
.then(axios.spread(function(resA, resB) {
  console.log(resA.data)
  console.log(resB.data)
}))


axiosAll
.then(([resA, resB]) => {
  console.log(resA.data)
  console.log(resB.data)
})

const fakeConfig = {
  baseURL: 'https://www.baidu.com/',
  url: '/user/12345',
  params: {
    idClient: 1,
    idTest: 2,
    testString: 'thisIsATest'
  }
}
console.log(axios.getUri(fakeConfig))