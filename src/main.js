import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)

const app = createApp(App)

app
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
