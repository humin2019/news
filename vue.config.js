// vue的整体项目的配置文件
// 优先级比webpack的配置高，可以把webpack的配置写在vue.config.js，会覆盖webpack.config.js里的配置
// eslint要在文末回车，否则报错
module.exports = {
  devServer: {
    open: true
  }
}
