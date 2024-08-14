<template>
    <div class="signup min-h-screen  text-gray-800  px-4 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 w-full max-w-[600px] mx-auto text-center">
            <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                <div class="py-6 px-8">

                    <!-- <label class="block font-semibold capitalize">Email</label> -->
                    <input type="text" placeholder="Email" v-model="email"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <!-- <label class="block font-semibold capitalize mt-4">Username</label> -->
                    <input type="text" placeholder="Username" v-model="username"
                        class=" border w-full h-5 px-3 py-5 mt-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <!-- <label class="block font-semibold capitalize mt-4">Phone Number</label> -->
                    <input type="text" placeholder="Phone number" v-model="phone_number"
                        class=" border w-full h-5 px-3 py-5 mt-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <!-- <label class="block font-semibold capitalize mt-4">Registration Number</label> -->
                    <input type="text" placeholder="Registration number" v-model="registration_number"
                        class=" border w-full h-5 px-3 py-5 mt-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <!-- <label class="block font-semibold capitalize mt-2">upload file</label> -->
                    <input
                        class="border w-full p-1 h-9 mt-5 hove5:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md0"
                        id="file_input" type="file" @change="uploadFile">
                    <!-- <label class="block font-semibold capitalize mt-4">Password</label> -->
                    <input type="password" placeholder="Password" v-model="password"
                        class=" border w-full h-5 px-3 py-5 mt-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <!-- <label class="block mt-4 font-semibold capitalize">Confirmed Password</label> -->
                    <input type="password" placeholder="confirmed Password" v-model="confirmed_password"
                        class=" border w-full h-5 px-3 py-5 mt-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <div class="flex mt-5 justify-between items-baseline">
                        <button type="button" @click="handleRegisteredUser"
                            class="rounded-md w-full uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            up</button>
                    </div>
                    <div class="uppercase text-center my-4">or</div>
                    <div class="flex mt-3 justify-between items-baseline">
                        <NuxtLink class="w-full" to="signin">
                            <button type="button"
                                class="rounded-md w-full uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Login
                            </button>
                        </NuxtLink>
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

const handleRegisteredUser = () => {
    const users = store.getUsers
    if(!username.value || !email.value || !password.value || !confirmed_password.value ) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'User name, email, password and confirmed password are required!'
        })
        return
    }
    if (users.length && users.some(obj => obj.name.toLowerCase() === username.value.toLowerCase())) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'User already registered please try with another user name'
        })
        return
    }
    if (password.value.toLowerCase() !== confirmed_password.value.toLowerCase()) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'Please make sure password and confirmed password should be same!'
        })
        return
    }
    const user = {
        name: username.value,
        avatar: avatar.value,
        email: email.value,
        phone_number: phone_number.value,
        registration_number: registration_number.value,
        status: 'pending',
        role: 'user',
        password: password.value,
        confirmed_password: confirmed_password.value

    }
    store.addUser(user)
    setTimeout(() => {
        store.setNotificationFields({
            isVissible: true,
            title: 'successfully',
            message: 'user registered successfully'
        })
        router.push({ path: "/signin" })
    }, 2000);
}

onMounted(() => {
    store.fetchUsers();
})
</script>