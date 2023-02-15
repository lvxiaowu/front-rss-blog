/**
 * 所有的菜单,注意这个菜单仅仅是本地开发时需要,
 * 因为现在还没有接口
 */
export default [
  {
    title: '首页',
    path: '/',
  },
  {
    title: '基本案例',
    children: [
      {
        title: '简单列表',
        path: '/example/base',
      },
    ],
  },
]
