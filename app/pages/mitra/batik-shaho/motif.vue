<script setup lang="ts">
const cards = [
  { id: 'naga', title: 'Motif Naga Kecil', image: 'naga', card: [209, 207], clip: [341, 131], art: [211, 218, 268, 379], label: [271, 487, 176] },
  { id: 'anggrek', title: 'Motif Anggrek Hitam Kecil', image: 'anggrek', card: [600, 236], clip: [732, 176], art: [648, 254, 204, 289], label: [632, 510, 235] },
  { id: 'enggang', title: 'Motif Ekor Enggang', image: 'enggang', card: [991, 207], clip: [1123, 131], art: [1030, 218, 222, 314], label: [1040, 487, 202] },
]

useSeoMeta({ title: `Jenis Motif ${mitra.shaho.name}` })
</script>

<template>
  <MitraMotifCatalog back="/mitra/batik-shaho" detail-base="/mitra/batik-shaho/motif-detail" :cards="cards" :star="[116, 176]" :artisan-y="487" />
</template>
