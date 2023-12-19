import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding.vue";
import DataBindingStyle from "@/views/DataBindingStyle.vue";
import DataBindingObject from "@/views/DataBindingObject.vue";
import DataBindingAxios from "@/views/DataBindingAxios.vue";
import NestedComponent from "@/views/NestedComponent.vue";
import ParentComponent from "@/views/ParentComponent.vue";
import SlotUseModalLayout from "@/views/SlotUseModalLayout.vue";
import ProvideInject from "@/views/ProvideInject.vue";

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
  },{
    path : "/databindingAxios",
    name : "DataBindingAxios",
    component: DataBindingAxios
  },{
    path : "/nested",
    name : "NestedComponent",
    component: NestedComponent
  },{
    path : "/parentComponent",
    name : "ParentComponent",
    component: ParentComponent
  },{
    path : "/slotModalLayout",
    name : "SlotModalLayout",
    component: SlotUseModalLayout
  },{
    path : "/provideInject",
    name : "ProvideInject",
    component: ProvideInject
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
