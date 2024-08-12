<template>
  <div class="bg-gray-100 pt-2 h-full pb-32 ">
    <Header></Header>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8" v-if="post">
        <div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div class="w-full lg:max-w-lg lg:flex-auto">
  
            <img
              :src="`/images/${post.imageUrl}.png`"
              alt=""
              class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover"
               />
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-6"> {{ post.title }}
            </h2>
            <p class="mt-4 text-xl leading-8 text-gray-600">{{post.description}}.</p>
            <p class="mt-4 text-xl leading-8 text-gray-600">Post Date: <span class="ml-4">{{post.date}}</span></p>
            <div class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900 mt-6">
                    Author Name: <span class="ml-4">{{ post.author.name }}</span>
                  </div>
                  <div class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                    Author Email: <span class="ml-4">{{ post.author.email }}</span>
                  </div>
                  <div class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                    Author Contact: <span class="ml-4">{{ post.author.phone_number }}</span>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userStore } from "/stores/store"
const store = userStore();
const route = useRoute()


const post = ref(null)


onMounted(() => {
  const id = route.params.slug
  const posts = store.getPosts
  post.value = store.getPosts.find((p) => p.id == id)
  console.log({ route })
})
</script>