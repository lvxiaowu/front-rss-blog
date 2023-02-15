import { App, AppLayout } from '@zswl/components'
import store from './store'
import Header from './Header'

function Layout({ children }) {
  return (
    <App init={store.init}>
      <AppLayout header={<Header />}>{children}</AppLayout>
    </App>
  )
}

export default Layout
