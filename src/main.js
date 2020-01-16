import Vue from 'vue'
import App from './App.vue'

// 禁止控制栏打印提示消息
Vue.config.productionTip = false

new Vue({
  // 渲染根组件
  render: h => h(App)
}).$mount('#app')
