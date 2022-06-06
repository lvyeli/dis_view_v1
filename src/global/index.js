import registerElIcon from './register-el-icon'
import registerProperties from './register-properties'
export function globalRegister(app) {
  app.use(registerElIcon)
  app.use(registerProperties)
}
