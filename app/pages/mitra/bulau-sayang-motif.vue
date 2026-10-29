<script setup lang="ts">
const base = '/design/jenis_motif_batik_bs'

const motifs = [
  {
    name: 'Motif Ruang Walu',
    image: 'Motif 2.1 1.png',
    titleImage: 'Motif Ruang Walu.png',
    card: 'Rectangle 79.png',
    marker: 'Rectangle 94.png',
    left: '27.8%',
    artworkLeft: '22.7%',
    artworkTop: '11.2%',
    artworkWidth: '53%',
    artworkHeight: '58.5%',
    titleLeft: '25.5%',
    titleWidth: '50%',
  },
  {
    name: 'Motif Sarumbolum',
    image: 'Motif 1.1 1.png',
    titleImage: 'Motif Sarumbolum.png',
    card: 'Rectangle 80.png',
    marker: 'Rectangle 92.png',
    left: '52.6%',
    artworkLeft: '26%',
    artworkTop: '12.3%',
    artworkWidth: '53%',
    artworkHeight: '59%',
    titleLeft: '22.8%',
    titleWidth: '54%',
  },
]
</script>

<template>
  <main
    class="motif-page relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
    aria-labelledby="motif-page-title"
  >
    <img
      :src="`${base}/Supergrafis%202%201.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-0 top-0 z-0 h-full w-[7%] max-w-none object-fill"
    >
    <img
      :src="`${base}/Line%2011.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-0 top-[5.5%] z-10 w-full max-w-none"
    >
    <img
      :src="`${base}/Rectangle%2072.png`"
      alt=""
      aria-hidden="true"
      class="absolute bottom-0 left-0 z-0 h-[27.1%] w-full max-w-none"
    >
    <img
      :src="`${base}/Rectangle%2073.png`"
      alt=""
      aria-hidden="true"
      class="absolute bottom-0 left-0 z-30 h-[10.5%] w-full max-w-none"
    >
    <img
      :src="`${base}/Vector.png`"
      alt=""
      aria-hidden="true"
      class="absolute bottom-0 right-0 z-20 w-[30.4%] max-w-none"
    >
    <img
      :src="`${base}/IMG_2223%201.png`"
      alt="Ilustrasi anak menyambut pengunjung"
      class="absolute left-0 top-[40.2%] z-20 w-[30.1%] max-w-none"
    >

    <h1 id="motif-page-title" class="sr-only">Jenis Motif Batik</h1>
    <img
      :src="`${base}/Jenis%20Motif%20Batik.png`"
      alt="Jenis Motif Batik"
      class="absolute left-1/2 top-[7.2%] z-20 w-[37.3%] max-w-none -translate-x-1/2"
    >
    <img
      :src="`${base}/kuning%20emas_20260814121731%203.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[9.2%] top-[19.5%] z-20 w-[10.8%] max-w-none"
    >

    <div
      v-for="motif in motifs"
      :key="motif.name"
      class="motif-card absolute top-[23.1%] z-20 h-[38.2%] w-[21.4%]"
      :style="{ left: motif.left }"
    >
      <img :src="`${base}/${motif.card}`" alt="" aria-hidden="true" class="absolute inset-0 size-full">
      <img :src="`${base}/${motif.marker}`" alt="" aria-hidden="true" class="absolute left-1/2 top-[-20.5%] z-10 h-[31%] w-[12%] -translate-x-1/2">
      <img
        :src="`${base}/${motif.image}`"
        :alt="motif.name"
        :style="{ left: motif.artworkLeft, top: motif.artworkTop, width: motif.artworkWidth, height: motif.artworkHeight }"
        class="absolute z-10 max-w-none object-contain"
      >
      <img
        :src="`${base}/${motif.titleImage}`"
        alt=""
        aria-hidden="true"
        :style="{ left: motif.titleLeft, width: motif.titleWidth }"
        class="absolute top-[70.5%] z-10 max-w-none"
      >
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 700px) {
  .motif-page {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    align-items: center;
    padding: 4.5rem 1rem 3rem;
  }

  .motif-page > img:nth-of-type(1) {
    position: fixed;
    width: 2.75rem;
  }

  .motif-page > img:nth-of-type(2) {
    top: 3rem;
    width: 100%;
  }

  .motif-page > img:nth-of-type(3),
  .motif-page > img:nth-of-type(4),
  .motif-page > img:nth-of-type(5) {
    display: none;
  }

  .motif-page > img:nth-of-type(6) {
    position: absolute;
    top: auto;
    bottom: 0;
    left: -2%;
    width: 45%;
  }

  .motif-page > img:nth-of-type(7) {
    position: relative;
    top: auto;
    left: auto;
    width: min(34rem, 88vw);
    margin: 0 auto 2rem;
    transform: none;
  }

  .motif-page > img:nth-of-type(8) {
    top: 8rem;
    left: 4%;
    width: 5rem;
  }

  .motif-card {
    position: relative;
    left: auto !important;
    top: auto;
    width: min(19rem, 78vw);
    height: auto;
    aspect-ratio: 308 / 391;
    margin: 1rem auto;
  }

  .motif-card:first-of-type {
    margin-top: 1rem;
  }

  .motif-card > img:nth-child(2) {
    height: 32.7%;
  }

  .motif-card > img:nth-child(4) {
    left: 18% !important;
    top: 66%;
    width: 64% !important;
  }
}
</style>
