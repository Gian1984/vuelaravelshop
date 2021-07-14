<template>
    <div class="flex flex-col mb-10">
        <h1 class="mt-10 p-2 font-bold">Faqs & questions</h1>
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Was answered?
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Question
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Reply
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(faq,index) in faqs" @key="index">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div>
                                    <div class="text-sm font-medium text-gray-900">
                                        Order ref. n°{{ faq.order_id }}
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        {{ faq.name }}
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{faq.phone}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                {{faq.email}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {{faq.was_answered == 1? "Yes" : "No"}}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                               {{faq.question}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button v-if="faq.was_answered == 0" type="button" @click="answer(index)"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Send
                                    <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                                </button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button type="button" @click="removeFaq(faq.id, index)" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <TrashIcon class="h-5 w-5" aria-hidden="true" />
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
import { MailIcon, TrashIcon} from '@heroicons/vue/outline'


export default {
    data() {
        return {
            faqs : []
        }
    },
    beforeMount(){
        axios.get('/api/faqs/').then(response => this.faqs = response.data)
    },

    methods: {
        answer(index) {
            let faq = this.faqs[index]
            axios.patch(`/api/faqs/${faq.id}/replied`).then(response => {
                this.faqs[index].was_answered = 1
                this.$forceUpdate()
            })
        },
        removeFaq(faqID, index){


            axios.delete("/api/faqs/"+ faqID)
                .then( response => this.faqs.splice(index))

                .catch(error =>{
                    console.log(error);
                })
        },

    },

    components: {
        MailIcon,
        TrashIcon
    },

}
</script>
