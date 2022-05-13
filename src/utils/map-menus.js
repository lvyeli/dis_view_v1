//根据后端返回的userMenus动态注册路由
let firstMenu = null
export function mapMenusToRoutes(userMenus) {
  const routes = []
  //1.加载默认所有的routes
  const allRoutes = []
  const routeFiles = require.context('../router/main', true, /\.js$/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  //2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus) => {
    for (const menu of menus) {
      if (menu.type === '2') {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
export function pathMapToBreadcrumbs(userMenus, currentPath) {
  const breadcrumbs = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
export function pathMapToMenu(userMenus, currentPath, breadcrumbs) {
  for (const menu of userMenus) {
    if (menu.type === '1') {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        if (breadcrumbs) {
          breadcrumbs.push({ name: menu.name })
          breadcrumbs.push({ name: findMenu.name })
        }
        return findMenu
      }
    } else if (menu.type === '2' && menu.url === currentPath + '') {
      return menu
    }
  }
}
export { firstMenu }
