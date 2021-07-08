<template>
    <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div class="lg:py-24">
                        <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                            <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">We're hiring</span>
                            <span class="ml-4 text-sm">Visit our careers page</span>
                            <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                        </a>
                        <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                            <span class="block">A better way to</span>
                            <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">ship web apps</span>
                        </h1>
                        <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                        </p>
                        <div class="mt-10 sm:mt-12">
                            <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                                <div class="sm:flex">
                                    <div class="min-w-0 flex-1">
                                        <label for="email" class="sr-only">Email address</label>
                                        <input id="email" type="email" placeholder="Enter your email" class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                                    </div>
                                    <div class="mt-3 sm:mt-0 sm:ml-3">
                                        <button type="submit" class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Start free trial</button>
                                    </div>
                                </div>
                                <p class="mt-3 text-sm text-gray-300 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms or service</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                        <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                        <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ul class="my-10 px-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="product in products" :key="product.index" class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div class="flex-1 flex flex-col p-8">
                <img class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" :src="product.image" alt="" />
                <h3 class="mt-6 text-gray-900 text-sm font-medium">{{product.id}} {{ product.name }}</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                    <dt class="sr-only">Title</dt>
                    <dd class="text-gray-500 text-sm">€ {{ product.price }}</dd>
                    <dt class="sr-only">Role</dt>
                    <dd class="mt-3">
                        <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">Pcs. {{ product.units }}</span>
                    </dd>
                </dl>
            </div>
            <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                    <div class="w-0 flex-1 flex">
                        <router-link :to=" '/products/' + product.id " class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                            <SearchIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                            <span class="ml-3">View</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </li>
    </ul>




    <!-- Blog section -->

</template>

<script>

import { SearchIcon, PhoneIcon, ChevronRightIcon, ExternalLinkIcon} from '@heroicons/vue/solid'


export default {
    data(){
        return {
            products : []
        }
    },
    mounted(){
        axios.get("api/products/").then(response => this.products = response.data)
    },
    components: {
        SearchIcon,
        PhoneIcon,
        ChevronRightIcon,
        ExternalLinkIcon
    },
}
</script>
