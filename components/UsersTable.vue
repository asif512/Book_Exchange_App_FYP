<template>
    <div class="">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900 capitalize">{{ activeTab }}</h1>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="px-3 py-3.5  text-left text-sm font-semibold text-gray-900 capitalize">
                                        avatar</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        name</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        email</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        contact</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        Status</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        action</th>

                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="(user, index) in users" :key="index">
                                    <td
                                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 capitalize">
                                        <img class="h-8 w-8 rounded-full" src="/public/images/avator.png" alt="" /></td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{
                                        user.name }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{
                                        user.email }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{
                                        user.phone_number }}</td>

                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize ">
                                        <span class=" text-white text-xs font-semibold py-1 px-2 rounded-full"
                                            :class="user.status === 'active' ? 'bg-green-500' : 'bg-gray-500'">
                                            {{ user.status }}
                                        </span>
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">Edit</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>import { userStore } from "/stores/store"
const store = userStore();
const props = defineProps({
    users: {
        type: Array,
        default: () => []
    },
    activeTab: {
        type: String,
        default: 'all'
    }
})
</script>