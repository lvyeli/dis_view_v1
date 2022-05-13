const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  //配置方式一：cli提供的
  outputDir: './build',
  //配置方式二：webpack合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    //跨域配置
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://10.101.9.150:8800',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true
        }
      }
    }
  }
}
