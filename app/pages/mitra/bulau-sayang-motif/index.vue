<script setup lang="ts">
const cards = [
  { id: 'ruang-walu', title: 'Motif Ruang Walu', image: 'ruang-walu', card: [372, 228], clip: [504, 152], art: [436, 290, 172, 243], label: [424, 511, 184] },
  { id: 'sarumbolum', title: 'Motif Sarumbolum', image: 'sarumbolum', card: [790, 230], clip: [922, 155], art: [858, 275, 163, 231], label: [837, 498, 206] },
]
</script>

<template>
  <MitraMotifCatalog back="/mitra/bulau-sayang" detail-base="/mitra/bulau-sayang-motif" :cards="cards" :star="[279, 197]" :artisan-y="493" />
</template>
