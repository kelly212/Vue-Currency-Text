import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import money3 from 'v-money3'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createVuetify} from 'vuetify'

const vuetify = createVuetify({
   components,
   directives,
})


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(money3)
  .use(vuetify)
  .mount('#app')
