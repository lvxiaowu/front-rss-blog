import { http } from '@zswl/admin'

export default {
  init: () => http.get('/init', { mock: { delay: 1000 } }),
}
