<script setup lang="ts">
import { computed } from 'vue'

const base = '/design/motif_bs'
const route = useRoute()
const motifs = [
  {
    id: 'ruang-walu',
    name: 'Motif Ruang Walu',
    image: 'Motif%202.1%202.png',
    ellipse: true,
    artLeft: '38.4%',
    artTop: '16.7%',
    artWidth: '46.5%',
  },
  {
    id: 'sarumbolum',
    name: 'Motif Sarumbolum',
    image: 'Motif%201.1%202.png',
    ellipse: false,
    artLeft: '37.3%',
    artTop: '17%',
    artWidth: '47.4%',
  },
]
const motif = computed(() => motifs.find((item) => item.id === route.params.jenis) ?? motifs[0]!)
</script>

<template>
  <main
    class="detail-page relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#151515] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
    aria-labelledby="motif-detail-title"
  >
    <img
      :src="`${base}/Vector.png`"
      alt=""
      aria-hidden="true"
      class="absolute right-0 top-0 z-0 w-[29.5%] max-w-none max-[700px]:w-[46%]"
    >
    <img
      :src="`${base}/Rectangle%2065.png`"
      alt=""
      aria-hidden="true"
      class="absolute bottom-0 left-0 z-0 h-[22.75%] w-full max-w-none max-[700px]:h-[16rem]"
    >
    <img
      v-if="motif.ellipse"
      :src="`${base}/Ellipse%2051.png`"
      alt=""
      aria-hidden="true"
      class="yellow-ellipse absolute left-[13%] top-[48%] z-0 w-[29.7%] max-w-none"
    >

    <div class="artwork absolute left-[46.7%] top-[10.5%] z-10 w-[48.8%] max-[700px]:relative max-[700px]:left-auto max-[700px]:top-auto max-[700px]:mx-auto max-[700px]:mt-8 max-[700px]:w-[92%]">
      <img :src="`${base}/Ellipse%2038.png`" alt="" aria-hidden="true" class="block h-auto w-full">
      <img
        :src="`${base}/${motif.image}`"
        :alt="motif.name"
        :style="{ left: motif.artLeft, top: motif.artTop, width: motif.artWidth }"
        class="absolute max-w-none"
      >
    </div>

    <NuxtLink
      to="/mitra/bulau-sayang/motif"
      aria-label="Kembali ke Jenis Motif"
      class="absolute left-[3.5%] top-[4%] z-20 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest max-[700px]:fixed max-[700px]:left-4 max-[700px]:top-4 max-[700px]:px-4 max-[700px]:py-2 max-[700px]:text-sm"
    >
      <span aria-hidden="true">←</span>
      Kembali
    </NuxtLink>

    <h1 id="motif-detail-title" class="sr-only">{{ motif.name }}</h1>
    <img
      :src="`${base}/Motif%20Batik.png`"
      alt="Motif Batik"
      class="title-image absolute left-[12.2%] top-[16.7%] z-10 w-[24.1%] max-w-none max-[700px]:static max-[700px]:mx-auto max-[700px]:mt-4 max-[700px]:w-[64%]"
    >
    <p class="description absolute left-[12.3%] top-[24%] z-10 w-[31.8%] font-[Arial] text-[1.42vw] leading-[27px] max-[700px]:static max-[700px]:mx-auto max-[700px]:mt-4 max-[700px]:w-[86%] max-[700px]:text-sm">
      Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebangsaan budaya Indonesia.
    </p>
  </main>
</template>

<style scoped>
@media (max-width: 700px) {
  .detail-page {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    align-items: center;
    padding: 4.5rem 0 3rem;
  }

  .yellow-ellipse {
    position: relative;
    left: auto;
    top: auto;
    order: 3;
    margin: 1.5rem auto 0;
    width: 52%;
  }

  .title-image {
    order: 1;
  }

  .description {
    order: 2;
  }

  .artwork {
    order: 4;
  }
}
</style>
