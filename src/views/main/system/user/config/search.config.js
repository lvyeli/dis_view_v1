export const searchFormConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '20px 60px'
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'role',
      type: 'select',
      label: '角色',
      placeholder: '请输入角色',
      //针对select
      options: [
        { title: '管理员', value: '1', label: '1' },
        {
          title: '用户',
          value: '0',
          label: '0'
        }
      ]
    },
    {
      field: 'creatTime',
      type: 'datepicker',
      label: '创建时间',
      //其他选项
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
