<script setup lang="ts">
useSeoMeta({ title: `Dokumentasi ${mitra.shaho.name}` })
</script>

<template>
  <MitraGallery
    variant="shaho"
    name="Batik Shaho"
    :back="mitra.shaho.base"
    qr-title="SCAN BARCODE"
    drive-url="https://qrcodestack.com/qr/10d5027b-d8aa-4b51-b1d4-7ae01f12a0c5"
  />
</template>
