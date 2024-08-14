<template>
  <NuxtLayout>
    <!-- <Header></Header> -->
    <div class="bg-gray-100">
      <NuxtPage></NuxtPage>
      <Loader v-if="store.isLoading" />
      <Notification v-if="store.notification.isVissible" />
    </div>
  </NuxtLayout>
</template>
<script setup>
import { userStore } from "/stores/store"
const store = userStore();
useHead({
  title: "Books Exchange App",
  // meta: [
  //   { name: "robots", content: "noindex,nofollow" },
  //   { name: "googlebot", content: "noindex,nofollow" },
  // ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wdth,wght,YTLC@0,6..12,75..125,200..1000,440..540;1,6..12,75..125,200..1000,440..540&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wdth,wght,YTLC@0,6..12,75..125,200..1000,440..540;1,6..12,75..125,200..1000,440..540&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
    }
  ]
});


onMounted(() => {
  store.setLoaderStatus(true)
  store.fetchBooks();
})
</script>
