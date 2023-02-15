import { observer } from '@zswl/admin'
import { Page } from '@zswl/components'
import store from './store'
import { Descriptions } from 'antd'

const { Item } = Descriptions
function Index(params) {
  const { name, age } = store.page.getData()
  return (
    <Page current={'详情'} params={params} store={store.page}>
      <Descriptions bordered column={2}>
        <Item label={'姓名'}>{name}</Item>
        <Item label={'年龄'}>{age}</Item>
      </Descriptions>
    </Page>
  )
}

export default observer(Index)
