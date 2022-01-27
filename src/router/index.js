import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EditUserForm from '../views/EditUserForm'
import ProductDetails from '../views/ProductDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/EditUserForm/:id',
    name: 'EditUserForm',
    component: EditUserForm
  },
  {
    path: '/ProductDetails/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
