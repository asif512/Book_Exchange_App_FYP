<template>
    <div class="signup min-h-screen  text-gray-800  px-4 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 w-full max-w-[500px] mx-auto text-center">
            <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                <div class="py-6 px-8">
                    <label class="block font-semibold">Email</label>
                    <input type="text" placeholder="Email" v-model="email"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <label class="block font-semibold mt-4">Username</label>
                    <input type="text" placeholder="Username" v-model="username"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <label class="block font-semibold mt-4">Phone</label>
                    <input type="text" placeholder="Phone" v-model="phone"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <label class="block  font-semibold mt-4">Password</label>
                    <input type="password" placeholder="Password" v-model="password"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <label class="block mt-4 font-semibold">Confirmed Password</label>
                    <input type="password" placeholder="confirmed Password" v-model="confirmedPassword"
                        class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                    <div class="flex mt-5 justify-between items-baseline">
                        <button type="button"
                            class="rounded-md w-full uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            up</button>
                    </div>
                    <div class="uppercase text-center my-4">or</div>
                    <div class="flex mt-5 justify-between items-baseline">
                        <button type="button"
                            class="rounded-md w-full uppercase bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <!-- <NuxtLink to="signin">Login</NuxtLink> -->
                            <a href="/signin">login </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const username = ref("")
const email = ref("")
const password = ref("")
const confirmedPassword = ref("")
const phone = ref("")
</script>