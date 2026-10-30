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
    class="bulau-page relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="bulau-title"
  >
    <!-- Tombol Kembali ke Home -->
    <NuxtLink
      to="/#about-detail"
      aria-label="Kembali ke Home"
      class="bulau-back-btn absolute left-[3.5%] top-[4%] z-30 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
    >
      <span aria-hidden="true">←</span>
      <span>Kembali ke Home</span>
    </NuxtLink>

    <!-- Ornamen Latar -->
    <img
      :src="`${base}/Ellipse%2041.png`"
      alt=""
      aria-hidden="true"
      class="bulau-decor-tl pointer-events-none absolute left-0 top-0 z-0 w-[23.2%] max-w-none"
    >
    <img
      :src="`${base}/Vector.png`"
      alt=""
      aria-hidden="true"
      class="bulau-decor-tr pointer-events-none absolute right-0 top-[-2%] z-0 w-[22.6%] max-w-none"
    >
    <img
      :src="`${base}/Union-4.png`"
      alt=""
      aria-hidden="true"
      class="bulau-decor-shape pointer-events-none absolute left-0 top-[28.6%] z-0 h-[63.3%] w-[46.3%] max-w-none"
    >

    <!-- Judul Halaman -->
    <h1 id="bulau-title" class="sr-only">Batik Bulau Sayang</h1>
    <img
      :src="`${base}/Bulau%20Sayang.png`"
      alt="Batik Bulau Sayang"
      class="bulau-title-img absolute left-[30.5%] top-[13.4%] z-10 w-[39.5%] max-w-none"
    >

    <!-- Logo Bulau Sayang -->
    <div class="bulau-logo-wrapper absolute left-[8.1%] top-[35.7%] z-10 w-[30.3%]">
      <img
        :src="`${base}/IMG_4819%204.png`"
        alt="Logo Batik Bulau Sayang"
        class="bulau-logo block size-full object-contain"
      >
    </div>

    <!-- Background Frame Desktop -->
    <img
      :src="`${base}/Rectangle%2090.png`"
      alt=""
      aria-hidden="true"
      class="bulau-card-bg absolute left-[47.9%] top-[26.5%] z-10 h-[39.5%] w-[48.5%] max-w-none drop-shadow-[0_0.35vw_0.25vw_rgba(30,60,43,0.25)]"
    >

    <!-- Kartu Informasi Sejarah -->
    <section class="bulau-card absolute left-[51.4%] top-[28.5%] z-20 w-[41.5%] text-[1.3vw] leading-[1.35] text-[#1e3c2b]">
      <p class="bulau-card-text">
        Batik Bulau Sayang berdiri sejak 2018 dari kepedulian terhadap warisan budaya suku Paser yang nyaris terlupakan. Batik ini menjadi bentuk pelestarian identitas dan sejarah masyarakat adat Paser di Kalimantan Timur. Namanya diambil dari minyak pengasih yang melegenda di kalangan suku Paser, yang dipercaya sebagai simbol kasih sayang, kelembutan, dan kekuatan doa turun-temurun. Dengan nama tersebut, setiap goresan batik diharapkan membawa kecintaan terhadap budaya dan alam sekitar.
      </p>
    </section>

    <!-- 4 Tombol Aksi Navigasi -->
    <nav
      class="bulau-actions absolute left-[48.33%] top-[68.55%] z-20 grid w-[31.53%] grid-cols-2 gap-x-[1.04vw] gap-y-[1.85vw]"
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
        class="bulau-action-btn flex h-[5.42vw] items-center gap-[7%] rounded-full pl-[6%] pr-[5%] font-bold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        :style="{ backgroundColor: action.bg }"
      >
        <span class="bulau-action-icon grid aspect-square h-[72%] shrink-0 place-items-center rounded-full bg-white shadow-sm">
          <img :src="`${btnIconBase}/${action.icon}`" alt="" class="w-[52%] object-contain">
        </span>
        <span class="bulau-action-label flex-1 text-center text-[1.93vw] font-extrabold">{{ action.label }}</span>
      </component>
    </nav>
  </main>
</template>

<style scoped>
@media (max-width: 700px) {
  .bulau-page {
    aspect-ratio: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem 1.25rem 4rem;
    position: relative;
    overflow-x: hidden;
  }

  .bulau-back-btn {
    position: relative;
    left: auto;
    top: auto;
    align-self: flex-start;
    order: 1;
    margin-bottom: 0.75rem;
    padding: 0.5rem 1.15rem;
    font-size: 0.875rem;
    z-index: 30;
  }

  .bulau-decor-tl {
    position: absolute;
    left: -2.5rem;
    top: -2rem;
    width: 7.5rem;
    opacity: 0.45;
  }

  .bulau-decor-tr {
    position: absolute;
    right: -2rem;
    top: -1.5rem;
    left: auto;
    width: 8rem;
    opacity: 0.45;
  }

  .bulau-decor-shape {
    display: none;
  }

  .bulau-title-img {
    position: relative;
    left: auto;
    top: auto;
    order: 2;
    width: min(16rem, 72vw);
    height: auto;
    object-fit: contain;
    margin: 0 auto 1.5rem;
    z-index: 10;
  }

  .bulau-logo-wrapper {
    position: relative;
    left: auto;
    top: auto;
    order: 3;
    width: min(13rem, 54vw);
    height: auto;
    aspect-ratio: 1;
    margin: 0 auto 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-color: #ffffff;
    border: 4px solid #cbc308;
    box-shadow: 0 12px 32px rgba(30, 60, 43, 0.14);
    padding: 0.75rem;
    z-index: 10;
  }

  .bulau-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .bulau-card-bg {
    display: none;
  }

  .bulau-card {
    position: relative;
    left: auto;
    top: auto;
    order: 4;
    width: 100%;
    max-width: 25rem;
    height: auto;
    border-radius: 1.75rem;
    padding: 1.6rem 1.4rem;
    background-color: #ffffff;
    box-shadow: 0 10px 30px rgba(30, 60, 43, 0.08);
    margin-bottom: 1.75rem;
    z-index: 10;
  }

  .bulau-card-text {
    font-size: 0.95rem;
    line-height: 1.65;
    color: #1e3c2b;
    text-align: left;
  }

  .bulau-actions {
    position: relative;
    left: auto;
    top: auto;
    order: 5;
    width: 100%;
    max-width: 25rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.85rem;
    z-index: 10;
  }

  .bulau-action-btn {
    height: 3.35rem;
    padding-left: 0.5rem;
    padding-right: 0.75rem;
    border-radius: 9999px;
    gap: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .bulau-action-icon {
    width: 2.35rem;
    height: 2.35rem;
    border-radius: 9999px;
    background-color: #ffffff;
  }

  .bulau-action-label {
    font-size: 1rem;
    font-weight: 800;
  }
}
</style>
