<script setup lang="ts">
import { computed } from 'vue'

const base = '/design/motif_bs'
const route = useRoute()
const motifs = [
  {
    id: 'ruang-walu',
    name: 'Motif Ruang Walu',
    image: 'Motif%202.1%202.png',
    ellipse: false,
  },
  {
    id: 'sarumbolum',
    name: 'Motif Sarumbolum',
    image: 'Motif%201.1%202.png',
    ellipse: true,
  },
]
const motif = computed(() => motifs.find((item) => item.id === route.params.jenis) ?? motifs[0]!)
</script>

<template>
  <main
    class="w-full overflow-hidden bg-[#edd4b8]"
    aria-labelledby="motif-detail-title"
  >
    <!-- ==================== DESKTOP ARTBOARD (1440 x 1024 - Fullscreen) ==================== -->
    <div
      class="desktop-artboard relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#151515] max-[700px]:hidden"
    >
      <img
        :src="`${base}/Vector.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute right-0 top-0 z-0 w-[29.5%] max-w-none"
      >
      <img
        :src="`${base}/Rectangle%2065.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 z-0 h-[22.75%] w-full max-w-none"
      >

      <!-- Buletan kuning hanya di desktop saat motif Sarumbolum (Frame 44) -->
      <img
        v-if="motif.ellipse"
        :src="`${base}/Ellipse%2051.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute left-[13%] top-[48%] z-0 w-[29.7%] max-w-none"
      >

      <!-- Wadah Artwork Lingkaran Putih (Ellipse 38) + Motif pas sempurna di dalam border putih sesuai Frame 42 & 44 -->
      <div class="absolute left-[47.2%] top-[10.5%] h-[78%] w-[48%] pointer-events-none">
        <img
          :src="`${base}/Ellipse%2038.png`"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 h-full w-full"
        >
        <img
          :src="`${base}/${motif.image}`"
          :alt="motif.name"
          class="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 h-[68%] w-auto max-w-[65%] object-contain drop-shadow"
        >
      </div>

      <NuxtLink
        to="/mitra/bulau-sayang/motif"
        aria-label="Kembali ke Jenis Motif"
        class="absolute left-[3.5%] top-[4%] z-20 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
      >
        <span aria-hidden="true">←</span>
        Kembali ke Jenis Motif
      </NuxtLink>

      <h1 id="motif-detail-title" class="sr-only">{{ motif.name }}</h1>
      <img
        :src="`${base}/Motif%20Batik.png`"
        alt="Motif Batik"
        class="pointer-events-none absolute left-[12.2%] top-[16.7%] z-10 w-[24.1%] max-w-none"
      >
      <p class="absolute left-[12.3%] top-[24%] z-10 w-[31.5%] font-[Arial] text-[1.42vw] leading-[1.4]">
        Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
      </p>
    </div>

    <!-- ==================== MOBILE LAYOUT (<= 700px) ==================== -->
    <div
      class="mobile-layout min-[701px]:hidden relative flex min-h-[100svh] flex-col items-center overflow-x-hidden bg-[#edd4b8] px-4 pt-4 text-[#1e3c2b]"
    >
      <!-- Ornamen Pojok Kanan Atas Asli Desktop -->
      <img
        :src="`${base}/Vector.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute right-[-4%] top-[-8%] z-0 w-[42%] max-w-none opacity-50"
      >

      <!-- Tombol Kembali di Atas -->
      <div class="relative z-20 w-full mb-3">
        <NuxtLink
          to="/mitra/bulau-sayang/motif"
          aria-label="Kembali ke Jenis Motif"
          class="inline-flex items-center gap-1.5 rounded-full bg-forest px-3.5 py-1.5 text-xs font-bold text-white shadow-md active:scale-95 transition"
        >
          <span aria-hidden="true">←</span>
          <span>Kembali ke Jenis Motif</span>
        </NuxtLink>
      </div>

      <!-- Judul Halaman Asli Desktop -->
      <img
        :src="`${base}/Motif%20Batik.png`"
        alt="Motif Batik"
        class="relative z-10 mx-auto w-[60%] max-w-[260px] object-contain drop-shadow"
      >

      <!-- Deskripsi Asli Desktop -->
      <p class="relative z-10 mx-auto mt-3 w-[92%] max-w-[390px] text-center text-xs leading-relaxed text-[#1e3c2b]/90">
        Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
      </p>

      <!-- Artwork Motif di Dalam Ellipse 38 (Tampilan Besar & Jelas di Layar HP) -->
      <div class="relative z-10 mx-auto mt-4 w-[92%] max-w-[360px] aspect-[814/703]">
        <img
          :src="`${base}/Ellipse%2038.png`"
          alt=""
          aria-hidden="true"
          class="h-full w-full object-contain drop-shadow-md"
        >
        <img
          :src="`${base}/${motif.image}`"
          :alt="motif.name"
          class="absolute left-[48%] top-[45%] -translate-x-1/2 -translate-y-1/2 h-auto max-h-[74%] max-w-[74%] object-contain drop-shadow"
        >
      </div>

      <!-- Bagian Bawah Background Hijau (Nama Motif & Bulatan Kuning) -->
      <div class="relative z-10 -mx-4 mt-6 w-[calc(100%+2rem)] flex flex-1 flex-col items-center bg-[#1e3c2b] px-4 pt-6 pb-8 rounded-t-[2.5rem] shadow-lg">
        <!-- Nama Motif (Hanya di Mobile, tepat di atas bulatan kuning) -->
        <p class="text-center text-xl font-extrabold tracking-wide text-white drop-shadow-md">
          {{ motif.name }}
        </p>

        <!-- Bulatan Kuning Asli (Ellipse 51) kaya yang di Shaho -->
        <div class="relative mt-4 aspect-square w-[38%] max-w-[155px]">
          <img
            :src="`${base}/Ellipse%2051.png`"
            alt=""
            aria-hidden="true"
            class="h-full w-full object-contain"
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Scoped styles */
</style>
