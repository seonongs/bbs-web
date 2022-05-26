import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView";
import BbsListView from "@/views/bbs/BbsListView";
import BbsCreateView from "@/views/bbs/BbsCreateView";
import BbsUpdateView from "@/views/bbs/BbsUpdateView";
import BbsDetailView from "@/views/bbs/BbsDetailView";
// import NotFoundView from "@/views/NotFoundView";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/login",
        name: "LoginView",
        component: LoginView,
    },
    {
        path: "/bbsCreate",
        name: "BbsCreateView",
        component: BbsCreateView,
    },
    {
        path: "/bbsList",
        name: "BbsListView",
        component: BbsListView,
    },
    {
        path: "/bbsUpdate/:id",
        name: "BbsUpdateView",
        component: BbsUpdateView,
    },
    {
        path: "/bbsDetail/:id",
        name: "BbsDetailView",
        component: BbsDetailView,
    },
    // {
    //     path: '*',
    //     component: NotFoundView,
    // },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
