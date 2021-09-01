<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-m">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                        Register your account
                    </h2>
                </div>

                <div class="mt-8">

                    <div class="mt-6">
                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <div>
                                <label for="username" class="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <div class="mt-1">
                                    <input id="username" name="username" type="text" v-model="name" required="" autocomplete="username" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" v-model="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div class="mt-1">
                                    <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password-confirm" class="block text-sm font-medium text-gray-700">
                                    Confirm password
                                </label>
                                <div class="mt-1">
                                    <input id="password-confirm" name="password" type="password" v-model="password_confirmation" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-if="errorsRegister != 0" class="rounded-md bg-red-50 p-4 mt-10">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                            </div>
                            <div class="ml-3">
                                <h3 class="text-sm font-medium text-red-800">
                                    There were errors with your submission:
                                </h3>
                                <div class="mt-2 text-sm text-red-700" v-for="(errorRegister,index) in errorsRegister" @key="index">
                                    {{errorRegister[0]}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { XCircleIcon } from '@heroicons/vue/solid'

export default {

    components: {
        XCircleIcon,
    },

    props : ['nextUrl'],
    data(){
        return {
            name : "",
            email : "",
            password : "",
            password_confirmation : "",
            errorsRegister:"",
        }
    },
    methods : {
        handleSubmit(e) {
            e.preventDefault()
            if (this.password !== this.password_confirmation || this.password.length <= 0) {
                this.password = ""
                this.password_confirmation = ""
                return alert('Passwords do not match')
            }
            let name = this.name
            let email = this.email
            let password = this.password
            let c_password = this.password_confirmation
            axios.post('api/register', {name, email, password, c_password}).then(response => {
                let data = response.data
                localStorage.setItem('bigStore.user', JSON.stringify(data.user))
                localStorage.setItem('bigStore.jwt', data.token)
                if (localStorage.getItem('bigStore.jwt') != null) {
                    this.$emit('loggedIn')
                    let nextUrl = this.$route.params.nextUrl
                    this.$router.push((nextUrl != null ? nextUrl : '/'))
                }
            }).catch((error)=>{
                this.errorsRegister = error.response.data
            });
        }
    }
}
</script>
