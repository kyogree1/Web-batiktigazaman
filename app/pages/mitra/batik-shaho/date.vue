<script setup lang="ts">
const base = '/design/date/5'
</script>

<template>
  <main
    class="relative flex w-full flex-col overflow-x-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-label="Informasi reservasi Batik Shaho"
  >
      <section id="terms" class="date-canvas relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#111] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]" aria-labelledby="terms-heading">
        <NuxtLink
          to="/mitra/batik-shaho"
          aria-label="Kembali ke Batik Shaho"
          class="absolute left-[3.5%] top-[4%] z-30 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest max-[700px]:left-4 max-[700px]:top-4 max-[700px]:px-4 max-[700px]:py-2 max-[700px]:text-sm"
        >
          <span aria-hidden="true">←</span>
          Kembali ke Batik Shaho
        </NuxtLink>
        <img
          :src="`${base}/Vector-5.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[-4%] top-[-8%] z-20 w-[34%] max-w-none max-[700px]:w-[24%]"
        >
        <img
          :src="`${base}/Supergrafis%202%202.png`"
          alt=""
          aria-hidden="true"
          class="absolute right-0 top-0 z-[5] h-[72%] w-[10.5%] max-w-none"
        >
        <img
          :src="`${base}/Vector-6.png`"
          alt=""
          aria-hidden="true"
          class="absolute bottom-[-13%] right-[-9%] z-20 w-[39%] max-w-none max-[700px]:z-[1] max-[700px]:w-[24%]"
        >
        <img
          :src="`${base}/IMG_5378%202.png`"
          alt="Ilustrasi pemandu kegiatan membatik"
          class="absolute bottom-0 left-0 z-20 w-[25%] max-w-none max-[700px]:z-[1] max-[700px]:w-[21%]"
        >

        <img
          :src="`${base}/Rectangle%20111.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[38.7%] top-[14.9%] z-10 h-[27.5%] w-[48.5%] max-w-none object-fill max-[700px]:left-[7%] max-[700px]:top-[18%] max-[700px]:h-[31%] max-[700px]:w-[86%]"
        >
        <img
          :src="`${base}/Rectangle%2095-1.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[32.4%] top-[11.5%] z-20 w-[35.7%] max-w-none max-[700px]:left-[23%] max-[700px]:top-[15%] max-[700px]:w-[54%]"
        >
        <h2 id="terms-heading" class="sr-only">Ketentuan dan rincian kegiatan</h2>
        <img
          :src="`${base}/Ketentuan.png`"
          alt="Ketentuan"
          class="absolute left-[39%] top-[13.5%] z-20 w-[20%] max-w-none max-[700px]:left-[35%] max-[700px]:top-[17%] max-[700px]:w-[30%]"
        >
        <img
          :src="`${base}/kuning%20emas_20260814121731%204.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[75%] top-[7%] z-30 w-[9.5%] max-w-none max-[700px]:left-[80%] max-[700px]:top-[16%] max-[700px]:w-[12%]"
        >
        <div class="absolute left-[43.6%] top-[21.8%] z-10 w-[39%] text-[clamp(0.85rem,1.7vw,1.55rem)] leading-[1.55] max-[700px]:left-[13%] max-[700px]:top-[24%] max-[700px]:w-[74%]">
          <ul class="list-disc space-y-[0.4%] pl-[1.7em]">
            <li>Minimal 10 siswa</li>
            <li>Durasi kegiatan 2 jam (08.30 sampai 10.30)</li>
            <li>Media diserahkan ke pihak sekolah sekitar 3 hari kerja setelah proses selesai</li>
          </ul>
        </div>

        <img
          :src="`${base}/Rectangle%20110-1.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[24.2%] top-[50.5%] z-10 h-[33.4%] w-[48.4%] max-w-none object-fill max-[700px]:left-[7%] max-[700px]:top-[53%] max-[700px]:h-[40%] max-[700px]:w-[86%]"
        >
        <img
          :src="`${base}/Rectangle%20112.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[42%] top-[47.7%] z-20 w-[35.7%] max-w-none max-[700px]:left-[23%] max-[700px]:top-[51%] max-[700px]:w-[54%]"
        >
        <img
          :src="`${base}/Rincian%20kegiatan.png`"
          alt="Rincian kegiatan"
          class="absolute left-[44.8%] top-[48.7%] z-20 w-[27%] max-w-none max-[700px]:left-[30%] max-[700px]:top-[52%] max-[700px]:w-[40%]"
        >
        <div class="absolute left-[26.5%] top-[56.8%] z-10 w-[44%] text-[clamp(0.82rem,1.65vw,1.5rem)] leading-[1.5] max-[700px]:left-[13%] max-[700px]:top-[59%] max-[700px]:w-[74%]">
          <ul class="list-disc space-y-[0.35%] pl-[1.7em]">
            <li>Pelajaran dasar batik</li>
            <li>Mewarnai media yang sudah disiapkan</li>
            <li>Media dicanting dan dicap dengan nama serta motif batik</li>
            <li>Motif untuk TK: kapal, pesawat, atau bunga yang mudah dikenali anak, dengan pilihan motif batik</li>
          </ul>
        </div>

      </section>
      <section id="pricelist" class="date-canvas relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]" aria-labelledby="pricelist-heading">
        <img
          :src="`${base}/Vector.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[-4%] top-[-8%] z-10 w-[26%] max-w-none"
        >
        <img
          :src="`${base}/12%20(1)%202.png`"
          alt=""
          aria-hidden="true"
          class="absolute right-[-2%] top-[-3%] z-10 w-[23%] max-w-none"
        >
        <img
          :src="`${base}/12%20(1)%201.png`"
          alt=""
          aria-hidden="true"
          class="absolute bottom-[-7%] left-[-4%] z-10 w-[25%] max-w-none"
        >
        <img
          :src="`${base}/Vector-1.png`"
          alt=""
          aria-hidden="true"
          class="absolute bottom-[-22%] right-[-8%] z-10 w-[27%] max-w-none"
        >

        <img
          :src="`${base}/Rectangle%2095.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-[21.5%] top-[11%] w-[57%] max-w-none"
        >
        <h2 id="pricelist-heading" class="sr-only">Pricelist Booking</h2>
        <img
          :src="`${base}/Pricelist%20Booking.png`"
          alt="Pricelist Booking"
          class="absolute left-1/2 top-[13.5%] w-[38%] max-w-none -translate-x-1/2"
        >

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
          <p class="absolute left-0 top-[62%] z-10 w-full whitespace-nowrap text-[clamp(1rem,3.25vw,3rem)] font-extrabold leading-none">Rp 50.000</p>
          <p class="absolute left-0 top-[78%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] font-extrabold leading-none">per siswa</p>
        </article>
        <article class="absolute left-[66.5%] top-[36.9%] h-[38.2%] w-[27.2%] text-center text-white max-[700px]:left-[67%] max-[700px]:top-[33%] max-[700px]:h-[40%] max-[700px]:w-[29%]">
          <img :src="`${base}/Rectangle%2097.png`" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full">
          <img :src="`${base}/Vector-4.png`" alt="" aria-hidden="true" class="absolute left-1/2 top-[15%] z-10 w-[15%] -translate-x-1/2 max-[700px]:w-[30%]">
          <p class="absolute left-0 top-[34%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] font-extrabold leading-none">Media</p>
          <p class="absolute left-0 top-[45%] z-10 w-full whitespace-nowrap text-[clamp(0.8rem,2.45vw,2.2rem)] font-extrabold leading-none">50 x 50 cm</p>
          <p class="absolute left-0 top-[62%] z-10 w-full whitespace-nowrap text-[clamp(1rem,3.25vw,3rem)] font-extrabold leading-none">Rp 60.000</p>
          <p class="absolute left-0 top-[78%] z-10 w-full whitespace-nowrap text-[clamp(0.65rem,1.7vw,1.55rem)] font-extrabold leading-none">per siswa</p>
        </article>

      </section>

      <section id="reservation" class="date-canvas relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]" aria-labelledby="reserve-heading">
        <img
          :src="`${base}/Rectangle%20103.png`"
          alt=""
          aria-hidden="true"
          class="absolute left-0 top-0 h-full w-[56%] max-w-none object-fill drop-shadow-[0_0.3vw_0.2vw_rgba(0,0,0,0.18)]"
        >
        <div
          aria-hidden="true"
          class="absolute left-0 top-0 h-full w-[56%]"
          style="clip-path: polygon(0 0, 100% 15.7%, 66.5% 100%, 0 83.7%); background: repeating-linear-gradient(108deg, #efa9df 0 6.3vw, #f8d9d9 6.3vw 12.6vw)"
        />
        <img
          :src="`${base}/7_Hari%20batik%20nasional%201.png`"
          alt="Kalender reservasi tanggal 2 Oktober"
          class="absolute left-[9.8%] top-[23.5%] w-[42%] max-w-none"
        >
        <img
          :src="`${base}/3%20(1)%201.png`"
          alt=""
          aria-hidden="true"
          class="absolute bottom-[-7%] right-[-7%] w-[26%] max-w-none"
        >

        <h1 id="reserve-heading" class="sr-only">Mark Your Reservation!</h1>
        <img
          :src="`${base}/Mark%20Your%20Reservation!.png`"
          alt="Mark Your Reservation!"
          class="absolute left-[59.2%] top-[27%] w-[29.5%] max-w-none"
        >
        <NuxtLink
          to="/mitra/batik-shaho"
          class="absolute left-[56.5%] top-[48.1%] grid h-[20%] w-[35.2%] place-items-center rounded-full bg-forest px-[2%] text-center text-[clamp(0.85rem,1.8vw,1.6rem)] font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          Kembali ke Batik Shaho
        </NuxtLink>
      </section>

  </main>
</template>

