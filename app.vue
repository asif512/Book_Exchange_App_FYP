<template>
  <NuxtLayout>
    <Header></Header>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">
      <NuxtPage></NuxtPage>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
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
</script>
