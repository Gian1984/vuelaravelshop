<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <h5 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">Modify or add</span>
                        {{ ' ' }}
                        <span class="block text-indigo-600 xl:inline">your team members.</span>
                    </h5>
                    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Here you can modify all about your team members.
                    </p>
                    <div>
                        <div class="flex justify-between">
                            <label for="firstname" class="block text-sm font-medium text-gray-700">Firstname :</label>
                        </div>
                        <div class="mt-1">
                            <input type="text" v-model="data.firstname" name="firstname" id="firstname" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: John" />
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="lastname" class="block text-sm font-medium text-gray-700">Lastname :</label>
                        </div>
                        <div class="mt-1">
                            <input type="text" v-model="data.lastname" name="lastname" id="lastname" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: Doe" />
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="email" class="block text-sm font-medium text-gray-700 mt-2">Email :</label>
                        </div>
                        <div class="mt-1">
                            <input type="text" v-model="data.email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="example@example.com" />
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="role" class="block text-sm font-medium text-gray-700 mt-2">Role :</label>
                        </div>
                        <div class="mt-1">
                            <input type="text" v-model="data.role" name="role" id="role" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: CTO" />
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="description" class="block text-sm font-medium text-gray-700 mt-2">Quote :</label>
                        </div>
                        <div class="mt-1">
                            <textarea v-model="data.quote" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" rows="3" placeholder="Enter quote."></textarea>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="author" class="block text-sm font-medium text-gray-700 mt-2">Author :</label>
                        </div>
                        <div class="mt-1">
                            <input type="text" v-model="data.author" name="author" id="author" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ex: Albert Einstein" />
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="photo" class="block text-sm font-medium text-gray-700 mt-2">Photo :</label>
                        </div>
                        <div class="mt-1 flex justify-center">
                              <span class="inline-block overflow-hidden">
                                  <img class="w-32 h-32" :src="data.image" v-show="data.image != null">
                              </span>
                        </div>
                        <div class="text-center mt-2">
                            <label class="custom-file-upload">
                                <input type="file" id="file" @change="attachFile"/>
                                Upload
                            </label>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <button type="button" @click="uploadFile" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Done
                        </button>

                        <button type="button" @click="close" class="mt-5 ml-3 inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-full shadow-sm text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Leave
                        </button>
                    </slot>
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
    overflow-y: initial !important
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    border: 4px solid #4338CA;
    border-radius: 25px;
    width: 400px;
    height: 600px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.modal-container::-webkit-scrollbar {
    display: none;
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

input[type="file"] {
    display: none;
}

.custom-file-upload {
    border: 1px solid #ccc;
    border-radius: 30px;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}

</style>

<script>

export default {
    props: ['member'],
    data() {
        return {
            attachment: null
        }
    },
    computed: {
        data: function() {
            if (this.member != null) {
                return this.member
            }
            return {
                firstname: "",
                lastname: "",
                email: "",
                role: "",
                quote: "",
                author: "",
                image: false
            }
        }
    },
    methods: {
        attachFile(event) {
            this.attachment = event.target.files[0];
        },
        uploadFile(event) {
            if (this.attachment != null) {
                let formData = new FormData();
                formData.append("image", this.attachment)
                let headers = {'Content-Type': 'multipart/form-data'}
                axios.post("/api/upload-member", formData, {headers}).then(response => {
                    this.member.image = response.data
                    this.$emit('close', this.member)
                })
            } else {
                this.$emit('close', this.member)
            }
        },
        close(){
            this.$emit('close', this.member)
        },

    },

}
</script>
