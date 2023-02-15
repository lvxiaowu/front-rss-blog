import { Table, Page, Button } from '@zswl/components'
import { observer } from '@zswl/admin'
import Edit from './Edit'
import store from './store'

function Base() {
  const { keys } = store.table.getSelected()
  return (
    <Page>
      <Table
        selectable
        store={store.table}
        searchbar={{
          items: [
            { label: '姓名', name: 'name' },
            { label: '日期', name: 'date', type: 'rangePicker' },
          ],
        }}
        actions={[
          <Button.Add key={'add'} onClick={store.edit.open} />,
          <Button.Delete key={'delete'} disabled={!keys.length} onClick={store.remove} />,
        ]}
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '城市',
            dataIndex: 'city',
          },
          {
            title: '操作',
            actions({ id }) {
              return [
                { name: '弹框编辑', onClick: store.edit.open },
                { name: '详情', to: `/example/base/detail/${id}` },
              ]
            },
          },
        ]}
      />
      <Edit />
    </Page>
  )
}

export default observer(Base)
