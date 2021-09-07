<template>

    <header>
        <div class="text-center my-10">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Order</span>
                {{ ' ' }}
                <span class="block text-indigo-600 xl:inline"> summary.</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Check all fields before confirming your order!
            </p>
        </div>
    </header>

    <main class="px-5">
        <div class="flex flex-col">
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
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Qnt
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10">
                                            <img class="h-10 w-10 rounded-full" :src="product.image" alt="" />
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ product.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{product.description}}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <span class="inline-flex text-xs leading-5 font-semibold">
                                    <label class="row"><span class="col-md-2 float-left"></span><input type="number" name="units" min="1" :max="product.units" class="col-md-2 float-left" v-model="quantity" @change="checkUnits"></label>
                                  </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    € {{ product.price }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    € {{this.quantity * product.price}}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-10">

            <div v-if="!isLoggedIn">
                <div class="bg-indigo-700 sm:rounded-lg">
                    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                            <span class="block">You need to login to continue.</span>
                            <span class="block">Start using Webshop today.</span>
                        </h2>
                        <p class="mt-4 text-lg leading-6 text-indigo-200">Create your account, it's free and only takes a few minutes!</p>
                        <div class="mt-8 flex justify-center">
                            <div class="inline-flex rounded-md shadow">
                                <button  @click="login" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    Sign in
                                </button>
                            </div>
                            <div class="ml-3 inline-flex">
                                <button @click="register" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="isLoggedIn">

                <div class="relative bg-white my-10">
                    <div class="lg:absolute lg:inset-0">
                        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="" />
                        </div>
                    </div>
                    <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                        <div class="lg:pr-8">
                            <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                    Delivery address
                                </h2>
                                <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                                    We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us.
                                </p>


                                <form @submit.prevent="placeOrder" class="space-y-8 divide-y divide-gray-200">
                                    <div class="space-y-8 divide-y divide-gray-200">
                                        <div class="pt-8">
                                            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                <div class="sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">
                                                        First name
                                                    </label>
                                                    <div class="mt-1">
                                                        <input type="text" v-model="firstname" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                        Last name
                                                    </label>
                                                    <div class="mt-1">
                                                        <input type="text" v-model="lastname" name="last-name" id="last-name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-6">
                                                    <label for="email" class="block text-sm font-medium text-gray-700">
                                                        Email address
                                                    </label>
                                                    <div class="mt-1">
                                                        <input id="email" name="email" v-model="email" type="email" autocomplete="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-6">
                                                    <label for="phone" class="block text-sm font-medium text-gray-700">
                                                        Phone
                                                    </label>
                                                    <div class="mt-1">
                                                        <input id="phone" name="phone" v-model="phone" type="number" autocomplete="phone" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-6">
                                                    <label for="country" class="block text-sm font-medium text-gray-700">
                                                        Country / Region
                                                    </label>
                                                    <div class="mt-1">
                                                        <select id="country" name="country" v-model="country" autocomplete="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                            <option>Italy</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-6">
                                                    <label for="street-address" class="block text-sm font-medium text-gray-700">
                                                        Street address
                                                    </label>
                                                    <div class="mt-1">
                                                        <input type="text" v-model="address" name="street-address" id="street-address" autocomplete="street-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-2">
                                                    <label for="city" class="block text-sm font-medium text-gray-700">
                                                        City
                                                    </label>
                                                    <div class="mt-1">
                                                        <input type="text" name="city" v-model="city" id="city" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-2">
                                                    <label for="state" class="block text-sm font-medium text-gray-700">
                                                        State / Province
                                                    </label>
                                                    <div class="mt-1">
                                                        <input type="text" name="state" v-model="province" id="state" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-2">
                                                    <label for="zip" class="block text-sm font-medium text-gray-700">
                                                        ZIP / Postal
                                                    </label>
                                                    <div class="mt-1">
                                                        <input type="text" name="zip" v-model="zip" id="zip" autocomplete="postal-code" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>

                                                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                                    Payment details
                                                </h2>

                                                <div class="sm:col-span-6">
                                                    <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
                                                    <div class="mt-5">
                                                        <div id="card-element"></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="pt-5">
                                        <div class="flex justify-end">
                                            <button type="submit" v-if="isLoggedIn" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </form>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

import { loadStripe } from '@stripe/stripe-js';

export default {



    data(){
        return {
            stripe: {},
            cardElement: {},
            customer: {
                firstname: '',
                lastname: '',
                email: '',
                address: '',
                city: '',
                country: '',
                zip: ''
            },
            paymentProcessing: false,
            phone : "",
            firstname : "",
            lastname : "",
            email : "",
            city : "",
            country : "",
            province : "",
            zip : "",
            address : "",
            quantity : 1,
            isLoggedIn : null,
            product : [],
            pid: this.$route.params.id
        }
    },
    async mounted() {
        this.isLoggedIn = localStorage.getItem('bigStore.jwt') != null
        this.stripe = await loadStripe(process.env.MIX_STRIPE_KEY);
        const elements = this.stripe.elements();
        this.cardElement = elements.create('card', {
            classes: {
                base: 'rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out'
            }
        });
        this.cardElement.mount('#card-element');
    },
    beforeMount() {
        axios.get('/api/products/'+ this.pid).then(response => this.product = response.data)

        if (localStorage.getItem('bigStore.jwt') != null) {
            this.user = JSON.parse(localStorage.getItem('bigStore.user'))
            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('bigStore.jwt')
        }
    },

    methods : {
        login() {
            this.$router.push({name: 'Login', params: {nextUrl: this.$route.fullPath}})
        },
        register() {
            this.$router.push({name: 'Register', params: {nextUrl: this.$route.fullPath}})
        },

        async placeOrder(e) {
            e.preventDefault()

            this.paymentProcessing = true;

            let address = this.firstname+' '+this.lastname+' '+this.address+' '+this.city+' '+this.province+' '+this.country+' '+this.zip+' '+this.phone+' '+this.email
            let product_id = this.product.id
            let quantity = this.quantity

            const {paymentMethod, error} = await this.stripe.createPaymentMethod(
                'card', this.cardElement, {
                    billing_details: {
                        name: this.firstname+ ' ' + +this.lastname,
                        email: this.email,
                        address: {
                            line1: this.address,
                            city: this.city,
                            state: this.country,
                            postal_code: this.zip
                        }
                    }
                }
            );

            if (error) {
                this.paymentProcessing = false;
                console.error(error);
            } else {
                console.log(paymentMethod);
                this.customer.amount = this.product.price * this.quantity;
                // axios.post('/api/purchase', this.customer)
                axios.post('/api/orders/', {address, quantity, product_id})
                    .then((response) => {
                        this.paymentProcessing = false;
                        console.log(response);
                        this.$router.push({ name: '/confirmation' });
                    })
                    .catch((error) => {
                        this.paymentProcessing = false;
                        console.error(error);
                    });
            }
        },

            // axios.post('/api/orders/', {address, quantity, product_id})
            //     .then(response => this.$router.push('/confirmation'))
        },
        checkUnits(e){
            e.preventDefault()
            if (this.quantity > this.product.units) {
                this.quantity = this.product.units
            }
        }

}
</script>
