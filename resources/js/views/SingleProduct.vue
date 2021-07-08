<template>

    <header>
        <div class="text-center my-10">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Because details </span>
                {{ ' ' }}
                <span class="block text-indigo-600 xl:inline">matters.</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Learn about your products to be able to use it at top.
            </p>
        </div>
    </header>

    <main>
        <div class="relative bg-white mb-10">
            <div class="h-56 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
                <img class="w-2/3 h-auto flex-shrink-0 mx-auto" :src="product.image" alt="Support team" />
            </div>
            <div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
                <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
                    <div>
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
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


        <div class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to send money
                    </p>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div class="mt-10">
                    <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div v-for="feature in features" :key="feature.name" class="relative">
                            <dt>
                                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
                            </dt>
                            <dd class="mt-2 ml-16 text-base text-gray-500">
                                {{ feature.description }}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import { ExternalLinkIcon, ShoppingCartIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'
import Main from "../components/admin/Main";

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
]

export default {

    setup() {
        return {
            features,
        }
    },

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
        Main,
        ShoppingCartIcon,
        ExternalLinkIcon,
        AnnotationIcon,
        GlobeAltIcon,
        LightningBoltIcon,
        ScaleIcon
    },

}
</script>
