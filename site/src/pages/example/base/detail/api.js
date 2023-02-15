import { http } from '@zswl/admin'

export default {
  getDetail: (params) => http.get('/example/detail', { params }),
}
