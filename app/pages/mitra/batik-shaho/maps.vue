<script setup lang="ts">
const base = '/design/maps/4'
const shahoLogo = '/halaman%20ketiga/IMG_4822%201.png'
const communityLogo = '/design/Png%20Logo%202.png'

const gmapsShareUrl = 'https://maps.app.goo.gl/c4SoaWLpdpVHitss7'
const gmapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.948270131435!2d116.84187747587889!3d-1.2158670987723725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14887198da125%3A0x8111caa531e69421!2sBatik%20Shaho!5e0!3m2!1sid!2sid'

const address = 'Jl. LKMD No.45, RT.05, Batu Ampar, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76136'
const websiteUrl = 'https://www.batikshaho.com'
const phone = '+62813-4624-1922'
const waUrl = 'https://wa.me/6281346241922'
const instagram = '@batik_shahokaltim'
const igUrl = 'https://instagram.com/batik_shahokaltim'
</script>

<template>
  <main class="w-full overflow-hidden bg-[#edd4b8]" aria-labelledby="maps-title">
    <!-- ==================== DESKTOP ARTBOARD (1440 x 1024 - Fullscreen) ==================== -->
    <div
      class="desktop-artboard relative aspect-[1440/1024] w-full overflow-hidden text-white max-[700px]:hidden"
    >
      <NuxtLink
        to="/mitra/batik-shaho"
        aria-label="Kembali ke Batik Shaho"
        class="absolute left-[3.5%] top-[4%] z-30 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
      >
        <span aria-hidden="true">←</span>
        Kembali
      </NuxtLink>

      <img
        :src="`${base}/detail%20kain%20batik%201.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute left-0 top-0 z-0 w-full object-cover"
      >

      <!-- Frame Luar Peta Desktop -->
      <img
        :src="`${base}/Rectangle%2088.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute left-[0.9%] top-[23.5%] z-10 h-[51.2%] w-[98.2%] max-w-none drop-shadow-[0_0.4vw_0.3vw_rgba(30,60,43,0.2)]"
      >

      <!-- Google Maps Interaktif Asli -->
      <div
        class="absolute left-[4.4%] top-[27.5%] z-10 h-[43%] w-[91.2%] overflow-hidden rounded-[2.5vw] bg-white shadow-inner"
      >
        <iframe
          :src="gmapsEmbedUrl"
          class="h-full w-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          title="Google Maps Lokasi Batik Shaho"
        />
      </div>

      <!-- Tombol Langsung ke Aplikasi Google Maps di Desktop -->
      <a
        :href="gmapsShareUrl"
        target="_blank"
        rel="noreferrer"
        aria-label="Buka lokasi di Google Maps"
        class="absolute right-[6%] top-[29.5%] z-15 inline-flex items-center gap-[0.5vw] rounded-full bg-forest/90 px-[1.2vw] py-[0.55vw] text-[0.9vw] font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-forest"
      >
        <span>Buka di Google Maps</span>
        <svg
          viewBox="0 0 24 24"
          class="h-[1.1vw] w-[1.1vw] fill-none stroke-current stroke-2"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>

      <!-- Ilustrasi Maskot: Sesuai Figma Frame 47 (left: 0, top: 31%, width: 33.33%, z-15 di depan peta, tapi pinggang tertutup banner hijau z-20) -->
      <img
        :src="`${base}/IMG_5142%201.png`"
        alt="Ilustrasi pemandu menunjukkan lokasi Batik Shaho"
        class="pointer-events-none absolute left-0 top-[31%] z-15 w-[33.33%] max-w-none"
      >

      <!-- Pita Header "Find Us!" -->
      <img
        :src="`${base}/Rectangle%2095.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute left-[23.2%] top-[10.6%] z-10 h-[10.9%] w-[53.6%] max-w-none"
      >
      <h1 id="maps-title" class="sr-only">
        Find Us!
      </h1>
      <img
        :src="`${base}/Find%20Us!.png`"
        alt="Find Us!"
        class="pointer-events-none absolute left-1/2 top-[13.6%] z-20 w-[18.5%] max-w-none -translate-x-1/2"
      >

      <!-- Banner Footer Gelap: Berada di z-20 (menimpa/menutupi pinggang maskot sesuai desain Figma asli) -->
      <img
        :src="`${base}/Rectangle%2098.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 z-20 h-[22.2%] w-full max-w-none object-fill"
      >
      <!-- Supergrafis ornamen gelombang emas di dasar banner -->
      <img
        :src="`${base}/Super%20Grafis%201%202.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 z-25 h-[4.3%] w-full max-w-none object-fill"
      >

      <!-- Footer Info (z-30 di atas banner hijau): Png Logo 2 Asli Desain, Alamat, Kontak -->
      <img
        :src="communityLogo"
        alt="Komunitas Batik Tiga Zaman"
        class="pointer-events-none absolute left-[6.3%] top-[82.2%] z-30 w-[8.8%] max-w-none object-contain drop-shadow"
      >

      <p class="absolute left-[20%] top-[81.5%] z-30 w-[74%] text-center text-[1.45vw] font-medium leading-[1.35] text-white">
        Jl. LKMD No.45, RT.05, Batu Ampar, Kec. Balikpapan Utara, Kota Balikpapan,<br>
        Kalimantan Timur 76136
      </p>

      <div class="absolute left-[26%] top-[90.5%] z-30 flex w-[68%] items-center justify-center gap-[3vw] text-[1.05vw] text-white">
        <a
          :href="websiteUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline"
        >
          <svg viewBox="0 0 24 24" class="h-[1.6vw] w-[1.6vw] fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M2.8 9h18.4M2.8 15h18.4M12 2.5c2.4 2.6 3.6 5.8 3.6 9.5s-1.2 6.9-3.6 9.5C9.6 18.9 8.4 15.7 8.4 12S9.6 5.1 12 2.5Z" />
          </svg>
          {{ websiteUrl }}
        </a>
        <a
          :href="waUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline"
        >
          <svg viewBox="0 0 24 24" class="h-[1.6vw] w-[1.6vw] fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-4.9A8.4 8.4 0 1 1 20.5 11.7Z" />
            <path d="M8.2 7.8c.3-.6.6-.6 1-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.8 1.3 1.6 2.2 2.1.3.2.5.2.7-.1l.8-.9c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.6 1.5-.4.4-1.1.7-1.8.7s-1.7-.3-2.8-.9c-1.2-.7-2.2-1.7-3-2.8-.8-1.1-1.2-2.2-1.2-3 0-.6.3-1.1.8-1.4Z" />
          </svg>
          {{ phone }}
        </a>
        <a
          :href="igUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-[0.55vw] whitespace-nowrap hover:underline"
        >
          <svg viewBox="0 0 24 24" class="h-[1.6vw] w-[1.6vw] fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" />
          </svg>
          {{ instagram }}
        </a>
      </div>
    </div>

    <!-- ==================== MOBILE LAYOUT (<= 700px) ==================== -->
    <div
      class="mobile-layout min-[701px]:hidden relative flex min-h-[100svh] flex-col justify-between overflow-x-hidden bg-[#edd4b8] text-white"
    >
      <!-- Background Texture Kain Batik Asli (seperti di desktop) -->
      <img
        :src="`${base}/detail%20kain%20batik%201.png`"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute left-[-20%] top-0 z-0 h-auto w-[140%] max-w-none opacity-30 mix-blend-multiply"
      >

      <!-- Top Bar: Tombol Kembali -->
      <header class="relative z-20 flex items-center justify-between gap-2 px-4 pt-3 pb-1">
        <NuxtLink
          to="/mitra/batik-shaho"
          aria-label="Kembali ke Batik Shaho"
          class="inline-flex items-center gap-1.5 rounded-full bg-forest px-3.5 py-1.5 text-xs font-bold text-white shadow-md active:scale-95 transition"
        >
          <span aria-hidden="true">←</span>
          <span>Kembali</span>
        </NuxtLink>
      </header>

      <!-- Main Body: Header (Logo Batik + Find Us dalam 1 Border) + Embed Frame + Maskot -->
      <section class="relative z-10 flex flex-1 flex-col justify-center px-4 py-2">
        <!-- Header Terpadu: Logo Batik + Bawahnya Find Us! (Bordernya Jadi 1) -->
        <div class="relative mx-auto mb-3 flex w-[84%] max-w-[280px] flex-col items-center justify-center rounded-2xl bg-forest px-5 py-2.5 shadow-lg border-2 border-sand/50 text-center">
          <!-- Logo Batik Mitra -->
          <div class="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white p-1 shadow-md border-2 border-sand/60">
            <img
              :src="shahoLogo"
              alt="Logo Batik Shaho"
              class="h-full w-full rounded-full object-cover"
            >
          </div>

          <!-- Bawahnya: Tulisan Find Us! Asli Desain -->
          <div class="mt-1.5 flex items-center justify-center">
            <img
              :src="`${base}/Find%20Us!.png`"
              alt="Find Us!"
              class="h-6 w-auto object-contain drop-shadow"
            >
          </div>
          <p class="mt-0.5 text-[10.5px] font-bold uppercase tracking-wider text-sand">
            Batik Shaho Balikpapan
          </p>
        </div>

        <!-- Wadah Embed Peta (Persis Konsep Embed Desktop) -->
        <div class="relative mx-auto w-full max-w-[360px]">
          <!-- Kartu Frame Luar Putih Ber-shadow Dalam & Luar (Meniru Rectangle 88 Desktop) -->
          <div class="relative z-10 rounded-3xl bg-white p-3.5 shadow-2xl border-4 border-white/90">
            <!-- Iframe Google Maps Interaktif di Dalam Embed -->
            <div class="relative h-[250px] w-full overflow-hidden rounded-2xl bg-cream shadow-inner border border-black/5">
              <iframe
                :src="gmapsEmbedUrl"
                class="h-full w-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
                title="Google Maps Lokasi Batik Shaho"
              />
            </div>

            <!-- Tombol Aksi Buka di Google Maps di Bawah Peta -->
            <a
              :href="gmapsShareUrl"
              target="_blank"
              rel="noreferrer"
              class="mt-3 flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-forest text-white font-bold text-xs rounded-xl shadow-md transition active:scale-[0.98] hover:bg-forest/90"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>Buka di Aplikasi Google Maps</span>
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-none stroke-current stroke-2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer Banner Gelap (Rectangle 98.png & Super Grafis 1 2.png seperti di desktop) -->
      <footer class="relative z-10 mt-6 rounded-t-3xl bg-forest px-4 pt-6 pb-7 text-white shadow-[0_-8px_24px_rgba(30,60,43,0.3)]">
        <!-- Maskot Pemandu Tertanam Rapi di Banner Footer (Menghilangkan Tampilan Mengambang) -->
        <img
          :src="`${base}/IMG_5142%201.png`"
          alt="Ilustrasi pemandu menunjukkan lokasi"
          class="pointer-events-none absolute -top-24 left-2 z-20 h-28 sm:h-32 w-auto object-contain drop-shadow-lg"
        >

        <!-- Super Grafis Gelombang di Bagian Paling Bawah -->
        <img
          :src="`${base}/Super%20Grafis%201%202.png`"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute bottom-0 left-0 z-0 h-3 w-full max-w-none object-fill opacity-70"
        >

        <!-- Informasi Alamat -->
        <div class="relative z-10 mb-3 flex items-start gap-2.5">
          <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-[#ead1ae] stroke-2" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <p class="text-[11px] sm:text-xs leading-relaxed text-cream">
            {{ address }}
          </p>
        </div>

        <!-- Tombol / Tautan Kontak -->
        <div class="relative z-10 grid grid-cols-1 gap-2 border-t border-white/20 pt-3 text-xs">
          <a
            :href="websiteUrl"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 font-medium text-white transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
              <circle cx="12" cy="12" r="9.5" />
              <path d="M2.8 9h18.4M2.8 15h18.4M12 2.5c2.4 2.6 3.6 5.8 3.6 9.5s-1.2 6.9-3.6 9.5C9.6 18.9 8.4 15.7 8.4 12S9.6 5.1 12 2.5Z" />
            </svg>
            <span class="truncate">{{ websiteUrl }}</span>
          </a>
          <div class="grid grid-cols-2 gap-2">
            <a
              :href="waUrl"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 font-medium text-white transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0 fill-none stroke-[#4ade80] stroke-[1.8]" aria-hidden="true">
                <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-4.9A8.4 8.4 0 1 1 20.5 11.7Z" />
                <path d="M8.2 7.8c.3-.6.6-.6 1-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.8 1.3 1.6 2.2 2.1.3.2.5.2.7-.1l.8-.9c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.6 1.5-.4.4-1.1.7-1.8.7s-1.7-.3-2.8-.9c-1.2-.7-2.2-1.7-3-2.8-.8-1.1-1.2-2.2-1.2-3 0-.6.3-1.1.8-1.4Z" />
              </svg>
              <span class="truncate">{{ phone }}</span>
            </a>
            <a
              :href="igUrl"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 font-medium text-white transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0 fill-none stroke-[#fb7185] stroke-[1.8]" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" />
              </svg>
              <span class="truncate">{{ instagram }}</span>
            </a>
          </div>
        </div>

        <!-- Logo Komunitas Asli Desain (Png Logo 2) -->
        <div class="relative z-10 mt-3 flex items-center justify-center pt-2 border-t border-white/10">
          <img
            :src="communityLogo"
            alt="Komunitas Batik Tiga Zaman"
            class="h-10 sm:h-12 w-auto object-contain drop-shadow"
          >
        </div>
      </footer>
    </div>
  </main>
</template>
