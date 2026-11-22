<script setup lang="ts">
const workshop = ['Menggambar Menjiplak', 'Cap Canting', 'Pewarnaan']
const prices = [
  { type: 'Kain Siap Warna', size: '25 x 25 cm', price: 'Rp 25.000', details: ['pewarnaan'], duration: '150 menit' },
  { type: 'Media', size: '25 x 25 cm', price: 'Rp 50.000', details: ['Cap', 'Canting', 'Pewarnaan'], duration: '150 menit' },
  { type: 'Media', size: '50 x 25 cm', price: 'Rp 50.000', details: ['Cap', 'Canting', 'Pewarnaan'], duration: '4 Jam' },
  { type: 'Media', size: '50 x 50 cm', price: 'Rp 75.000', details: workshop, duration: '5 jam' },
  { type: 'Media', size: '100 x 50 cm', price: 'Rp 100.000', details: workshop, duration: '6 jam' },
  { type: 'Layanan', service: 'Menerima datang langsung ke tempat atau sekolah', details: ['Harga menyesuaikan biaya transportasi dan jarak'] },
]
</script>

<template>
  <main class="relative w-full bg-paper" aria-label="Informasi tanggal dan pemesanan Batik Bulau Sayang">
    <MitraBackLink to="/mitra/bulau-sayang" aria-label="Kembali ke Batik Bulau Sayang" />
    <MitraTerms />
    <MitraPricelist :cards="prices" />
    <MitraReservation variant="bulau-sayang" whatsapp="https://wa.me/6281348747700" />
  </main>
</template>
