import { Modal, Form } from '@zswl/components'
import store from './store'
import { Input } from 'antd'

const { Item } = Form
function Index() {
  return (
    <Modal
      store={store.edit}
      propsBy={(data) => ({
        title: data ? '编辑' : '新增',
      })}
      destroyOnClose
    >
      <Form>
        <Item name="name" label="姓名">
          <Input />
        </Item>
        <Item name="age" label="年龄">
          <Input />
        </Item>
      </Form>
    </Modal>
  )
}

export default Index
