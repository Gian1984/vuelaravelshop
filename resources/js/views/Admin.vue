<template>
    <header>
        <div class="text-center mt-10">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Organize your business</span>
                {{ ' ' }}
                <span class="block text-indigo-600 xl:inline">online</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                From here you will be able to manage your customers, your orders and your products.
            </p>
        </div>
    </header>
    <main>
        <div class="mx-auto sm:px-6 lg:px-4 justify-center px-3">

            <Users></Users>
            <Orders></Orders>
            <Products></Products>
            <Faqs></Faqs>
            <component :is="activeComponent"></component>

        </div>
    </main>
</template>

<script>
import Main from '../components/admin/Main'
import Users from '../components/admin/Users'
import Products from '../components/admin/Products'
import Orders from '../components/admin/Orders'
import Faqs from '../components/admin/Faqs'

export default {
    data() {
        return {
            user: null,
            activeComponent: null
        }
    },
    components: {
        Main, Users, Products, Orders, Faqs
    },
    beforeMount() {

        this.user = JSON.parse(localStorage.getItem('bigStore'))
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
    },

}
</script>

