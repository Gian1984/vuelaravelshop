<!-- This example requires Tailwind CSS v2.0+ -->
<template>

    <header>
        <div class="text-center my-10">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">About</span>
                {{ ' ' }}
                <span class="block text-indigo-600 xl:inline"> us.</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We are a group of specialists who like to put the customer's needs at the center of our attention.
            </p>
        </div>
    </header>


    <main>

        <div class="bg-white">
            <div class=" mx-auto py-12 px-4 text-center sm:px-6  lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
                        <p class="text-xl text-gray-500">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
                    </div>
                    <ul class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 ">
                        <li v-for="person in team" :key="person.name">
                            <div class="space-y-6">
                                <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" :src="person.image" alt="" />
                                <div class="space-y-2">
                                    <div class="text-lg leading-6 font-medium space-y-1">
                                        <h3>{{ person.firstname }} {{ person.lastname }}</h3>
                                        <p class="text-indigo-600">{{ person.role }}</p>
                                        <i class="text-gray-500">{{ person.quote }}</i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Stats section -->
        <div class="relative bg-gray-900">
            <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                <div class="h-full w-full xl:grid xl:grid-cols-2">
                    <div class="h-full xl:relative xl:col-start-2">
                        <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
                        <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
                    </div>
                </div>
            </div>
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 class="text-sm font-semibold tracking-wide uppercase">
                        <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Valuable Metrics</span>
                    </h2>
                    <p class="mt-3 text-3xl font-extrabold text-white">Get actionable data that will help grow your business</p>
                    <p class="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>
                    <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        <p v-for="item in metrics" :key="item.id">
                            <span class="block text-2xl font-bold text-white">{{ item.stat }}</span>
                            <span class="mt-1 block text-base text-gray-300"
                            ><span class="font-medium text-white">{{ item.emphasis }}</span> {{ item.rest }}</span
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gradient Feature Section -->
        <div>
            <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                <h2 class="text-3xl font-extrabold tracking-tight text-center">
                    Inbox support built for efficiency
                </h2>
                <p class="mt-4 text-lg text-center text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.
                </p>
                <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                    <div v-for="feature in features" :key="feature.name">
                        <div>
                <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10 bg-gradient-to-r from-purple-600 to-indigo-500">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                        </div>
                        <div class="mt-6">
                            <h3 class="text-lg font-medium">{{ feature.name }}</h3>
                            <p class="mt-2 text-base text-gray-500">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-800">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">Our</span>
                        {{ ' ' }}
                        <span class="block text-indigo-600 xl:inline"> partners.</span>
                    </h2>
                </div>
                <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                    </div>
                    <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                    </div>
                    <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>



import {
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const features = [
    {
        name: 'Unlimited Inboxes',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: InboxIcon,
    },
    {
        name: 'Manage Team Members',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: UsersIcon,
    },
    {
        name: 'Spam Report',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in Markdown',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: PencilAltIcon,
    },
    {
        name: 'Team Reporting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentReportIcon,
    },
    {
        name: 'Saved Replies',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ReplyIcon,
    },
    {
        name: 'Email Commenting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ChatAltIcon,
    },
    {
        name: 'Connect with Customers',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: HeartIcon,
    },
]

const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

export default {

    data() {
        return {
            team: [],
        }
    },

    beforeMount() {
        axios.get('/api/team/').then(response => this.team = response.data)
    },

    components: {
        ChevronDownIcon,
        InboxIcon,
        MenuIcon,
        SparklesIcon,
        XIcon,
    },

    setup() {
        return {
            features,
            metrics,
        }
    },
}
</script>
