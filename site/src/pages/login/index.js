import styles from './style.less'
import Api from './api'
import { App, Button } from '@zswl/components'
import { Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import loginImg from './login.png'
import { setQjtAc, setSalt } from '@/utils'
import JSEncrypt from 'jsencrypt'

const { Item } = Form
/* eslint-disable */
const pubKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNpMKIVmt0u5lx62tRD1O/15EyNLN0lNi3++ytnvLalkQNSrrqU2w3uD5NwdVE/v4OrDznTpBdTl6N1ryXAILU5GDu0bLATC46RKxDlH52LIvaRBU7BZkEGqllEqRJFmwtvtNCVeZD6ekJWc67MLUh4LNa1yMQ9V6Zsf64uY2lgwIDAQAB'

function Login() {
  const [form] = Form.useForm()
  const submit = async () => {
    const values = await form.validateFields()
    let { password, account } = values
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(pubKey)
    password = encrypt.encrypt(password)
    const params = { account, password }
    try {
      const { _salt_ } = await Api.getAuthCode(params)
      setSalt(_salt_)
    } finally {
      const { csrfToken, _qjt_ac_ } = await Api.login(params)
      setQjtAc(_qjt_ac_)
      App.setToken(csrfToken)
      window.location.href = '/'
    }
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.left}>
        <img src={loginImg} alt="login" />
      </div>
      <div className={styles.right}>
        <Form
          form={form}
          className={styles.login}
          labelCol={{ span: 4 }}
          size={'large'}
          layout={'vertical'}
          style={{ width: 400 }}
          initialValues={{
            account: 'zhangchao',
            password: 'zhangchao',
          }}
        >
          <div className={styles.title}>浙江金控智慧风控管理平台</div>
          <Item label="用户名" required={false} name="account" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} />
          </Item>
          <Item label="密码" required={false} name="password" rules={[{ required: true }]}>
            <Input.Password prefix={<LockOutlined />} />
          </Item>
          <Item noStyle label=" " colon={false}>
            <Button block type="primary" onClick={submit}>
              登陆
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
