import { ViteSSG } from 'vite-ssg'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/hanken-grotesk'
import '@fontsource-variable/jetbrains-mono'
import './styles/base.css'
import App from './App.vue'
import Home from './pages/Home.vue'

export const createApp = ViteSSG(App, {
  routes: [
    { path: '/', component: Home, props: { lang: 'en' } },
    { path: '/es', component: Home, props: { lang: 'es' } },
  ],
  scrollBehavior(to) {
    return to.hash ? { el: to.hash } : { top: 0 }
  },
})
