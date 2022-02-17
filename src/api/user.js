/*
 * @Description: 
 * @Version: 2.0
 * @Autor: RM
 * @Date: 2022-02-17 10:31:59
 * @LastEditors: RM
 * @LastEditTime: 2022-02-17 10:58:21
 */
import request from '@/utils/request'
export function memberGet(query) {
  return request({
    url: '/member/get',
    method: 'get',
    params: query
  })
}
export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
