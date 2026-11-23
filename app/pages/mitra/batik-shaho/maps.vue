<script setup lang="ts">
const data = mitra.shaho

useSeoMeta({ title: `Lokasi ${data.name}` })
</script>

<template>
  <MitraMaps
    variant="shaho"
    name="Batik Shaho"
    :back="data.base"
    :address="data.address"
    :website="data.website"
    :whatsapp="data.whatsapp"
    :instagram="data.instagram"
  />
</template>
