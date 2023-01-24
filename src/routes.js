import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";

const routerHistory = createWebHistory();

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NotFoundPage from './pages/NotFound'

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/about",
            name: "About",
            component: AboutPage,
        },
        {
            path: '/:CatchAll(.*)',
            name: "NotFound",
            component: NotFoundPage
        }
    ],
});

export default routers;
