<script setup lang="ts">
const prices = [
  { type: 'Media', size: '30 x 30 cm', price: 'Rp 45.000' },
  { type: 'Media', size: '40 x 40 cm', price: 'Rp 50.000' },
  { type: 'Media', size: '50 x 50 cm', price: 'Rp 60.000' },
]
</script>

<template>
  <main class="relative w-full bg-paper" aria-label="Informasi reservasi Batik Shaho">
    <MitraBackLink to="/mitra/batik-shaho" aria-label="Kembali ke Batik Shaho" />
    <MitraTerms />
    <MitraPricelist :cards="prices" />
    <MitraReservation variant="shaho" whatsapp="https://wa.me/6281346241922" />
  </main>
</template>
