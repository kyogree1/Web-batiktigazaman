<script setup lang="ts">
const base = '/design/date_bs'
</script>

<template>
  <main class="flex w-full flex-col overflow-x-hidden bg-[#edd4b8] text-[#1e3c2b]" aria-label="Informasi tanggal dan pemesanan Batik Bulau Sayang">
    <section id="pricelist" class="relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]" aria-labelledby="pricelist-heading">
      <img :src="`${base}/Vector.png`" alt="" aria-hidden="true" class="absolute left-[-4%] top-[-8%] z-10 w-[26%] max-w-none">
      <img :src="`${base}/12%20(1)%202.png`" alt="" aria-hidden="true" class="absolute right-[-2%] top-[-3%] z-10 w-[23%] max-w-none">
      <img :src="`${base}/12%20(1)%201.png`" alt="" aria-hidden="true" class="absolute bottom-[-7%] left-[-4%] z-10 w-[25%] max-w-none">
      <img :src="`${base}/Vector-1.png`" alt="" aria-hidden="true" class="absolute bottom-[-22%] right-[-8%] z-10 w-[27%] max-w-none">

      <h1 id="pricelist-heading" class="sr-only">Pricelist Booking</h1>
      <img :src="`${base}/Rectangle%2095.png`" alt="" aria-hidden="true" class="absolute left-[21.5%] top-[11%] w-[57%] max-w-none">
      <img :src="`${base}/Pricelist%20Booking.png`" alt="Pricelist Booking" class="absolute left-1/2 top-[13.5%] w-[38%] max-w-none -translate-x-1/2">

      <article class="absolute left-[6.25%] top-[36.9%] h-[38.2%] w-[27.2%] text-center text-[#173d2a] max-[700px]:left-[4%] max-[700px]:top-[33%] max-[700px]:h-[40%] max-[700px]:w-[29%]">
        <img :src="`${base}/Rectangle%2076.png`" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full">
        <img :src="`${base}/Vector-2.png`" alt="" aria-hidden="true" class="absolute left-1/2 top-[15%] z-10 w-[15%] -translate-x-1/2 max-[700px]:w-[30%]">
        <p class="absolute left-0 top-[34%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] leading-none">Media</p>
        <p class="absolute left-0 top-[45%] z-10 w-full whitespace-nowrap text-[clamp(0.8rem,2.45vw,2.2rem)] font-extrabold leading-none">30 x 30 cm</p>
        <p class="absolute left-0 top-[62%] z-10 w-full whitespace-nowrap text-[clamp(1rem,3.25vw,3rem)] font-extrabold leading-none">Rp 45.000</p>
        <p class="absolute left-0 top-[78%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] leading-none">per siswa</p>
      </article>
      <article class="absolute left-[36.4%] top-[36.9%] h-[38.2%] w-[27.2%] text-center text-white max-[700px]:left-[35.5%] max-[700px]:top-[33%] max-[700px]:h-[40%] max-[700px]:w-[29%]">
        <img :src="`${base}/Rectangle%2096.png`" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full">
        <img :src="`${base}/Vector-3.png`" alt="" aria-hidden="true" class="absolute left-1/2 top-[15%] z-10 w-[15%] -translate-x-1/2 max-[700px]:w-[30%]">
        <p class="absolute left-0 top-[34%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] font-extrabold leading-none">Media</p>
        <p class="absolute left-0 top-[45%] z-10 w-full whitespace-nowrap text-[clamp(0.8rem,2.45vw,2.2rem)] font-extrabold leading-none">40 x 40 cm</p>
        <p class="absolute left-0 top-[62%] z-10 w-full whitespace-nowrap text-[clamp(1rem,3.25vw,3rem)] font-extrabold leading-none">Rp 40.000</p>
        <p class="absolute left-0 top-[78%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] font-extrabold leading-none">per siswa</p>
      </article>
      <article class="absolute left-[66.5%] top-[36.9%] h-[38.2%] w-[27.2%] text-center text-white max-[700px]:left-[67%] max-[700px]:top-[33%] max-[700px]:h-[40%] max-[700px]:w-[29%]">
        <img :src="`${base}/Rectangle%2097.png`" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full">
        <img :src="`${base}/Vector-4.png`" alt="" aria-hidden="true" class="absolute left-1/2 top-[15%] z-10 w-[15%] -translate-x-1/2 max-[700px]:w-[30%]">
        <p class="absolute left-0 top-[34%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] font-extrabold leading-none">Media</p>
        <p class="absolute left-0 top-[45%] z-10 w-full whitespace-nowrap text-[clamp(0.8rem,2.45vw,2.2rem)] font-extrabold leading-none">50 x 50 cm</p>
        <p class="absolute left-0 top-[62%] z-10 w-full whitespace-nowrap text-[clamp(1rem,3.25vw,3rem)] font-extrabold leading-none">Rp 50.000</p>
        <p class="absolute left-0 top-[78%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] font-extrabold leading-none">per siswa</p>
      </article>
    </section>

    <section id="reservation" class="relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]" aria-labelledby="reserve-heading">
      <img :src="`${base}/Rectangle%20103.png`" alt="" aria-hidden="true" class="absolute left-0 top-0 h-full w-[56%] max-w-none object-fill drop-shadow-[0_0.3vw_0.2vw_rgba(0,0,0,0.18)]">
      <div aria-hidden="true" class="absolute left-0 top-0 h-full w-[56%]" style="clip-path: polygon(0 0, 100% 15.7%, 66.5% 100%, 0 83.7%); background: repeating-linear-gradient(108deg, #efa9df 0 6.3vw, #f8d9d9 6.3vw 12.6vw)" />
      <img :src="`${base}/7_Hari%20batik%20nasional%201.png`" alt="Kalender reservasi tanggal 2 Oktober" class="absolute left-[9.8%] top-[23.5%] w-[42%] max-w-none">
      <img :src="`${base}/3%20(1)%201.png`" alt="" aria-hidden="true" class="absolute bottom-[-7%] right-[-7%] w-[26%] max-w-none">

      <h2 id="reserve-heading" class="sr-only">Mark Your Reservation!</h2>
      <img :src="`${base}/Mark%20Your%20Reservation!.png`" alt="Mark Your Reservation!" class="absolute left-[59.2%] top-[27%] w-[29.5%] max-w-none">
      <div class="absolute left-[56.5%] top-[48.1%] grid h-[20%] w-[35.2%] place-items-center rounded-full bg-[#cb4c08]">
        <img :src="`${base}/Reserve!.png`" alt="Reserve!" class="w-[39%] max-w-none">
      </div>
      <NuxtLink to="/mitra/bulau-sayang" class="absolute bottom-[3%] right-[3%] rounded-full bg-[#1e3c2b] px-[2.2%] py-[1%] text-[clamp(0.75rem,1.2vw,1rem)] font-bold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#cb4c08]">
        Kembali ke Bulau Sayang
      </NuxtLink>
    </section>
  </main>
</template>
