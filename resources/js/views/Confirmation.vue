<template>

    <header>
        <div class="text-center my-10">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Your order has been</span>
                {{ ' ' }}
                <span class="block text-indigo-600 xl:inline"> confirmed.</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                <button @click="recap" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                    See you're order
                    <ExternalLinkIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                </button>
            </p>
        </div>
    </header>

    <main>



        <div class="bg-indigo-800">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                        Trusted by customers from over 10 planets ;)
                    </h2>
                    <p class="mt-3 text-xl text-indigo-200 sm:mt-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
                    </p>
                </div>
                <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                    <div class="flex flex-col">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                            Trusted
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold text-white">
                            100%
                        </dd>
                    </div>
                    <div class="flex flex-col mt-10 sm:mt-0">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                            Delivery
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold text-white">
                            24/7
                        </dd>
                    </div>
                    <div class="flex flex-col mt-10 sm:mt-0">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                            Customers
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold text-white">
                            100k+
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

        <div>
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
                    <h2 class="text-3xl font-extrabold tracking-tight gray-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p class="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
                </div>
                <div class="mt-20">
                    <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                        <div v-for="faq in faqs" :key="faq.id">
                            <dt class="font-semibold gray-900">
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

        <div class="bg-gray-900">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <div class="lg:space-y-10">
                    <h2 class="text-3xl font-extrabold text-white text-center">
                        Our partners
                    </h2>
                    <div class="mt-8 flow-root lg:mt-0">
                        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                            <div v-for="logo in logos" :key="logo.name" class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                <img class="h-12" :src="logo.url" :alt="logo.name" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>


<script>
import { MailIcon, ExternalLinkIcon } from '@heroicons/vue/outline'

const logos = [
    { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-purple-200.svg' },
    { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-purple-200.svg' },
    { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-purple-200.svg' },
    { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-purple-200.svg' },
    { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-purple-200.svg' },
]

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

    methods : {
        recap() {
            this.$router.push({name: 'Userboard'})
        },
    },

    components:{
        MailIcon,
        ExternalLinkIcon
    },

    setup() {
        return {
            logos,
            faqs,
        }
    },

}

</script>

