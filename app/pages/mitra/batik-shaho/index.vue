<script setup lang="ts">
const base = '/mitra/batik-shaho'
const links = {
  maps: `${base}/maps`,
  contact: 'https://wa.me/6281346241922',
  motif: `${base}/motif`,
  date: `${base}/date`,
  photo: `${base}/photo`,
}
</script>

<template>
  <MitraProfile
    variant="shaho"
    name="Batik Shaho"
    :links="links"
    description="Batik SHAHO didirikan oleh (Alm.) Pak Supratono dan keluarga pada tahun 1990. Nama SHAHO sendiri diambil dari nama depan seluruh anggota keluarga beliau: (Alm.) Supratono, (Almh.) Haryati (istri), Ardi (anak), Hendri (anak), dan Oki (anak). Mulai dari mengerjakan pesanan sablonan hingga produk-produk lainnya, Batik SHAHO tumbuh dan saat ini sedang mempersiapkan diri untuk mengekspor batik Indonesia."
  />
</template>
