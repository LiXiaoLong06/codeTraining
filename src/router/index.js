import { createRouter, createWebHistory } from 'vue-router'
import main from "@/components/main.vue"
import shopCar from "@/components/shopCar.vue"
const routes = [
  {
    path:'/',
    component: main
  },
  {
    path: '/main',
    name: "main",
    component: main 
  },
  {
    path: '/shopCar',
    name: "shopCar",
    component: shopCar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
