import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home";
import About from "./views/About";
import Marketplace from "./views/Marketplace";
import Admin from "./views/Admin";
import Checkout from "./views/Checkout";
import Confirmation from "./views/Confirmation";
import Login from "./views/Login";
import Register from "./views/Register";
import SingleProduct from "./views/SingleProduct";
import UserBoard from "./views/UserBoard";
import Company from "./views/Company";
import ForgetPassword from "./views/ForgetPassword";
import ResetPassword from "./views/ResetPassword";


const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/marketplace",
            name: "Marketplace",
            component: Marketplace,
        },
        {
            path: "/admin",
            name: "Admin",
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true
            }
        },
        {
            path: '/admin/:pages',
            name: 'admin-pages',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true
            }
        },
        {
            path: "/checkout/:id",
            name: "Checkout",
            component: Checkout,
        },
        {
            path: "/confirmation",
            name: "Confirmation",
            component: Confirmation,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
        {
            path: "/products/:id",
            name: "single-products",
            component: SingleProduct,
        },
        {
            path: "/company",
            name: "Company",
            component: Company,
        },
        {
            path: "/userboard",
            name: "Userboard",
            component: UserBoard,
            meta: {
                requiresAuth: true,
                is_user: true
            }
        },
        {
            path: "/forgetpassword",
            name: "Forgetpassword",
            component: ForgetPassword,
        },
        {
            path: "/reset-password/:token",
            name: "Reset-password",
            component: ResetPassword,
        },
    ]
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('bigStore.jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('bigStore.user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                }
                else {
                    next({ name: '/userboard' })
                }
            }
            else if (to.matched.some(record => record.meta.is_user)) {
                if (user.is_admin == 0) {
                    next()
                }
                else {
                    next({ name: '/admin' })
                }
            }
            next()
        }
    } else {
        next()
    }
})


export default router;
