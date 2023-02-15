import { http } from '@zswl/admin'

export default {
  getAuthCode: (data) => http.post('/user/getAuthCode', data, { type: 'formData', mock: true }),
  login: (data) => http.post('/user/login', data, { type: 'formData', mock: true }),
}
