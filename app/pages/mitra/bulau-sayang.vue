<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')
const base = '/design/halaman_mitra_bulau_sayang/6'

const actions = [
  { label: 'Maps', labelImage: 'Maps.png', labelLeft: '53%', labelWidth: '27%', icon: 'at-icons_location.png', iconLeft: '13.5%', iconWidth: '13.7%', iconHeight: '36%', iconFit: 'contain', plate: 'Ellipse 43.png', bg: 'Union.png', to: '/mitra/bulau-sayang-maps' },
  { label: 'Contact', labelImage: 'Contact.png', labelLeft: '43%', labelWidth: '46%', icon: 'Vector-1.png', iconLeft: '14%', iconWidth: '12%', iconHeight: '32%', iconFit: 'fill', plate: 'Ellipse 44.png', bg: 'Union-3.png' },
  { label: 'Motif', labelImage: 'Motif.png', labelLeft: '53%', labelWidth: '27%', icon: 'mdi_palette.png', iconLeft: '12.2%', iconWidth: '15.5%', iconHeight: '41.5%', iconFit: 'fill', plate: 'Ellipse 45.png', bg: 'Union-1.png', to: '/mitra/bulau-sayang-motif' },
  { label: 'Date', labelImage: 'Date.png', labelLeft: '52%', labelWidth: '29%', icon: 'akar-icons_calendar.png', iconLeft: '14%', iconWidth: '12%', iconHeight: '32%', iconFit: 'fill', plate: 'Ellipse 46.png', bg: 'Union-2.png', to: '/mitra/bulau-sayang-date' },
]
</script>

<template>
  <main
    class="bulau-page relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
    aria-labelledby="bulau-title"
  >
    <img
      :src="`${base}/Ellipse%2041.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-0 top-0 z-0 w-[23.2%] max-w-none"
    >
    <img
      :src="`${base}/Vector.png`"
      alt=""
      aria-hidden="true"
      class="absolute right-0 top-[-2%] z-0 w-[22.6%] max-w-none"
    >
    <img
      :src="`${base}/Union-4.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-0 top-[28.6%] z-0 h-[63.3%] w-[46.3%] max-w-none"
    >

    <h1 id="bulau-title" class="sr-only">Batik Bulau Sayang</h1>
    <img
      :src="`${base}/Bulau%20Sayang.png`"
      alt="Batik Bulau Sayang"
      class="absolute left-[30.5%] top-[13.4%] z-10 w-[39.5%] max-w-none max-[700px]:static max-[700px]:mx-auto max-[700px]:block max-[700px]:w-[82%]"
    >

    <img
      :src="`${base}/IMG_4819%204.png`"
      alt="Logo Batik Bulau Sayang"
      class="absolute left-[8.1%] top-[35.7%] z-10 w-[30.3%] max-w-none max-[700px]:static max-[700px]:mx-auto max-[700px]:mt-8 max-[700px]:block max-[700px]:w-[72%]"
    >

    <img
      :src="`${base}/Rectangle%2090.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[47.9%] top-[26.5%] z-10 h-[39.5%] w-[48.5%] max-w-none drop-shadow-[0_0.35vw_0.25vw_rgba(30,60,43,0.25)] max-[700px]:hidden"
    >
    <p class="bulau-description absolute left-[51.4%] top-[31.1%] z-20 w-[42.2%] text-[1.55vw] leading-[1.34] text-[#1e3c2b] max-[700px]:static max-[700px]:mx-auto max-[700px]:mt-8 max-[700px]:w-[86%] max-[700px]:rounded-[1.5rem] max-[700px]:bg-white max-[700px]:p-6 max-[700px]:text-base max-[700px]:leading-relaxed">
      Batik Bulau Sayang berdiri sejak 2018 dari kepedulian terhadap warisan budaya suku Paser yang nyaris terlupakan. Batik ini menjadi bentuk pelestarian identitas dan sejarah masyarakat adat Paser di Kalimantan Timur. Namanya diambil dari minyak pengasih yang melegenda di kalangan suku Paser, yang dipercaya sebagai simbol kasih sayang, kelembutan, dan kekuatan doa turun-temurun. Dengan nama tersebut, setiap goresan batik diharapkan membawa kecintaan terhadap budaya dan alam sekitar.
    </p>

    <div class="bulau-actions absolute left-[48.3%] top-[68.5%] z-20 grid w-[31.6%] grid-cols-2 gap-x-[3%] gap-y-[1.8vw] max-[700px]:static max-[700px]:mx-auto max-[700px]:mt-8 max-[700px]:w-[88%] max-[700px]:gap-3">
      <component
        :is="action.to ? NuxtLink : 'div'"
        v-for="action in actions"
        :key="action.label"
        :to="action.to"
        class="relative flex aspect-[229/87] items-center justify-center focus-visible:z-30 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#1e3c2b]"
        :aria-label="action.label"
      >
        <img :src="`${base}/${action.bg}`" alt="" aria-hidden="true" class="absolute inset-0 size-full">
        <img :src="`${base}/${action.plate}`" alt="" aria-hidden="true" class="absolute left-[7%] top-1/2 h-[70%] w-auto -translate-y-1/2">
        <img :src="`${base}/${action.icon}`" :style="{ left: action.iconLeft, width: action.iconWidth, height: action.iconHeight }" alt="" aria-hidden="true" class="absolute top-1/2 -translate-y-1/2" :class="action.iconFit === 'contain' ? 'object-contain' : 'object-fill'">
        <img :src="`${base}/${action.labelImage}`" :style="{ left: action.labelLeft, width: action.labelWidth }" alt="" aria-hidden="true" class="absolute top-1/2 -translate-y-1/2 object-contain">
      </component>
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 700px) {
  .bulau-page {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 3rem;
  }

  .bulau-page > img:first-child {
    width: 26%;
  }

  .bulau-page > img:nth-child(2) {
    width: 26%;
  }

  .bulau-page > img:nth-of-type(3) {
    top: 25rem;
    height: 24rem;
    width: 75%;
  }

  .bulau-description {
    position: relative;
    left: auto;
    top: auto;
  }

  .bulau-actions {
    position: relative;
    left: auto;
    top: auto;
  }
}
</style>
