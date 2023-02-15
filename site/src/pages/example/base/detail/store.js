import { PageStore } from '@zswl/components'
import { makeAutoObservable } from '@zswl/admin'
import Api from './api'

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  page = new PageStore({
    request: (params) => {
      return Api.getDetail(params)
    },
  })
}
export default new Store()
