<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')
const base = '/design/halaman_mitra_bulau_sayang/6'
const btnIconBase = '/design/halaman_mitra_batik_shaho/1'

const actions = [
  {
    label: 'Maps',
    icon: 'at-icons_location.png',
    bg: '#ff340c',
    to: '/mitra/bulau-sayang/maps',
    ariaLabel: 'Lihat lokasi Batik Bulau Sayang di Maps',
  },
  {
    label: 'Contact',
    icon: 'Vector.png',
    bg: '#cbc308',
    href: 'https://wa.me/6281348747700',
    ariaLabel: 'Hubungi Batik Bulau Sayang melalui WhatsApp',
  },
  {
    label: 'Motif',
    icon: 'mdi_palette.png',
    bg: '#f03272',
    to: '/mitra/bulau-sayang/motif',
    ariaLabel: 'Lihat koleksi motif Batik Bulau Sayang',
  },
  {
    label: 'Date',
    icon: 'akar-icons_calendar.png',
    bg: '#9ab3eb',
    to: '/mitra/bulau-sayang/date',
    ariaLabel: 'Reservasi tanggal kunjungan Batik Bulau Sayang',
  },
]
</script>

<template>
  <main
    class="bulau-page relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
    aria-labelledby="bulau-title"
  >
    <NuxtLink
      to="/#about-detail"
      aria-label="Kembali ke Home"
      class="absolute left-[3.5%] top-[4%] z-30 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest max-[700px]:fixed max-[700px]:left-4 max-[700px]:top-4 max-[700px]:px-4 max-[700px]:py-2 max-[700px]:text-sm"
    >
      <span aria-hidden="true">←</span>
      Kembali ke Home
    </NuxtLink>

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

    <!-- 4 Tombol Aksi Navigasi -->
    <nav
      class="bulau-actions absolute left-[48.33%] top-[68.55%] z-20 grid w-[31.53%] grid-cols-2 gap-x-[1.04vw] gap-y-[1.85vw] max-[700px]:static max-[700px]:mx-auto max-[700px]:mt-8 max-[700px]:w-full max-[700px]:max-w-sm max-[700px]:gap-4"
      aria-label="Menu Aksi Mitra"
    >
      <component
        :is="action.to ? NuxtLink : 'a'"
        v-for="action in actions"
        :key="action.label"
        :to="action.to"
        :href="action.href"
        :target="action.href ? '_blank' : undefined"
        :rel="action.href ? 'noopener noreferrer' : undefined"
        :aria-label="action.ariaLabel"
        class="flex h-[5.42vw] items-center gap-[7%] rounded-full pl-[6%] pr-[5%] font-bold text-white shadow-md transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 max-[700px]:h-12 max-[700px]:gap-3 max-[700px]:px-4"
        :style="{ backgroundColor: action.bg }"
      >
        <span class="grid aspect-square h-[72%] shrink-0 place-items-center rounded-full bg-white max-[700px]:h-8">
          <img :src="`${btnIconBase}/${action.icon}`" alt="" class="w-[52%] object-contain">
        </span>
        <span class="flex-1 text-center text-[1.93vw] font-extrabold max-[700px]:text-base">{{ action.label }}</span>
      </component>
    </nav>
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
