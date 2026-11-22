<script setup lang="ts">
const base = '/mitra/bulau-sayang'
const links = {
  maps: `${base}-maps`,
  contact: 'https://wa.me/6281348747700',
  motif: `${base}-motif`,
  date: `${base}-date`,
  photo: `${base}-photo`,
}
</script>

<template>
  <MitraProfile
    variant="bulau-sayang"
    name="Galeri Bulau Sayang"
    :links="links"
    description="Batik Bulau Sayang berdiri sejak 2018 dari kepedulian terhadap warisan budaya suku Paser yang nyaris terlupakan. Batik ini menjadi bentuk pelestarian identitas dan sejarah masyarakat adat Paser di Kalimantan Timur. Namanya diambil dari minyak pengasih yang melegenda di kalangan suku Paser, yang dipercaya sebagai simbol kasih sayang, kelembutan, dan kekuatan doa turun-temurun. Dengan nama tersebut, setiap goresan batik diharapkan membawa kecintaan terhadap budaya dan alam sekitar."
  />
</template>
