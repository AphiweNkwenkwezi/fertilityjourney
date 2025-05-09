import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Logs from '../views/Logs.vue'
import Profile from '../views/Profile.vue'
import Practises from '../views/Practises.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router