import { http, configure, BrowserRouter } from '@zswl/admin'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { App } from '@zswl/components'
import moment from 'moment'
import { getSalt, getQjtAc, handleHttpError } from '@/utils'
import 'moment/locale/zh-cn'
import './app.less'

moment.locale('zh-cn')
configure({ enforceActions: 'never' })
http.setConfig({
  baseURL: '/api',
  headers() {
    return {
      token: JSON.stringify({
        _salt_: getSalt(),
        _qjt_ac_: getQjtAc(),
      }),
      'X-Cf-Random': App.getToken(),
    }
  },
  transformResult(res) {
    const { success, message, data } = res.data
    if (success) {
      return data
    }
    handleHttpError(res.data)
    return Promise.reject(message)
  },
  error(e) {
    const { data } = e.response || {}
    handleHttpError(data)
  },
})
export default function Admin({ children }) {
  return (
    <BrowserRouter>
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        {children}
      </ConfigProvider>
    </BrowserRouter>
  )
}
