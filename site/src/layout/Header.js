import { Button } from '@zswl/components'
import { logout } from '@/utils'
import styles from './style.less'

function Header() {
  return (
    <div className={styles.header}>
      <span>浙商未来</span>
      <Button type="primary" onClick={logout}>
        退出
      </Button>
    </div>
  )
}

export default Header
