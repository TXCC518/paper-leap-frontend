import { createRouter, createWebHashHistory} from 'vue-router'
import IndexPage from "../pages/IndexPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import EditUserInfoPage from "../pages/EditUserInfoPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import SearchHandlePage from '../pages/SearchHandlePage.vue';
import SearchLayout from '../layouts/SearchLayout.vue';


const routes = [
    { path: '/', component: IndexPage },
    { path: '/team', component: TeamPage },
    { path: '/user', component: UserPage },
    {
        path: '/search',
        component: SearchLayout,
        children: [
            {path: 'result', component: SearchResultPage},
            {path: '', component: SearchHandlePage}
        ]
    },
    { path: '/editUserInfo', component: EditUserInfoPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;