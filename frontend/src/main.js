import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Temporario!

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCIsImVtYWlsIjoicmFmYUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTk4MjE2MTYzLCJleHAiOjE1OTg0NzUzNjN9.twMGwa8hm93T3CNuSfFUe2sm0DsfdqUgIwqPE8Z9U7Q'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
