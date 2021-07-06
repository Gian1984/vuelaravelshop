<template>
    <div class="relative bg-white">
        <div class="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
            <img class="w-full h-full object-cover" :src="product.image" alt="Support team" />
        </div>
        <div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
            <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
                <div>
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <UsersIcon class="h-6 w-6" aria-hidden="true" />
                    </div>
                </div>
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    {{product.name}}
                </h2>
                <p class="mt-6 text-lg text-gray-500">
                    {{product.description}}
                </p>
                <div class="mt-8 overflow-hidden">
                    <dl class="-mx-8 -mt-8 flex flex-wrap">
                        <div class="flex flex-col px-8 pt-8">
                            <dt class="order-2 text-base font-medium text-gray-500">
                                Price
                            </dt>
                            <dd class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                                € {{product.price}}
                            </dd>
                        </div>
                        <div class="flex flex-col px-8 pt-8">
                            <dt class="order-2 text-base font-medium text-gray-500">
                                Pcs.
                            </dt>
                            <dd class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                                {{product.units}}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div class="mt-8">
                    <div class="inline-flex rounded-md shadow">
                        <router-link :to="{ path: '/checkout/'+ product.id }" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                            Buy Now
                            <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { UsersIcon, ExternalLinkIcon, } from '@heroicons/vue/outline'

export default {
    data(){
        return {
            product : []
        }
    },
    beforeMount(){
        let url = `/api/products/${this.$route.params.id}`
        axios.get(url).then(response => this.product = response.data)
    },

    components: {
        UsersIcon,
        ExternalLinkIcon,
    },

}
</script>
