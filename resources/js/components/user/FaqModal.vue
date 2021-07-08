<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <h5 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">Question about</span>
                        {{ ' ' }}
                        <span class="block text-indigo-600 xl:inline">your order.</span>
                    </h5>
                    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Here you can handle all your question.
                    </p>
                    <div>
                        <div class="flow-root mt-6">
                            <ul class="-my-5 divide-y divide-gray-200">
                                <li  class="py-5">
                                    <div class="relative">
                                        <h3 class="font-bold text-gray-800">
                                            Order n°{{data.id}}: <br><br>
                                        </h3>

                                        <label for="quantity" class="block text-sm font-medium">Quantity :</label>
                                        <p class="mt-1 text-sm text-gray-500 font-semibold line-clamp-2">
                                            Pcs {{ data.quantity }}
                                        </p>

                                        <label for="adress" class="block text-sm font-medium mt-2">Delivery to :</label>
                                        <p class="mt-1 text-sm text-gray-500 font-semibold line-clamp-2">
                                              {{ data.address }}
                                        </p>

                                        <label for="delivered" class="block text-sm font-medium mt-2">Is delivered :</label>
                                        <p class="mt-1 text-sm text-gray-500 font-semibold line-clamp-2">
                                            {{data.is_delivered == 1? "Shipped!" : "Not shipped"}}
                                        </p>

                                        <h3 class="font-bold text-gray-800 mt-6">
                                            Fill info contact : <br><br>
                                        </h3>

                                        <div class="sm:col-span-6">
                                            <div>
                                                <input id="name" name="name" v-model="name" type="text" autocomplete="name" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: Joe Carter" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-6">
                                            <div class="mt-2">
                                                <input id="email" name="email" v-model="email" type="email" autocomplete="email" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: exapmle@example.com" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-6">
                                            <div class="mt-2">
                                                <input id="phone" name="phone" v-model="phone" type="number" autocomplete="phone" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: +39 344 435 ...." />
                                            </div>
                                        </div>

                                        <div>
                                            <div class="mt-2">
                                                <textarea v-model="question" class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" rows="3" placeholder="Enter questions."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button type="button" @click="uploadFile" class="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Send
                            </button>
                            <button type="button" @click="close" class="mt-5 ml-3 inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-full shadow-sm text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Leave
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    border: 4px solid #4338CA;
    border-radius: 25px;
    width: 500px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}
.modal-body {
    margin: 20px 0;
}
.modal-default-button {
    float: right;
}
.modal-enter {
    opacity: 0;
}
.modal-leave-active {
    opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>

<script>
export default {

    props: ['order'],
    data() {
        return {
            attachment: null,
            question:"",
            name: "",
            phone: "",
            email:""
        }
    },

    computed: {
        data: function() {
            if (this.order != null) {
                return this.order
            }
            return {
                name: "",

            }
        }
    },

    methods: {
        uploadFile() {
                let product_id = this.order.product_id
                let user_id = this.order.user_id
                let order_id = this.order.id
                let quantity = this.order.quantity
                let address = this.order.address
                let name = this.name
                let phone = this.phone
                let email = this.email
                let question =  this.question
                axios.post("/api/upload-faq", { product_id, user_id, order_id, quantity, address,name, phone, email, question }).then(response => {
                    this.$emit('close', this.order)
                    this.question = ""
                })
        },

        close(){
            this.$emit('close', this.order)
            this.question = ""
        }
    }
}
</script>
