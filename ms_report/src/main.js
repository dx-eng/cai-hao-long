import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import ElementUI from 'element-ui'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
ElementUI.Dialog.props.closeOnClickModal.default = false;
import './components'
// 引入自定义指令
import './directives/dialogDrag';
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import './assets/styles/styles.scss'

// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
import '@/assets/styles/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)




Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
