<template>
    <div class="forgot-password min-h-screen  text-gray-800  px-4 py-6 flex flex-col justify-center">
        <div class="relative py-3 w-full max-w-[400px] mx-auto text-center">
            <div class="mt-4 bg-white shadow-md rounded-xl flex overflow-hidden">
                <div class="py-6 px-8 text-left w-full">
                    <label class="block font-bold text-base uppercase">forgot password</label>
                    <label class="block font-semibold mt-5">Enter new password:</label>
                    <input type="password" placeholder="password" v-model="password"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <label class="block mt-3 font-semibold">Enter confirm password:</label>
                    <input type="password" placeholder="Confirme password" v-model="confirmed_password"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <div class="flex mt-5 justify-between items-baseline">
                        <button type="button" @click="handleForgotPassword"
                            class="rounded-md w-full uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            forgot password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const route = useRoute()
const router = useRouter()
import { userStore } from "/stores/store"
const store = userStore();

const password = ref('')
const confirmed_password = ref('')

onMounted(async () => {
    await store.fetchUsers();

})

const handleForgotPassword = async () => {
    const users = store.getUsers
    const id = route.query.id
    const user = users.find((u) => u.id === id)

    const payload = {
        ...user,
        password: password.value,
        confirmed_password: confirmed_password.value
    }
    if (!password.value || !confirmed_password.value) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'Please enter new password'
        })
        return
    }
    if (password.value !== confirmed_password.value) {
        store.setNotificationFields({
            isVissible: true,
            title: 'failed',
            message: 'Please make sure password and confirmed password should be same'
        })
        return
    }
    await store.updateUser(payload)
    store.setNotificationFields({
        isVissible: true,
        title: 'successfully',
        message: 'User password reset successfully'
    })
    setTimeout(() => {
        router.push('/signin')
    }, 1000);
    console.log({ id, users, user, payload })
}
</script>