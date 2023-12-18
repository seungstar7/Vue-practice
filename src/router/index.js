import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding.vue";
import DataBindingStyle from "@/views/DataBindingStyle.vue";
import DataBindingObject from "@/views/DataBindingObject.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/databinding',
    name: 'DataBinging',
    component: DataBinding
  },{
    path: '/databindingStyle',
    name: 'DataBingingStyle',
    component: DataBindingStyle
  },{
    path: '/databindingObject',
    name: 'DataBindingObject',
    component: DataBindingObject
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
