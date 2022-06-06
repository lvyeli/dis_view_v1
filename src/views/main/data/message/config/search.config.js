export const searchFormConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '20px 60px'
  },
  formItems: [
    {
      field: 'Magnitude',
      type: 'input',
      label: '震级',
      placeholder: '请输入震级'
    },
    {
      field: 'FocalDepth',
      type: 'input',
      label: '震源深度',
      placeholder: '请输入震源深度'
    },
    {
      field: 'EconomicLoss',
      type: 'input',
      label: '经济损失',
      placeholder: '请输入经济损失'
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
      label: '时间',
      //其他选项
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
