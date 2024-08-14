<template>
    <div class="signin min-h-screen  text-gray-800  px-4 py-6 flex flex-col justify-center">
        <div class="relative py-3 w-full max-w-[800px] mx-auto text-center">
            <div class="mt-4 bg-white shadow-md rounded-xl flex overflow-hidden">
                <div class="h-full min-h-full w-1/2">
                    <img class="h-[436px] object-cover" src="/public/images/4.jpg" alt="">
                </div>
                <div class="py-6 px-8 text-left w-1/2">
                    <label class="block font-bold text-base uppercase">signin form</label>
                    <label class="block font-semibold mt-5">Username:</label>
                    <input type="text" placeholder="username" v-model="username"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <label class="block mt-3 font-semibold">Password:</label>
                    <input type="password" placeholder="password" v-model="password"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <div class="flex mt-5 justify-between items-baseline">
                        <button type="button" @click="handleLogin"
                            class="rounded-md w-full uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Login
                        </button>
                    </div>
                    <div class="flex mt-4 justify-center">
                        <span class="underline cursor-pointer text-base" @click="handleForgotPassword">
                            Forgot password?
                        </span>
                    </div>
                    <div class="text-end mt-2">

                    </div>
                    <div class="uppercase text-center my-2">or</div>
                    <div class="flex justify-between items-baseline">
                        <NuxtLink class="w-full" to="signup">
                            <button type="button"
                                class="rounded-md w-full uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                sign up
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const router = useRouter()
import { userStore } from "/stores/store"
const store = userStore();

const username = ref("")
const password = ref("")

const handleLogin = () => {
    const users = store.getUsers
    if (!username.value) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'Please enter the username'
        })
        return
    }
    if (!password.value) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'Please enter the user password'
        })
        return
    }
    if (users && users.some(obj => obj.name.toLowerCase() === username.value.toLowerCase()) && users.some(obj => obj.password.toLowerCase() === password.value.toLowerCase())) {
        const activeUser = users.find(user => user.name === username.value)
        if (activeUser.status === "pending") {
            store.setNotificationFields({
                isVissible: true,
                title: 'failed',
                message: 'Currently user not activated'
            })
            return
        }
        localStorage.setItem('activeUser', JSON.stringify(activeUser))
        store.setNotificationFields({
            isVissible: true,
            title: 'successfully',
            message: 'Login user successfully'
        })
        setTimeout(() => {
            if (activeUser.role === 'admin') {
                router.push({ path: "/admin/dashboard" })
            } else {
                router.push({ path: "/" })
            }
        }, 900);
    } else {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'User not exist'
        })
    }
}

const handleForgotPassword = () => {
    const users = store.getUsers
    if (!username.value) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'Please enter the username'
        })
        return
    }
    if(users && !users.some(obj => obj.name.toLowerCase() === username.value.toLowerCase())) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'User not exist'
        })
        return  
    }
    if(users && users.some(obj => obj.name.toLowerCase() === username.value.toLowerCase())) {
        const activeUser = users.find(user => user.name === username.value)
        router.push({path: 'forgotPassword', query: {id: activeUser.id}})
    }
}

onMounted(() => {
    store.fetchUsers();
})
</script>