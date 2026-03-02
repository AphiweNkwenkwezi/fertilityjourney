import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Logs from '../views/Logs.vue'
import Profile from '../views/Profile.vue'
import Practises from '../views/Practises.vue'
import Login from '../views/Login.vue'
import Register from '../views/RegisterUser.vue'
import DocumentMonitoring from '../components/DocumentMonitoring.vue'

const routes = [
    {
    path: '/monitoring',
    name: 'document',
    component: DocumentMonitoring
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/login',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'practises',
        name: 'practises',
        component: Practises
      },
      {
        path: 'logs',
        name: 'logs',
        component: Logs
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router