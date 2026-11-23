<script setup lang="ts">
const data = mitra['bulau-sayang']

useSeoMeta({ title: `Lokasi ${data.name}` })
</script>

<template>
  <MitraMaps
    variant="bulau-sayang"
    name="Batik Bulau Sayang"
    :back="data.base"
    :address="data.address"
    :website="data.website"
    :whatsapp="data.whatsapp"
    :instagram="data.instagram"
  />
</template>
