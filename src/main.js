import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  //设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
