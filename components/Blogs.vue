<template>
  <div class="">
    <div class="flex justify-end mt-8">
      <input type="text" placeholder="Search post by title..." v-model="searchQuery"
        class="w-[300px] border h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
    </div>
    <div class="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div v-if="!posts.length">Post not found!</div>
      <article v-for="post in posts" :key="post.id"
        class="flex flex-col items-start justify-between bg-white shadow-lg rounded-3xl cursor-pointer">
        <NuxtLink :to="`posts/${post.id}`" class="w-full">

          <div class="relative w-full">
            <img :src="post.image_url" alt=""
              class="aspect-[16/9] w-full h-[200px] min-w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
            <div class="absolute inset-0 rounded-2xl" />
          </div>
          <div class="max-w-xl px-3 py-4">
            <div class="flex items-center gap-x-4 text-xs">
              <time class="text-gray-500">{{ post.date }}</time>
              <div
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {{ post.category }}</div>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {{ post.title }}
              </h3>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="post.author_avator" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  {{ post.author_name }}
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>

      </article>
    </div>
  </div>
</template>

<script setup>
import { userStore } from "/stores/store";
const store = userStore()

const searchQuery = ref("")
const posts = computed(() => {
  if (searchQuery.value === '') {
    return store.getPosts
  }
  return store.getPosts.filter((p) => p.title.includes(searchQuery.value))
})

</script>