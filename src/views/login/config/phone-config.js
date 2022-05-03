//编写验证规则
export const rules = {
  number: [
    { required: true, message: '手机号是必传内容', trigger: 'blur' },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: '请输入合法手机号'
    }
  ],
  password: [
    { required: true, message: '验证码是必传内容', trigger: 'blur' },
    { pattern: /^\d{5}$/, message: '验证码必须是5位数字' }
  ]
}
