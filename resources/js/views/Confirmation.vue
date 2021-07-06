<template>
    <div>
        <div class="container-fluid hero-section d-flex align-content-center justify-content-center flex-wrap ml-auto">
            <h2>
                <span class="title"><strong>Thank You!</strong></span><br>
                <span class="medium-text">Your order has been placed.</span><br>
                <router-link :to=" '/userboard' " class=" items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                    <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span class="ml-3">See you're order</span>
                </router-link>
            </h2>
        </div>
    </div>
</template>


