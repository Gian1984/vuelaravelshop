<template>

    <header>
        <div class="text-center my-10">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">All your</span>
                {{ ' ' }}
                <span class="block text-indigo-600 xl:inline"> orders.</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Keep track of all your orders and their status.
            </p>
        </div>
    </header>

    <main>
            <div class="flex flex-col py-10 px-5">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Pcs.
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Info
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(order,index) in orders" @key="index">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img class="h-10 w-10 rounded-full" :src="order.product.image" alt="" />
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm text-gray-900">
                                                    <span class="text-sm text-gray-500">Product:</span> {{order.product.name}}
                                                </div>
                                                <div class="text-sm text-gray-900">
                                                    <span class="text-sm text-gray-500">Deliver to:</span> {{order.address}}
                                                </div>
                                                <div class="text-sm text-gray-900">
                                                    <span class="text-sm text-gray-500">Order n°:</span> {{order.id}}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {{order.is_delivered == 1? "shipped!" : "not shipped"}}
                                      </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {{order.product.price}}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        {{order.quantity}}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button type="button" @click="faqOrder = order"  class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <SupportIcon class="h-5 w-5" aria-hidden="true"  />
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <modal @close="endEditing" :order="faqOrder" v-show="faqOrder != null"></modal>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-900">
                <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
                        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <p class="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
                    </div>
                    <div class="mt-20">
                        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                            <div v-for="faq in faqs" :key="faq.id">
                                <dt class="font-semibold text-white">
                                    {{ faq.question }}
                                </dt>
                                <dd class="mt-3 text-gray-400">
                                    {{ faq.answer }}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
    </main>

</template>

<script>
import { SupportIcon } from '@heroicons/vue/outline'
import Modal from "../components/user/FaqModal";

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },

]

export default {
    data() {
        return {
            user : null,
            faqOrder: null,
            orders : [],
        }
    },
    beforeMount() {

            this.user = JSON.parse(localStorage.getItem('bigStore.user'))

            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')

            axios.get(`api/users/${this.user.id}/orders`)
                .then(response => this.orders = response.data)


        },

    setup() {
        return {
            faqs,
        }
    },

    methods:{
        endEditing(order) {
            this.faqOrder = null
        },
    },


    components:{
        SupportIcon,
        Modal,
    }

}
</script>
