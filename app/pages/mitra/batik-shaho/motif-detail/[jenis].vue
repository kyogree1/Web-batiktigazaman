<script setup lang="ts">
import { computed } from 'vue'

const base = '/design/motif_batik/3'
const route = useRoute()
const motifs = [
  {
    id: 'naga',
    name: 'Motif Naga Kecil',
    image: 'motif%203%202%20(1).png',
    description: 'Motif Naga Kecil terinspirasi dari ragam hias Kalimantan yang menggambarkan kekuatan, perlindungan, dan kebijaksanaan.',
  },
  {
    id: 'anggrek',
    name: 'Motif Anggrek Hitam Kecil',
    image: 'Motif%205%202%20(1).png',
    description: 'Motif Anggrek Hitam Kecil mengambil keindahan anggrek hitam Kalimantan sebagai simbol keanggunan dan kekayaan alam.',
  },
  {
    id: 'enggang',
    name: 'Motif Ekor Enggang',
    image: 'Motif%204%202%20(1).png',
    description: 'Motif Ekor Enggang terinspirasi dari burung enggang, satwa yang lekat dengan identitas dan kebudayaan masyarakat Kalimantan.',
  },
]
const selectedMotif = computed(() => motifs.find((motif) => motif.id === route.params.jenis) ?? motifs[1]!)
</script>

<template>
  <main
    class="relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#151515] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
    aria-labelledby="motif-title"
  >
    <div
      aria-hidden="true"
      class="absolute bottom-[-24%] left-[-9%] h-[49%] w-[121%] rotate-[-4deg] rounded-[50%_50%_0_0/32%_32%_0_0] bg-[#1e3c2b]"
    />
    <img
      :src="`${base}/Vector%20(2).png`"
      alt=""
      aria-hidden="true"
      class="absolute right-[-4%] top-[-27%] w-[35%] max-w-none"
    >

    <div class="absolute left-[46.8%] top-[10.5%] h-[78%] w-[50%] max-[700px]:left-[18%] max-[700px]:top-[35%] max-[700px]:h-[46%] max-[700px]:w-[76%]">
      <img
        :src="`${base}/Ellipse%2038.png`"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 h-full w-full"
      >
      <img
        :src="`${base}/${selectedMotif.image}`"
        :alt="selectedMotif.name"
        class="absolute left-1/2 top-1/2 h-auto max-h-[74%] w-[67%] -translate-x-1/2 -translate-y-1/2 object-contain"
      >
    </div>

    <NuxtLink
      to="/mitra/batik-shaho/motif"
      class="absolute left-[3.5%] top-[4%] z-10 inline-flex items-center gap-2 rounded-full border border-[#1e3c2b]/30 bg-[#edd4b8]/90 px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-[#1e3c2b] shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#cb4c08] max-[700px]:left-4 max-[700px]:top-4 max-[700px]:px-4 max-[700px]:py-2 max-[700px]:text-sm"
    >
      <span aria-hidden="true">←</span>
      Kembali ke Jenis Motif
    </NuxtLink>
    <h1
      id="motif-title"
      class="absolute left-[12.2%] top-[16%] text-[4.45vw] font-extrabold leading-none text-white max-[700px]:left-[8%] max-[700px]:top-8 max-[700px]:text-3xl"
    >
      Motif Batik
    </h1>
    <p class="absolute left-[12.2%] top-[24.5%] w-[33%] text-[1.34vw] leading-[1.52] max-[700px]:left-[8%] max-[700px]:top-[5.5rem] max-[700px]:w-[84%] max-[700px]:text-sm">
      Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
    </p>

    <div class="absolute left-[13.2%] top-[48.5%] aspect-square w-[29.3%] max-[700px]:left-[8%] max-[700px]:top-[68%] max-[700px]:w-[36%]">
      <img
        :src="`${base}/Ellipse%2051.png`"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 h-full w-full"
      >
      <img
        :src="`${base}/Mask%20group%20(1).png`"
        alt="Bunga anggrek hitam Kalimantan"
        class="absolute inset-[4%] h-[92%] w-[92%] rounded-full object-cover"
      >
    </div>
  </main>
</template>








