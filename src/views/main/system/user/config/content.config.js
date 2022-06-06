export const contentTableConfig = {
  title: '用户列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '用户名', minWidth: '200' },
    { prop: 'role', label: '角色', minWidth: '200', slotName: 'role' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '350',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '350',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '250', slotName: 'handler' }
  ]
}
