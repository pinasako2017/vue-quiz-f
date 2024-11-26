import { createWebHistory, createRouter } from "vue-router";
import AppHeader from '../components/AppHeader.vue'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
        header: AppHeader,
        default: HomeView,
    } 
  },
  {
    path: "/about",
    name: "About",
    components: {
        header: AppHeader,
        default: AboutView,
    } 
  },
  {
  path: "/login",
  name: "Login",
  components: {
      header: AppHeader,
      default: LoginView,
  } 
}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;