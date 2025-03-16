import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { fr } from 'yup-locales'

import { setLocale } from 'yup'

const app = createApp(App);


app.config.globalProperties.BASE_URL = 'http://localhost:5555';

 app.use(router)
    .use(VueAxios, axios)
    .mount('#app')
setLocale(fr);


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import VueAxios from 'vue-axios'
import axios from 'axios'


// /chemin/param1/param2       ==> $route.params
// /chemin?var1=val1&var2=val2 ==> $route.query
