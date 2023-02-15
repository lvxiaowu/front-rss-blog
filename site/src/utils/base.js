import { setLocalStorage, getLocalStorage, http } from '@zswl/admin'
import { message } from 'antd'
import { App } from '@zswl/components'

/**
 * 登陆相关的，之前同盾的登陆逻辑（不合理），之后会改掉
 * @type {string}
 */
const SALT = '_salt_'
const QJT_AC = '_qjt_ac_'
export function setSalt(value) {
  setLocalStorage(SALT, value)
}
export function getSalt() {
  return getLocalStorage(SALT)
}
export function setQjtAc(value) {
  setLocalStorage(QJT_AC, value)
}
export function getQjtAc() {
  return getLocalStorage(QJT_AC)
}
export async function logout() {
  if (App.getToken()) {
    await http.post('/user/logout', {}, { mock: true })
  }
  localStorage.clear()
  window.location.href = '/login'
}

export function handleHttpError(res) {
  if (!res) {
    return
  }
  const { code, message: msg } = res
  message.destroy()
  if ([401000, 401001, 401002].includes(code)) {
    message.error('登录信息过期，请重新登录', 1).then(() => {
      localStorage.clear()
      logout()
    })
  } else {
    message.error(msg.length > 20 ? '参数错误' : msg, 3)
  }
}
