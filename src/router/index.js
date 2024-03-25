import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Container.vue";
import tools from "@/utils/tools";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: "/",
            component: Layout,
            name: "home",
            redirect: '/home',
            children: [

                {
                    path: "home",
                    name: "homePage",
                    components: {
                        default: () => import("@/views/Home.vue"),
                    }, 
                },

            ],
        },
        // 錯誤轉導
        {
            path: "/:pathMatch(.*)",
            component: () => import("@/views/ErrorPage.vue")
        },
    ]
});




export default router;
