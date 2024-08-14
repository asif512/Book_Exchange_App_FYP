<template>
    <div class="setting-page">
        <Header></Header>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">
            <div class="text-gray-800  px-4 pb-6 flex flex-col justify-center ">
                <div class="relative py-3 w-full max-w-[800px] mx-auto text-center">
                    <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                        <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                        <div class="py-6 px-8">:
                            <div class="preview">
                                <img class="rounded-full max-w-[200px] max-h-[200px]" width="200" height="200" :src="avatar" alt="preview">
                            </div>
                             <label class="block font-semibold capitalize mt-4">avatar:</label>
                            <input
                                class="border w-full p-1 h-9 hove5:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md mt-2"
                                id="file_input" type="file" @change="uploadFile">
                                <label class="block font-semibold capitalize mt-4">email:</label>
                            <input type="text" placeholder="Email" v-model="email"
                                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                                <label class="block font-semibold capitalize mt-4">username:</label>
                            <input type="text" placeholder="Username" v-model="username"
                                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                                <label class="block font-semibold capitalize mt-4">phone number:</label>
                            <input type="text" placeholder="Phone number" v-model="phone_number"
                                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                                <label class="block font-semibold capitalize mt-4">registration number:</label>
                            <input type="text" placeholder="Registration number" v-model="registration_number"
                                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                                <label class="block font-semibold capitalize mt-4">password:</label>
                            <input type="text" placeholder="Password" v-model="password"
                                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                                <label class="block font-semibold capitalize mt-4">confirmed password:</label>
                            <input type="text" placeholder="confirmed Password" v-model="confirmed_password"
                                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                            <div class="flex mt-5 justify-end items-baseline">
                                <button type="button" @click="handleUpdateUser"
                                    class="rounded-md w-max uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">update
                                    user
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { userStore } from "/stores/store"
const store = userStore();
const router = useRouter()


const username = ref("")
const avatar = ref("")
const email = ref("")
const password = ref("")
const confirmed_password = ref("")
const phone_number = ref("")
const registration_number = ref("")
const user = ref("")

const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatar.value = e.target.result;
        };
        reader.readAsDataURL(file);

    }
}

const handleUpdateUser = async() => {
    store.setLoaderStatus(true)
    const payload = {
        name: username.value,
        avatar: avatar.value,
        email: email.value,
        phone_number: phone_number.value,
        registration_number: registration_number.value,
        password: password.value,
        confirmed_password: confirmed_password.value
    }
    await store.updateUser(payload)
    localStorage.setItem('activeUser', JSON.stringify({...user.value, ...payload}))
    store.setLoaderStatus(false)
    store.setNotificationFields({
            isVissible: true,
            title: 'successfully',
            message: 'user update successfully'
        })
}

onMounted(() => {
    const activeUser = localStorage.getItem('activeUser')
    user.value = JSON.parse(activeUser)
    if(user.value) {
        username.value = user.value.name
        email.value = user.value.email
        avatar.value = user.value.avatar
        phone_number.value = user.value.phone_number
        registration_number.value = user.value.registration_number
        password.value = user.value.password
        confirmed_password.value = user.value.confirmed_password
    }

})
</script>