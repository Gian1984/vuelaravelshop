<template>
    <div class="flex flex-col">
        <h1 class="mt-10 p-2 font-bold">Member adding & modify</h1>
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Team Member
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Quote
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Author
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Edit
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(member,index) in members" @key="index">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full" :src="member.image" alt="" />
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                            {{ member.id }} {{ member.firstname }}
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            {{ member.lastname }}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <input v-model="member.role" >
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <input v-model="member.email" >
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap max-w-xl">
                                <div class="text-sm text-gray-900 text-sm truncate ...">{{ member.quote }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-2xs text-gray-500">
                                <input v-model="member.author" >
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button type="button" @click="editingMember = member"  class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Edit
                                    <ExternalLinkIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                                </button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button type="button" @click="removeMember(member.id, index)" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <modal @close="endEditing" :member="editingMember" v-show="editingMember != null"></modal>
                    <modal @close="addMember"  :member="addingMember" v-show="addingMember != null"></modal>
                </div>
                <button type="button" @click="newMember" class="m-5 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add New Member
                </button>
            </div>
        </div>
    </div>

</template>

<script>
import { ExternalLinkIcon, TrashIcon } from '@heroicons/vue/outline'
import Modal from './TeamModal'

export default {
    data() {
        return {
            members: [],
            editingMember: null,
            addingMember: null
        }
    },

    components: {
        Modal,
        ExternalLinkIcon,
        TrashIcon,
    },


    beforeMount() {
        axios.get('/api/team/').then(response => this.members = response.data)
    },
    methods: {
        newMember() {
            this.addingMember = {
                firstname: null,
                lastname: null,
                email: null,
                image: null,
                role: null,
                quote: null,
                author: null,
            }
        },
        endEditing(member) {
            this.editingMember = null

            let index = this.members.indexOf(member)
            let firstname = member.firstname
            let lastname = member.lastname
            let email = member.email
            let role = member.role
            let quote = member.quote
            let author = member.author


            axios.put(`/api/team/${member.id}`, {firstname, lastname, email, role, quote, author})
                .then(response => this.members[index] = member)
        },
        addMember(member) {
            this.addingMember = null

            let firstname = member.firstname
            let lastname = member.lastname
            let email = member.email
            let role = member.role
            let quote = member.quote
            let author = member.author
            let image = member.image

            axios.post("/api/team/", {firstname, lastname, email, role, quote, author, image})
                .then(response => this.members.push(member))
        },

        removeMember(memberID, index){


            axios.delete("/api/team/"+ memberID)
                .then( response => this.members.splice(index))

                .catch(error =>{
                    console.log(error);
                })
        },
    },

}
</script>
