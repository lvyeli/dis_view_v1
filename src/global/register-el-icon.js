//按需引入icon
import {
  Avatar,
  Iphone,
  Search,
  User,
  Expand,
  Fold,
  DataAnalysis,
  View,
  Coordinate,
  Refresh
} from '@element-plus/icons-vue'
const components = [
  Avatar,
  Iphone,
  Search,
  User,
  Expand,
  Fold,
  DataAnalysis,
  View,
  Coordinate,
  Refresh
]
export default function (app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
