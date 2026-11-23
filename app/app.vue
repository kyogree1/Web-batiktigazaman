<script setup lang="ts">
const site = 'Komunitas Batik Tiga Zaman'

useHead({
  titleTemplate: (title) => (title && title !== site ? `${title} | ${site}` : site),
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
