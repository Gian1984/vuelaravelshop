<template>
    <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div class="lg:py-24">
                        <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                            <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">We're hiring</span>
                            <span class="ml-4 text-sm">Visit our careers page</span>
                            <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                        </a>
                        <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                            <span class="block">A better way to</span>
                            <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">ship web apps</span>
                        </h1>
                        <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                        </p>
                        <div class="mt-10 sm:mt-12">
                            <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                                <div class="sm:flex">
                                    <div class="min-w-0 flex-1">
                                        <label for="email" class="sr-only">Email address</label>
                                        <input id="email" type="email" placeholder="Enter your email" class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                                    </div>
                                    <div class="mt-3 sm:mt-0 sm:ml-3">
                                        <button type="submit" class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Start free trial</button>
                                    </div>
                                </div>
                                <p class="mt-3 text-sm text-gray-300 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms or service</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                        <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                        <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Feature section with screenshot -->
    <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
        <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
                <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Serverless</h2>
                <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    No server? No problem.
                </p>
                <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                </p>
            </div>
            <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg" alt="" />
            </div>
        </div>
    </div>

    <!-- Feature section with grid -->
    <div class="relative bg-white py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Deploy faster</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Everything you need to deploy your app
            </p>
            <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
            </p>
            <div class="mt-12">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="feature in features" :key="feature.name" class="pt-6">
                        <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                            <div class="-mt-6">
                                <div>
                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                          <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                                </div>
                                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
                                <p class="mt-5 text-base text-gray-500">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Testimonial section -->
    <div class="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="relative lg:-my-8">
                <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                        <img class="object-cover lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
                    </div>
                </div>
            </div>
            <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                        <div>
                            <svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p class="mt-6 text-2xl font-medium text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                            </p>
                        </div>
                        <footer class="mt-6">
                            <p class="text-base font-medium text-white">Judith Black</p>
                            <p class="text-base font-medium text-cyan-100">CEO at PureInsights</p>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>

    <!-- Blog section -->
    <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div class="relative">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Learn</h2>
                <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Helpful Resources
                </p>
                <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                    Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                </p>
            </div>
            <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                <div v-for="post in blogPosts" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
                    </div>
                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-600">
                                <a :href="post.category.href" class="hover:underline">
                                    {{ post.category.name }}
                                </a>
                            </p>
                            <a :href="post.href" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    {{ post.title }}
                                </p>
                                <p class="mt-3 text-base text-gray-500">
                                    {{ post.preview }}
                                </p>
                            </a>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a :href="post.author.href">
                                    <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" :alt="post.author.name" />
                                </a>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a :href="post.author.href" class="hover:underline">
                                        {{ post.author.name }}
                                    </a>
                                </p>
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time :datetime="post.datetime">
                                        {{ post.date }}
                                    </time>
                                    <span aria-hidden="true">
                          &middot;
                        </span>
                                    <span> {{ post.readingLength }} read </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="relative bg-gray-900">
        <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="" />
            <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply" />
        </div>
        <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
                <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                    Award winning support
                </h2>
                <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                    We’re here to help
                </p>
                <p class="mt-3 text-lg text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
                </p>
                <div class="mt-8">
                    <div class="inline-flex rounded-md shadow">
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                            Visit the help center
                            <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/vue/solid'
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/vue/outline'


const features = [
    {
        name: 'Push to Deploy',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
        icon: CloudUploadIcon,
    },
    {
        name: 'SSL Certificates',
        description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple Queues',
        description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
        icon: RefreshIcon,
    },
    {
        name: 'Advanced Security',
        description: 'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Powerful API',
        description:
            'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
        icon: CogIcon,
    },
    {
        name: 'Database Backups',
        description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
        icon: ServerIcon,
    },
]
const blogPosts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        author: {
            name: 'Roel Aufderehar',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '6 min',
    },
    {
        id: 2,
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: { name: 'Video', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        author: {
            name: 'Brenna Goyette',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '4 min',
    },
    {
        id: 3,
        title: 'Improve your customer experience',
        href: '#',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { name: 'Case Study', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        author: {
            name: 'Daniela Metz',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '11 min',
    },
]

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        ChevronRightIcon,
        ExternalLinkIcon,
        MenuIcon,
        XIcon,
    },
    setup() {
        return {
            features,
            blogPosts,
        }
    },
}
</script>
