import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Temporario!

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IlJlaW11IEhha3VyZWkiLCJlbWFpbCI6Imhha3VyZWlAZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTc1MjAyNDcsImV4cCI6MTU5Nzc3OTQ0N30.6YpfXQhyP2n_cFlukR6DzmMpNmpgpy3Ho4wHSDlRGGo'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
