<template>
    <div class="flex flex-col">
        <h1 class="mt-10 p-2 font-bold">Order Active</h1>
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
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Delivery Address
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                is Delivered?
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cost
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
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
                                        <div class="text-sm font-medium text-gray-900">
                                            Order ref. n° {{ order.id }}
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            {{ order.product.name }}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{order.quantity}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                {{order.address}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {{order.is_delivered == 1? "Yes" : "No"}}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                € {{order.quantity * order.product.price}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                <button v-if="order.is_delivered == 0" type="button" @click="deliver(index)"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Send
                                    <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { MailIcon,} from '@heroicons/vue/outline'


export default {
    data() {
        return {
            orders : []
        }
    },
    beforeMount(){
        axios.get('/api/orders/').then(response => this.orders = response.data)
    },
    methods: {
        deliver(index) {
            let order = this.orders[index]
            axios.patch(`/api/orders/${order.id}/deliver`).then(response => {
                this.orders[index].is_delivered = 1
                this.$forceUpdate()
            })
        }
    },

    components: {
        MailIcon,
    },
}
</script>
