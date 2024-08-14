<template>
    <div class="h-screen bg-gray-100 admin-dashboard overflow-hidden ">
        <div class="flex h-full">
            <!-- Sidebar -->
            <aside class="w-64 bg-indigo-600 text-white px-4 py-6">
                <h2 class="text-xl font-bold">Dashboard</h2>
                <ul class="mt-6 space-y-4">
                    <li @click="handleSelect(status)" v-for="(status, index) in usersStatus" :key="index">
                        <a href="#" class="hover:bg-indigo-400 block p-2 rounded capitalize"
                            :class="{ 'bg-indigo-400': status === activeUsers }">{{ status }}</a>
                    </li>
                </ul>
            </aside>

            <!-- Main Content -->
            <div class="flex-1 flex flex-col">
                <!-- Header -->
                <header class="bg-white shadow-md p-4 flex justify-between">
                    <h1 class="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton
                                class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">Open user menu</span>
                                <img v-if="user" class="h-8 w-8 rounded-full" :src="user.avatar" alt="avatar" />
                                <img v-else class="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="avatar" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-200"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <span @click="handleLogout"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Sign
                                    out</span>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <NuxtLink to="/user/setting">
                                    <span
                                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Setting</span>
                                </NuxtLink>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </header>

                <!-- Content -->
                <main class="flex-1 p-6">
                    <div v-if="!store.isLoading">
                        <UsersTable :activeTab="activeUsers" :users="users" />
                        <!-- footer -->
                        <div class="flex flex-1 justify-between sm:justify-end mb-4 mr-4" v-if="users.length > 10">
                            <a href="#"
                                class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 h-max">Previous</a>
                            <a href="#"
                                class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 h-max">Next</a>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    </div>
</template>


<script setup>
const router = useRouter()
import { userStore } from "/stores/store"
const store = userStore();
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


// states
const usersStatus = reactive(['all', 'active', 'pending'])
const activeUsers = ref('all')
const user = ref("")



// computed properties
const users = computed(() => store.getUsers)


// methods
const handleSelect = (user) => {
    activeUsers.value = user
    store.setUsersStatus(activeUsers.value)
}

const handleLogout = () => {
    localStorage.clear()
    router.push({ path: "/" })
}

onMounted(() => {
    store.setLoaderStatus(true)
    store.fetchUsers();
    const activeUser = localStorage.getItem('activeUser')
    user.value = JSON.parse(activeUser)
})
</script>