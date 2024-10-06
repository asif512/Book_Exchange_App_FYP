<template>
    <div class="">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900 capitalize">{{ page }}</h1>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button type="button"
                @click="store.setPostModalStatus(true)"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize">Add
                    post</button>
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="px-3 py-3.5  text-left text-sm font-semibold text-gray-900 capitalize">
                                        title</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        category</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        date</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        status</th>
                                    <th scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
                                        action</th>

                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <template v-if="posts && posts.length">

                                    <tr v-for="(post, index) in posts" :key="index">
                                        <td
                                            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 capitalize">
                                            {{ post.title }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">{{
                                            post.category }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">{{
                                            post.date }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize ">
                                            <span class=" text-white text-xs font-semibold py-1 px-2 rounded-full"
                                                :class="post.status === 'active' ? 'bg-green-500' : post.status === 'sold' ? 'bg-gray-500' : 'bg-blue-500'">
                                                {{ post.status }}
                                            </span>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                                            <Menu as="div" class="relative ml-3" v-if="post">
                                                <div>
                                                    <MenuButton
                                                        class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                        <span class="absolute -inset-1.5" />
                                                        <span class="sr-only">Open user menu</span>
                                                        Edit
                                                    </MenuButton>
                                                </div>
                                                <transition enter-active-class="transition ease-out duration-200"
                                                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                                                    leave-active-class="transition ease-in duration-75"
                                                    leave-from-class="transform opacity-100 scale-100"
                                                    leave-to-class="transform opacity-0 scale-95">
                                                    <MenuItems
                                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    
                                                        <MenuItem v-slot="{ active }">
                                                        <span @click="handleUpdatePost(post)"
                                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Update</span>
                                                        </MenuItem>
                                                        <MenuItem v-slot="{ active }">
                                                        <span @click="handleDeletePost(post)"
                                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Delete</span>
                                                        </MenuItem>
                                                    </MenuItems>
                                                </transition>
                                            </Menu>
                                        </td>
    
                                    </tr>
                                </template>
                                <tr v-else>
                                    <td colspan="12" class="p-5">Books not found!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <PostModal v-if="store.getPostModalStatus"/>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { userStore } from "/stores/store"
const store = userStore();

const props = defineProps({
    posts: {
        type: Array,
        default: () => []
    },
    page: {
        type: String,
        default: 'home'
    }
})

const handleUpdatePost =  (post) => {
    store.setSelectedPostForUpdate(post)
    store.setPostModalStatus(true)
}

const handleDeletePost = async(post) => {
	store.setLoaderStatus(true)
	await store.deletePost(post.id)
	store.setNotificationFields({
		isVissible: true,
		title: 'successfully',
		message: 'Post delete successfully'
	})
}
</script>