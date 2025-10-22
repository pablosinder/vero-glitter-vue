import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes: [{
        path: '/cart',
        component: ShoppingCartPage,
    }, {
        path: '/products',
        component: ProductsPage,
    }, {
        path: '/products/:productId',
        component: ProductDetailPage,
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    }, {
        path: '/',
        redirect: '/products'
    }]
}))
.mount('#app')
