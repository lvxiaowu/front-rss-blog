// import Api from './api'
import menu from './menu'
/**
 * 这个store主要用来存在一些全局的状态，比如个人信息,菜单栏,一些下拉选项等
 */
class Store {
  init = async () => {
    // return await Api.init()
    return {
      // 菜单
      menu,
      // 权限标识
      access: '*',
      // 用户信息
      user: {},
      // 从接口获取的选项，基本都是用在下拉框中的选项
      optionsType: {},
    }
  }
}
export default new Store()
