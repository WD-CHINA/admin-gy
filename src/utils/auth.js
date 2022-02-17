/*
 * @Description: 
 * @Version: 2.0
 * @Autor: RM
 * @Date: 2022-02-17 10:31:59
 * @LastEditors: RM
 * @LastEditTime: 2022-02-17 10:35:08
 */
import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, 'vue_admin_template_token')
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
