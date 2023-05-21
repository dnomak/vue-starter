import '@/assets/styles/index.scss'

import { createApp } from 'vue'

import App from '@/app/index.vue'
const app = createApp(App)

import router from '@/router'
app.use(router)

import pinia from '@/app/modules/pinia'
app.use(pinia)

import i18n from '@/app/modules/i18n'
app.use(i18n)

import FontAwesomeIcon from '@/app/modules/font-awesome'
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
