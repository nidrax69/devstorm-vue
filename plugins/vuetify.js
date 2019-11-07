import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// v2.0
const opts = {
  theme: { disable: true }
}
Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(opts)
}).$mount('#app')