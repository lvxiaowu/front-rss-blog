import { http } from '@zswl/admin'

export default {
  getList: (params) => http('/example/list', { params, mock: true }),
  remove: (data) => http.post('/example/remove', data, { mock: true }),
}
