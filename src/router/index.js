import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import myConsulta from '../views/myConsulta.vue'
import login from '../views/LoginView.vue'
import registrate from '../views/RegistrateView.vue'
import actualiza from '../views/ActualizaView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/actualiza',
    name: 'actualiza',
    component: actualiza
    // props: {
    //   p_Apellido: route => ({ query: route.query.q })
    // }
  },
  {
    path: '/about',
    name: 'about',
    component: HomeView
  },
  {
    path: '/consulta',
    name: 'consulta',
    component: myConsulta
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/registrate',
    name: 'registrate',
    component: registrate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
