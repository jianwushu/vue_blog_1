import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  //设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  //登录拦截
  if(!store.getters.userInfo){
    store.commit("userInfo",sessionStorage.getItem('userInfo'))
    // store.commit("token",sessionStorage.getItem("Token"))
  }
  if(to.path === '/admin/login'){
    if(store.getters.isLogin){
      next('/admin')
    }
  }else{
    if(to.path.match("/admin")){
      if(!store.getters.isLogin){
        next('/admin/login')
      }
    }
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
