<template>
    <TransitionRoot as="template" :show="store.getPostModalStatus">
        <Dialog class="relative z-10" @close="store.setPostModalStatus(false)">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div>
                                <label class="block font-semibold capitalize">title </label>
                                <input type="text" placeholder="Enter title e.g (object oriented programing)"
                                    v-model="title"
                                    class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                                <label class="block mt-3 font-semibold capitalize">category</label>
                                <input type="text" placeholder="Enter category e.g (cs, accounting, self development)"
                                    v-model="category"
                                    class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
                                <label class="block mt-3 font-semibold capitalize">description</label>
                                <textarea v-model="description" placeholder="Enter description" rows="4" name="comment"
                                    id="comment"
                                    class="border w-full px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                                <label class="block mt-3 font-semibold capitalize">upload file</label>
                                <input
                                    class="border w-full p-1 h-9 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md0"
                                    id="file_input" type="file" @change="uploadFile">

                            </div>
                            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button type="button"
                                    class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 uppercase"
                                    @click="handlePost">post</button>
                                <button type="button"
                                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0 uppercase"
                                    @click="store.setPostModalStatus(false)" ref="cancelButtonRef">Cancel</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

import { userStore } from "/stores/store"
const store = userStore();


const title = ref('')
const description = ref('')
const category = ref('')
const imageUrl = ref('')


const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
const handlePost = () => {
    const postid = uuidv4()
    const date = new Date(); // Example date
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    const author = {
        id: uuidv4(),
        name: 'demo',
        email: 'author@gmail.com',
        phone_number: '03120527219'
    }
    const postData = { title: title.value, category: category.value, description: description.value, imageUrl: imageUrl.value, date: formattedDate, id: postid, status: 'active', author }
    console.log({ postData })
    store.setPostModalStatus(false)
}
</script>