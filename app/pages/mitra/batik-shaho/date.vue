<script setup lang="ts">
const base = '/design/date/5'
</script>

<template>
  <main
    class="relative flex w-full flex-col overflow-x-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-label="Informasi reservasi Batik Shaho"
  >
    <!-- ==================== SECTION 1: TERMS & DETAILS ==================== -->
    <section id="terms" aria-labelledby="terms-heading">
      <!-- Desktop Artboard (1440 x 1024) -->
      <div
        class="terms-desktop relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#111] max-[700px]:hidden"
      >
        <NuxtLink
          to="/mitra/batik-shaho"
          aria-label="Kembali ke Batik Shaho"
          class="absolute left-[3.5%] top-[4%] z-30 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          <span aria-hidden="true">←</span>
          Kembali ke Batik Shaho
        </NuxtLink>
        <img
          :src="`${base}/Vector-5.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute left-[-4%] top-[-8%] z-20 w-[34%] max-w-none"
        >
        <img
          :src="`${base}/Supergrafis%202%202.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute right-0 top-0 z-[5] h-[72%] w-[10.5%] max-w-none"
        >
        <img
          :src="`${base}/Vector-6.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute bottom-[-13%] right-[-9%] z-20 w-[39%] max-w-none"
        >
        <img
          :src="`${base}/IMG_5378%202.png`"
          alt="Ilustrasi pemandu kegiatan membatik"
          class="pointer-events-none absolute bottom-0 left-0 z-20 w-[29%] max-w-none"
        >

        <!-- Card 1 Ketentuan Desktop -->
        <img
          :src="`${base}/Rectangle%20111.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute left-[38.7%] top-[14.9%] z-10 h-[27.5%] w-[48.5%] max-w-none object-fill"
        >
        <img
          :src="`${base}/Rectangle%2095-1.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute left-[32.4%] top-[11.5%] z-20 w-[35.7%] max-w-none"
        >
        <h2 id="terms-heading" class="sr-only">Ketentuan dan rincian kegiatan</h2>
        <img
          :src="`${base}/Ketentuan.png`"
          alt="Ketentuan"
          class="pointer-events-none absolute left-[39%] top-[13.5%] z-20 w-[20%] max-w-none"
        >
        <img
          :src="`${base}/kuning%20emas_20260814121731%204.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute left-[75%] top-[7%] z-30 w-[9.5%] max-w-none"
        >
        <div class="absolute left-[43.6%] top-[21.8%] z-10 w-[39%] text-[clamp(0.85rem,1.7vw,1.55rem)] leading-[1.55]">
          <ul class="list-disc space-y-[0.4%] pl-[1.7em]">
            <li>Minimal 10 siswa</li>
            <li>Durasi kegiatan 2 jam (08.30 sampai 10.30)</li>
            <li>Media diserahkan ke pihak sekolah sekitar 3 hari kerja setelah proses selesai</li>
          </ul>
        </div>

        <!-- Card 2 Rincian Kegiatan Desktop -->
        <img
          :src="`${base}/Rectangle%20110-1.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute left-[24.2%] top-[50.5%] z-10 h-[33.4%] w-[48.4%] max-w-none object-fill"
        >
        <img
          :src="`${base}/Rectangle%20112.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute left-[42%] top-[47.7%] z-20 w-[35.7%] max-w-none"
        >
        <img
          :src="`${base}/Rincian%20kegiatan.png`"
          alt="Rincian kegiatan"
          class="pointer-events-none absolute left-[44.8%] top-[48.7%] z-20 w-[27%] max-w-none"
        >
        <div class="absolute left-[26.5%] top-[56.8%] z-10 w-[44%] text-[clamp(0.82rem,1.65vw,1.5rem)] leading-[1.5]">
          <ul class="list-disc space-y-[0.35%] pl-[1.7em]">
            <li>Pelajaran dasar batik</li>
            <li>Mewarnai media yang sudah disiapkan</li>
            <li>Media dicanting dan dicap dengan nama serta motif batik</li>
            <li>Motif untuk TK: kapal, pesawat, atau bunga yang mudah dikenali anak, dengan pilihan motif batik</li>
          </ul>
        </div>
      </div>

      <!-- Mobile Layout (<= 700px) -->
      <div
        class="terms-mobile min-[701px]:hidden relative flex min-h-[100svh] flex-col justify-between overflow-x-hidden bg-[#edd4b8] px-4 py-5 text-[#1e3c2b]"
      >
        <!-- Header Top -->
        <header class="flex items-center justify-between gap-2 pt-1 mb-4">
          <NuxtLink
            to="/mitra/batik-shaho"
            aria-label="Kembali ke Batik Shaho"
            class="inline-flex items-center gap-1.5 rounded-full bg-forest px-3.5 py-1.5 text-xs font-bold text-white shadow-md active:scale-95"
          >
            <span aria-hidden="true">←</span>
            <span>Kembali</span>
          </NuxtLink>

          <span class="rounded-full bg-forest/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream shadow">
            Ketentuan & Rincian
          </span>
        </header>

        <!-- Main Cards -->
        <div class="my-auto flex flex-col gap-6">
          <!-- Card 1: Ketentuan -->
          <div class="relative mx-auto w-full max-w-[360px]">
            <!-- Ribbon Pita: Gambar "Ketentuan" berpusat sempurna di dalam pita tanpa tembus border -->
            <div class="relative z-20 mx-auto -mb-3.5 flex w-[64%] items-center justify-center">
              <img
                :src="`${base}/Rectangle%2095-1.png`"
                alt=""
                aria-hidden="true"
                class="h-auto w-full drop-shadow-md"
              >
              <img
                :src="`${base}/Ketentuan.png`"
                alt="Ketentuan"
                class="absolute left-1/2 top-1/2 h-auto w-[52%] -translate-x-1/2 -translate-y-1/2"
              >
              <img
                :src="`${base}/kuning%20emas_20260814121731%204.png`"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute -right-3 -top-3 h-auto w-7"
              >
            </div>

            <!-- Wadah Putih Ber-border: teks fleksibel tidak akan pernah keluar border -->
            <div class="relative z-10 rounded-2xl border-4 border-forest/20 bg-white px-5 pb-5 pt-6 shadow-xl">
              <ul class="list-disc space-y-2.5 pl-4 text-xs font-medium leading-relaxed text-[#1e3c2b]">
                <li>Minimal 10 siswa</li>
                <li>Durasi kegiatan 2 jam (08.30 sampai 10.30)</li>
                <li>Media diserahkan ke pihak sekolah sekitar 3 hari kerja setelah proses selesai</li>
              </ul>
            </div>
          </div>

          <!-- Card 2: Rincian Kegiatan -->
          <div class="relative mx-auto w-full max-w-[360px]">
            <!-- Ribbon Pita: Gambar "Rincian kegiatan" berpusat sempurna di dalam pita -->
            <div class="relative z-20 mx-auto -mb-3.5 flex w-[74%] items-center justify-center">
              <img
                :src="`${base}/Rectangle%20112.png`"
                alt=""
                aria-hidden="true"
                class="h-auto w-full drop-shadow-md"
              >
              <img
                :src="`${base}/Rincian%20kegiatan.png`"
                alt="Rincian kegiatan"
                class="absolute left-1/2 top-1/2 h-auto w-[70%] -translate-x-1/2 -translate-y-1/2"
              >
            </div>

            <!-- Wadah Putih Ber-border -->
            <div class="relative z-10 rounded-2xl border-4 border-forest/20 bg-white px-5 pb-5 pt-6 shadow-xl">
              <ul class="list-disc space-y-2 pl-4 text-xs font-medium leading-relaxed text-[#1e3c2b]">
                <li>Pelajaran dasar batik</li>
                <li>Mewarnai media yang sudah disiapkan</li>
                <li>Media dicanting dan dicap dengan nama serta motif batik</li>
                <li>Motif untuk TK: kapal, pesawat, atau bunga yang mudah dikenali anak, dengan pilihan motif batik</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Maskot & Ornamen di Bagian Bawah -->
        <div class="mt-4 flex items-end justify-between px-2">
          <img
            :src="`${base}/IMG_5378%202.png`"
            alt="Ilustrasi pemandu kegiatan membatik"
            class="h-56 sm:h-64 w-auto object-contain drop-shadow"
          >
          <img
            :src="`${base}/Vector-6.png`"
            alt=""
            aria-hidden="true"
            class="h-20 w-auto object-contain opacity-40"
          >
        </div>
      </div>
    </section>

    <!-- ==================== SECTION 2: PRICELIST ==================== -->
    <section
      id="pricelist"
      class="date-canvas relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
      aria-labelledby="pricelist-heading"
    >
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

      <div class="absolute left-[21.5%] top-[11%] flex w-[57%] items-center justify-center max-[700px]:left-1/2 max-[700px]:top-14 max-[700px]:w-[84%] max-[700px]:max-w-[340px] max-[700px]:-translate-x-1/2">
        <img
          :src="`${base}/Rectangle%2095.png`"
          alt=""
          aria-hidden="true"
          class="h-auto w-full drop-shadow-md pointer-events-none"
        >
        <h2 id="pricelist-heading" class="sr-only">Pricelist Booking</h2>
        <img
          :src="`${base}/Pricelist%20Booking.png`"
          alt="Pricelist Booking"
          class="absolute left-1/2 top-1/2 h-auto w-[68%] -translate-x-1/2 -translate-y-1/2 drop-shadow"
        >
      </div>

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

    <!-- ==================== SECTION 3: RESERVATION ==================== -->
    <section
      id="reservation"
      class="date-canvas relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] max-[700px]:aspect-auto max-[700px]:min-h-[100svh]"
      aria-labelledby="reserve-heading"
    >
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
