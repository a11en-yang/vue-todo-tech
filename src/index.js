import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './app.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

const root = document.createElement('div')
document.body.appendChild(root)


new Vue({
  render: (h) => h(App)
}).$mount(root)
