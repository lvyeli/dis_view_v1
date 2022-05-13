export const formConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '20px 60px'
  },
  formItems: [
    {
      field: 'password',
      type: 'password',
      label: 'mima',
      placeholder: '请输入用户名'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'sport',
      type: 'select',
      label: '用户名',
      placeholder: '请输入用户名',
      //针对select
      options: [
        { title: '1', value: 'ba', label: '12' },
        {
          title: '2',
          value: 'bas',
          label: '123'
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
