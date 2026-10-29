<script setup lang="ts">
const base = '/design/maps_bs'
</script>

<template>
  <main class="relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-white max-[700px]:aspect-auto max-[700px]:min-h-[100svh]" aria-labelledby="maps-title">
    <NuxtLink
      to="/"
      aria-label="Kembali ke Home"
      class="absolute left-[3.5%] top-[4%] z-40 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest max-[700px]:fixed max-[700px]:left-4 max-[700px]:top-4 max-[700px]:px-4 max-[700px]:py-2 max-[700px]:text-sm"
    >
      <span aria-hidden="true">←</span>
      Kembali ke Home
    </NuxtLink>

    <img :src="`${base}/detail%20kain%20batik%201.png`" alt="" aria-hidden="true" class="absolute left-[-25%] top-[-75%] z-0 h-auto w-[135%] max-w-none">

    <img :src="`${base}/Rectangle%2098.png`" alt="" aria-hidden="true" class="absolute bottom-0 left-0 z-0 h-[22.5%] w-full max-w-none object-fill">
    <img :src="`${base}/Super%20Grafis%201%202.png`" alt="" aria-hidden="true" class="absolute bottom-0 left-0 z-20 h-[4.3%] w-full max-w-none object-fill">

    <img :src="`${base}/Rectangle%2088.png`" alt="" aria-hidden="true" class="absolute left-[0.8%] top-[25.6%] z-10 h-[49.2%] w-[98.4%] max-w-none drop-shadow-[0_0.4vw_0.3vw_rgba(30,60,43,0.2)]">
    <img :src="`${base}/IMG_5856%201.png`" alt="Peta wilayah sekitar Batik Bulau Sayang di Penajam Paser Utara" class="absolute left-[4.4%] top-[30%] z-10 h-[40.5%] w-[91.2%] max-w-none rounded-[4.5vw] object-cover">

    <img :src="`${base}/IMG_5142%201.png`" alt="Ilustrasi pemandu menunjukkan lokasi" class="absolute left-0 top-[30%] h-[55.4%] w-[33.5%] max-w-none object-contain object-left-top" style="z-index: 20">

    <img :src="`${base}/Rectangle%2095.png`" alt="" aria-hidden="true" class="absolute left-[23.2%] top-[10.6%] z-10 h-[10.9%] w-[53.6%] max-w-none">
    <h1 id="maps-title" class="sr-only">Find Us!</h1>
    <img :src="`${base}/Find%20Us!.png`" alt="Find Us!" class="absolute left-1/2 top-[13.6%] z-20 w-[18.5%] max-w-none -translate-x-1/2">

    <img :src="`${base}/boxicons_location-alt-2-filled.png`" alt="Lokasi Batik Bulau Sayang" class="absolute left-[43.9%] top-[43.5%] z-30 w-[6.4%] max-w-none drop-shadow-[0_0.2vw_0.15vw_rgba(0,0,0,0.2)]">

    <img :src="`${base}/Png%20Logo%202%201.png`" alt="Komunitas Batik Tiga Zaman" class="absolute left-[6.3%] top-[82.2%] z-20 w-[8.8%] max-w-none">
    <img
      :src="`${base}/%C2%A0Jl.%20Gusung%20No.RT.002,%20Nenang,%20Penajam,%20Kabupaten%20Penajam%20Paser%20Utara,%20Kalimantan%20Timur%2076142.png`"
      alt="Jl. Gusung No.RT.002, Nenang, Penajam, Kabupaten Penajam Paser Utara, Kalimantan Timur 76142"
      class="absolute left-[22.5%] top-[82.1%] w-[63.5%] max-w-none"
      style="z-index: 50"
    >

    <div class="absolute left-[27%] top-[90.7%] z-20 flex w-[67%] items-center justify-between text-[1.05vw]">
      <a href="https://www.bulausayang.com" target="_blank" rel="noreferrer" class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline">
        <img :src="`${base}/dashicons_admin-site-alt3.png`" alt="" aria-hidden="true" class="h-[1.6vw] w-[1.6vw] brightness-0 invert">
        https://www.bulausayang.com
      </a>
      <a href="https://wa.me/6281348747700" target="_blank" rel="noreferrer" class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline">
        <img :src="`${base}/akar-icons_whatsapp-fill.png`" alt="" aria-hidden="true" class="h-[1.6vw] w-[1.6vw] brightness-0 invert">
        <img :src="`${base}/%2B62813-4874-7700.png`" alt="+62813-4874-7700" class="w-[10.8vw] max-w-none">
      </a>
      <a href="https://instagram.com/bulau_sayang" target="_blank" rel="noreferrer" class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline">
        <img :src="`${base}/ant-design_instagram-filled.png`" alt="" aria-hidden="true" class="h-[1.6vw] w-[1.6vw] brightness-0 invert">
        @bulau_sayang
      </a>
    </div>
  </main>
</template>
