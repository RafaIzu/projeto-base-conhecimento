import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Temporario!

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCIsImVtYWlsIjoicmFmYUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTk3NTIyMTk1LCJleHAiOjE1OTc3ODEzOTV9.f1uh1u30mS875xFEUyBgYSCLMuPn9pL8Hyv6EgjrzuE'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
