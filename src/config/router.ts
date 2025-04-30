import { createRouter, createWebHashHistory} from 'vue-router'
import IndexPage from "../pages/IndexPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import SearchPage from '../pages/SearchPage.vue';


const routes = [
    { path: '/', component: IndexPage },
    { path: '/team', component: TeamPage },
    { path: '/user', component: UserPage },
    { path: '/search', component: SearchPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;