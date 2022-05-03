//按需引入icon
import { Avatar, Iphone } from '@element-plus/icons-vue'
const components = [Avatar, Iphone]
export default function (app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
