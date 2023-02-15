import { TableStore, Modal, ModalStore } from '@zswl/components'
import { makeAutoObservable } from '@zswl/admin'
import Api from './api'

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  table = new TableStore({
    request: (params) => {
      return Api.getList(params)
    },
  })
  remove = () => {
    Modal.confirm({
      title: '确定删除吗？',
      onOk: async () => {
        // 拿到选中的数据
        const { keys } = this.table.getSelected()
        await Api.remove({ ids: keys })
        this.table.search()
      },
    })
  }
  edit = new ModalStore({
    onFinish: (values) => {
      console.log('弹框中表单的填写信息', values)
      this.edit.close()
    },
  })
}
export default new Store()
