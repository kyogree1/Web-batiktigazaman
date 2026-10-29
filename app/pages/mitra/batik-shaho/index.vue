<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')
const base = '/design/halaman_mitra_batik_shaho/1'

const actions = [
  { label: 'Maps', icon: 'at-icons_location.png', bg: '#ff340c' },
  { label: 'Contact', icon: 'Vector.png', bg: '#cbc308' },
  { label: 'Motif', icon: 'mdi_palette.png', bg: '#f03272', to: '/mitra/batik-shaho/motif' },
  { label: 'Date', icon: 'akar-icons_calendar.png', bg: '#9ab3eb' },
]
</script>

<template>
  <main
    class="relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="mitra-title"
  >
    <img
      :src="`${base}/Ellipse%2041.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[-1.5%] top-0 w-[24.5%] max-w-none"
    >
    <img
      :src="`${base}/Vector(1).png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[77.24%] top-[-5.3%] w-[24.72%] max-w-none"
    >
    <img
      :src="`${base}/1%20(1)%201.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[81.5%] top-[66.55%] w-[25%] max-w-none"
    >
    <img
      :src="`${base}/Union.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[-46.8%] top-[28.6%] w-[93%] max-w-none"
    >
    <img
      :src="`${base}/Mask%20group.png`"
      alt="Logo Batik Shaho"
      class="absolute left-[5%] top-[35.9%] w-[36%]"
    >

    <h1
      id="mitra-title"
      class="absolute left-[32.18%] top-[14.34%] text-[6.06vw] font-extrabold leading-none tracking-[-0.005em]"
    >
      Batik Shaho
    </h1>

    <div
      class="absolute left-[47.9%] top-[30.2%] h-[34.6%] w-[48.5%] rounded-[2.8vw] bg-white pb-[2.4vw] pl-[4.1vw] pr-[5.4vw] pt-[2.9vw] shadow-[0_1.2vw_2.8vw_rgba(30,60,43,0.08)]"
    >
      <p class="text-[1.585vw] leading-[1.335]">
        Batik SHAHO didirikan oleh (Alm.) Pak Supratono dan keluarga pada tahun 1990. Nama SHAHO sendiri diambil dari nama depan seluruh anggota keluarga beliau: (Alm.) Supratono, (Almh.) Haryati (istri), Ardi (anak), Hendri (anak), dan Oki (anak). Mulai dari mengerjakan pesanan sablonan hingga produk-produk lainnya, Batik SHAHO tumbuh dan saat ini sedang mempersiapkan diri untuk mengekspor batik Indonesia.
      </p>
    </div>

    <div class="absolute left-[48.3%] top-[68.55%] grid w-[31.5%] grid-cols-2 gap-x-[1vw] gap-y-[1.9vw]">
      <component
        :is="action.to ? NuxtLink : 'div'"
        v-for="action in actions"
        :key="action.label"
        :to="action.to"
        class="flex h-[5.42vw] items-center gap-[7%] rounded-full pl-[6%] pr-[4%] font-bold text-white"
        :style="{ backgroundColor: action.bg }"
      >
        <span class="grid aspect-square h-[72%] shrink-0 place-items-center rounded-full bg-white">
          <img :src="`${base}/${action.icon}`" alt="" class="w-[52%]">
        </span>
        <span class="flex-1 text-center font-extrabold text-[1.93vw]">{{ action.label }}</span>
      </component>
    </div>
  </main>
</template>













