<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Insert new password
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Please fill the following field
                </p>
            </div>
            <form class="mt-8 space-y-6" autocomplete="off" @submit.prevent="resetPassword">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" v-model="email" :rules="emailRules" placeholder="user@example.com" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" v-model="password" :rules="passwordRules" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Confirm Password</label>
                        <input id="password_confirmation" name="password_confirmation" type="password" v-model="password_confirmation" :rules="passwordRules" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                </div>
                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Modify Password
                    </button>
                </div>
            </form>
            <div v-if="errors  != 0" class="rounded-md bg-red-50 p-4 mt-10">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm font-medium text-red-800">
                            There were errors with your submission
                        </h3>
                        <div class="mt-2 text-sm text-red-700">
                            <ul role="list" class="list-disc pl-5 space-y-1">
                                <li>
                                    Your password must be at least 6 characters.
                                </li>
                                <li>
                                    Verify that the email is correct.
                                </li>
                                <li>
                                    The link may have expired.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LockClosedIcon, XCircleIcon  } from '@heroicons/vue/solid'

export default {
    components: {
        LockClosedIcon,
        XCircleIcon
    },

    data() {
        return {
            token: null,
            email: null,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: null,
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be more than 6 characters',
            ],
            errors :"",
            password_confirmation: null,
            has_error: false
        }
    },

    methods: {
        resetPassword(e) {
            e.preventDefault()
            if (this.password !== this.password_confirmation || this.password.length <= 0) {
                this.password = ""
                this.password_confirmation = ""
                return alert('Passwords do not match')
            }

            let email = this.email
            let password = this.password
            let password_confirmation = this.password_confirmation
            let token = this.$route.params.token
            axios.post("/api/reset-password", {
                token,
                email,
                password,
                password_confirmation
            }).then(response => {
                let data = response.data
                    this.$router.push({name: 'Login'})
            }).catch((error)=>{
                this.errors = error.message
            });
        }
    }
}
</script>
