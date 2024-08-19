<template>
	<div class="">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-base font-semibold leading-6 text-gray-900 capitalize">{{ activeTab }}</h1>
			</div>
		</div>
		<div class="mt-8 flow-root">
			<div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<div class="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
						<table class="min-w-full divide-y divide-gray-300">
							<thead class="bg-gray-50">
								<tr>
									<th scope="col" class="px-3 py-3.5  text-left text-sm font-semibold text-gray-900 capitalize">
										avatar</th>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
										name</th>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
										email</th>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
										contact</th>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
										registraion number</th>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
										Status</th>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
										action</th>

								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								<template v-if="users && users.length">
									<tr v-for="(user, index) in users" :key="index">
										<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 capitalize">
											<img class="h-8 w-8 rounded-full" :src="user.avatar" alt="" v-if="user.avatar" />
											<img class="h-8 w-8 rounded-full" src="/public/images/avator.png" alt="" v-else />
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{
											user.name }}</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{
											user.email }}</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{
											user.phone_number }}</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{
											user.registration_number }}</td>
	
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize ">
											<span class=" text-white text-xs font-semibold py-1 px-2 rounded-full"
												:class="user.status === 'active' ? 'bg-green-500' : 'bg-gray-500'">
												{{ user.status }}
											</span>
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
											<Menu as="div" class="relative ml-3" v-if="user">
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
														<span @click="handleApproveUser(user)"
															:class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Approve</span>
														</MenuItem>
														<MenuItem v-slot="{ active }">
														<span @click="handleDeleteUser(user)"
															:class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Delete</span>
														</MenuItem>
													</MenuItems>
												</transition>
											</Menu>
										</td>
	
									</tr>
								</template>
								<tr v-else >
									<td colspan="12" class="p-5">Users not found!</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { userStore } from "/stores/store"
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


const handleApproveUser = async (user) => {
	store.setLoaderStatus(true)
	const updatedUser = { ...user, status: 'active' }
	await store.updateUserStatus(updatedUser, user.id)
	store.setNotificationFields({
		isVissible: true,
		title: 'successfully',
		message: 'User active successfully'
	})
}

const handleDeleteUser = async(user) => {
	store.setLoaderStatus(true)
	await store.deleteUser(user.id)
	store.setNotificationFields({
		isVissible: true,
		title: 'successfully',
		message: 'User active successfully'
	})
}
</script>