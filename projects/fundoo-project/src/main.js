import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { VueMasonryPlugin } from 'vue-masonry'

const vuetify = createVuetify({
  components,
  directives
})
const app = createApp(App)
app.config.productionTip = false
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueMasonryPlugin)
app.mount('#app')
