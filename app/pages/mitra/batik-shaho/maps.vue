<script setup lang="ts">
const base = '/design/maps/4'
const shahoLogo = '/halaman%20ketiga/IMG_4822%201.png'
const communityLogo = '/halaman%20pertama/logo.png'
</script>

<template>
  <main
    class="relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-white max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
    aria-labelledby="maps-title"
  >
    <img
      :src="`${base}/detail%20kain%20batik%201.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[-25%] top-[-75%] z-0 h-auto w-[135%] max-w-none"
    >

    <img
      :src="`${base}/Rectangle%2098.png`"
      alt=""
      aria-hidden="true"
      class="absolute bottom-0 left-0 z-0 h-[22.5%] w-full max-w-none object-fill"
    >
    <img
      :src="`${base}/Super%20Grafis%201%202.png`"
      alt=""
      aria-hidden="true"
      class="absolute bottom-0 left-0 z-20 h-[4.3%] w-full max-w-none object-fill"
    >

    <img
      :src="`${base}/Rectangle%2088.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[0.8%] top-[25.6%] z-10 h-[49.2%] w-[98.4%] max-w-none drop-shadow-[0_0.4vw_0.3vw_rgba(30,60,43,0.2)]"
    >
    <img
      :src="`${base}/IMG_5856%201.png`"
      alt="Peta lokasi Batik Shaho di Batu Ampar, Balikpapan Utara"
      class="absolute left-[4.4%] top-[30%] z-10 h-[40.5%] w-[91.2%] max-w-none rounded-[4.5vw] object-cover"
    >

    <img
      :src="`${base}/IMG_5142%201.png`"
      alt="Ilustrasi pemandu menunjukkan lokasi Batik Shaho"
      class="absolute left-0 top-[34.5%] z-20 w-[31%] max-w-none"
    >

    <img
      :src="`${base}/Rectangle%2095.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[23.2%] top-[10.6%] z-10 h-[10.9%] w-[53.6%] max-w-none"
    >
    <h1
      id="maps-title"
      class="absolute left-1/2 top-[12.7%] z-20 -translate-x-1/2 text-[4.2vw] font-extrabold leading-none text-white"
    >
      Find Us!
    </h1>

    <div class="absolute left-[44%] top-[43.8%] z-30 w-[6.5%]">
      <svg viewBox="0 0 80 98" class="block h-auto w-full drop-shadow-[0_0.2vw_0.15vw_rgba(0,0,0,0.2)]" aria-hidden="true">
        <path d="M40 2C18.5 2 2 18.8 2 40c0 27.8 38 56 38 56s38-28.2 38-56C78 18.8 61.5 2 40 2Z" fill="#e00000" />
        <circle cx="40" cy="39" r="19" fill="white" />
      </svg>
      <img
        :src="shahoLogo"
        alt=""
        aria-hidden="true"
        class="absolute left-[28%] top-[20%] h-[39%] w-[44%] rounded-full object-cover"
      >
    </div>
    <div
      aria-hidden="true"
      class="absolute left-[44%] top-[51.2%] z-30 h-[2.3%] w-[6.5%] rounded-[50%] border-[0.55vw] border-[#e00000]"
    />

    <img
      :src="communityLogo"
      alt="Komunitas Batik Tiga Zaman"
      class="absolute left-[6.3%] top-[82.2%] z-20 w-[8.8%] max-w-none brightness-0 invert"
    >

    <p class="absolute left-[21%] top-[81.7%] z-20 w-[74%] text-center text-[1.75vw] leading-[1.35]">
      Jl. LKMD No.45, RT.05, Batu Ampar, Kec. Balikpapan Utara, Kota Balikpapan,<br>
      Kalimantan Timur 76136
    </p>

    <div class="absolute left-[28.5%] top-[90.7%] z-20 flex w-[67%] items-center justify-between text-[1.05vw]">
      <a href="https://www.batikshaho.com" target="_blank" rel="noreferrer" class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline">
        <svg viewBox="0 0 24 24" class="h-[1.6vw] w-[1.6vw] fill-none stroke-current stroke-[1.8]" aria-hidden="true"><circle cx="12" cy="12" r="9.5" /><path d="M2.8 9h18.4M2.8 15h18.4M12 2.5c2.4 2.6 3.6 5.8 3.6 9.5s-1.2 6.9-3.6 9.5C9.6 18.9 8.4 15.7 8.4 12S9.6 5.1 12 2.5Z" /></svg>
        https://www.batikshaho.com
      </a>
      <a href="https://wa.me/6281346241922" target="_blank" rel="noreferrer" class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline">
        <svg viewBox="0 0 24 24" class="h-[1.6vw] w-[1.6vw] fill-none stroke-current stroke-[1.8]" aria-hidden="true"><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-4.9A8.4 8.4 0 1 1 20.5 11.7Z" /><path d="M8.2 7.8c.3-.6.6-.6 1-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.8 1.3 1.6 2.2 2.1.3.2.5.2.7-.1l.8-.9c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.6 1.5-.4.4-1.1.7-1.8.7s-1.7-.3-2.8-.9c-1.2-.7-2.2-1.7-3-2.8-.8-1.1-1.2-2.2-1.2-3 0-.6.3-1.1.8-1.4Z" /></svg>
        +62813-4624-1922
      </a>
      <a href="https://instagram.com/batik_shahokaltim" target="_blank" rel="noreferrer" class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline">
        <svg viewBox="0 0 24 24" class="h-[1.6vw] w-[1.6vw] fill-none stroke-current stroke-[1.8]" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" /></svg>
        @batik_shahokaltim
      </a>
    </div>
  </main>
</template>
