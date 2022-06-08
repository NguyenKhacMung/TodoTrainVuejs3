import HomeView from '../components/views/Home'
import AboutView from '../components/views/About'
import ErrorView from '../components/views/Error'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/:pathMatch(.*)*', component: ErrorView }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router