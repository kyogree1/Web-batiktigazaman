<script setup lang="ts">
const base = '/design/jenis_motif_batik_bs'

const motifs = [
  {
    id: 'ruang-walu',
    name: 'Motif Ruang Walu',
    image: 'Motif 2.1 1.png',
    titleImage: 'Motif Ruang Walu.png',
    card: 'Rectangle 79.png',
    marker: 'Rectangle 94.png',
    left: '27.8%',
    artworkLeft: '22.7%',
    artworkTop: '11.2%',
    artworkWidth: '53%',
    artworkHeight: '58.5%',
    titleLeft: '25.5%',
    titleWidth: '50%',
  },
  {
    id: 'sarumbolum',
    name: 'Motif Sarumbolum',
    image: 'Motif 1.1 1.png',
    titleImage: 'Motif Sarumbolum.png',
    card: 'Rectangle 80.png',
    marker: 'Rectangle 92.png',
    left: '52.6%',
    artworkLeft: '26%',
    artworkTop: '12.3%',
    artworkWidth: '53%',
    artworkHeight: '59%',
    titleLeft: '22.8%',
    titleWidth: '54%',
  },
]
</script>

<template>
  <main
    class="motif-page relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="motif-page-title"
  >
    <!-- Tombol Kembali -->
    <NuxtLink
      to="/mitra/bulau-sayang"
      aria-label="Kembali ke Batik Bulau Sayang"
      class="motif-back-btn absolute left-[3.5%] top-[4%] z-40 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
    >
      <span aria-hidden="true">←</span>
      <span>Kembali</span>
    </NuxtLink>

    <!-- Supergrafis Top Left -->
    <img
      :src="`${base}/Supergrafis%202%201.png`"
      alt=""
      aria-hidden="true"
      class="motif-supergrafis pointer-events-none absolute left-0 top-0 z-0 h-full w-[7%] max-w-none object-fill"
    >

    <!-- Line Clothesline Rope (Desktop Asli) -->
    <img
      :src="`${base}/Line%2011.png`"
      alt=""
      aria-hidden="true"
      class="motif-line pointer-events-none absolute left-0 top-[5.5%] z-20 w-full max-w-none"
    >

    <!-- Bottom Wave Banners -->
    <img
      :src="`${base}/Rectangle%2072.png`"
      alt=""
      aria-hidden="true"
      class="motif-bottom-wave-1 pointer-events-none absolute bottom-0 left-0 z-0 h-[27.1%] w-full max-w-none"
    >
    <img
      :src="`${base}/Rectangle%2073.png`"
      alt=""
      aria-hidden="true"
      class="motif-bottom-wave-2 pointer-events-none absolute bottom-0 left-0 z-30 h-[10.5%] w-full max-w-none"
    >
    <img
      :src="`${base}/Vector.png`"
      alt=""
      aria-hidden="true"
      class="motif-bottom-vector pointer-events-none absolute bottom-0 right-0 z-20 w-[30.4%] max-w-none"
    >

    <!-- Gold Sparkle -->
    <img
      :src="`${base}/kuning%20emas_20260814121731%203.png`"
      alt=""
      aria-hidden="true"
      class="motif-star pointer-events-none absolute left-[9.2%] top-[19.5%] z-20 w-[10.8%] max-w-none"
    >

    <!-- Title Image -->
    <h1 id="motif-page-title" class="sr-only">Jenis Motif Batik</h1>
    <img
      :src="`${base}/Jenis%20Motif%20Batik.png`"
      alt="Jenis Motif Batik"
      class="motif-title absolute left-1/2 top-[7.2%] z-20 w-[37.3%] max-w-none -translate-x-1/2"
    >

    <!-- Cards Container -->
    <div class="motif-cards-container">
      <div
        v-for="motif in motifs"
        :key="motif.name"
        class="motif-card-wrapper"
      >
        <!-- Tali Jemuran Khusus Mobile -->
        <svg
          class="motif-card-rope pointer-events-none"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M 0 5 Q 50 15 100 5" stroke="rgba(30, 60, 43, 0.18)" stroke-width="3" stroke-linecap="round" />
          <path d="M 0 4 Q 50 14 100 4" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" />
        </svg>

        <NuxtLink
          :to="`/mitra/bulau-sayang/motif/${motif.id}`"
          :aria-label="`Lihat ${motif.name}`"
          class="motif-card group absolute top-[23.1%] z-10 h-[38.2%] w-[21.4%] rounded-[3vw] outline-offset-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-forest"
          :style="{ left: motif.left }"
        >
          <img :src="`${base}/${motif.card}`" alt="" aria-hidden="true" class="absolute inset-0 size-full">
          <!-- Jepitan Animasi Polaroid -->
          <img
            :src="`${base}/${motif.marker}`"
            alt=""
            aria-hidden="true"
            class="motif-card-clip pointer-events-none"
          >
          <img
            :src="`${base}/${motif.image}`"
            :alt="motif.name"
            :style="{ left: motif.artworkLeft, top: motif.artworkTop, width: motif.artworkWidth, height: motif.artworkHeight }"
            class="motif-artwork absolute z-10 max-w-none object-contain"
          >
          <img
            :src="`${base}/${motif.titleImage}`"
            alt=""
            aria-hidden="true"
            :style="{ left: motif.titleLeft, width: motif.titleWidth }"
            class="motif-card-title-img absolute top-[70.5%] z-10 max-w-none"
          >
        </NuxtLink>
      </div>
    </div>

    <!-- Icon Manusia (IMG_2223 1.png) - Ditempatkan di bagian bawah seperti Batik Shaho -->
    <img
      :src="`${base}/IMG_2223%201.png`"
      alt="Ilustrasi anak menyambut pengunjung"
      class="motif-person pointer-events-none absolute left-0 top-[40.2%] z-20 w-[30.1%] max-w-none"
    >
  </main>
</template>

<style scoped>
.motif-cards-container {
  display: contents;
}

.motif-card-wrapper {
  display: contents;
}

.motif-card-rope {
  display: none;
}

.motif-card-clip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -19.5%;
  width: 12.5%;
  height: auto;
  z-index: 30;
  pointer-events: none;
}

@media (max-width: 700px) {
  .motif-page {
    aspect-ratio: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem 1.25rem 5rem;
    position: relative;
    overflow-x: hidden;
  }

  .motif-back-btn {
    position: relative;
    left: auto;
    top: auto;
    align-self: flex-start;
    order: 0;
    margin-bottom: 0.75rem;
    padding: 0.5rem 1.15rem;
    font-size: 0.875rem;
    z-index: 30;
  }

  .motif-title {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    order: 1;
    width: min(22rem, 84vw);
    height: auto;
    margin: 0 auto 3.5rem;
    z-index: 20;
    display: block;
  }

  .motif-line {
    display: none;
  }

  .motif-supergrafis {
    position: absolute;
    left: 0;
    top: 0;
    width: 2.25rem;
    opacity: 0.45;
  }

  .motif-star {
    position: absolute;
    right: 1.25rem;
    top: 3.5rem;
    left: auto;
    width: 3.5rem;
    opacity: 0.75;
  }

  .motif-bottom-wave-1 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    height: 6rem;
    width: 100%;
    object-fit: fill;
  }

  .motif-bottom-wave-2 {
    display: none;
  }

  .motif-bottom-vector {
    position: absolute;
    right: -2rem;
    bottom: 1.5rem;
    left: auto;
    top: auto;
    width: 8rem;
    opacity: 0.4;
  }

  .motif-cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 2;
    gap: 4.5rem;
    width: 100%;
    position: relative;
    z-index: 20;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .motif-card-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;
  }

  /* Tali jemuran mobile: membentang horizontal di atas kartu */
  .motif-card-rope {
    display: block;
    position: absolute;
    left: -5%;
    width: 110%;
    height: 1.5rem;
    top: -1.35rem;
    z-index: 5;
    pointer-events: none;
  }

  .motif-card {
    position: relative;
    left: auto !important;
    top: auto !important;
    width: min(17rem, 78vw);
    height: auto;
    aspect-ratio: 308 / 391;
    filter: drop-shadow(0 12px 24px rgba(30, 60, 43, 0.15));
    transition: transform 0.2s ease;
    z-index: 10;
  }

  .motif-card:active {
    transform: scale(0.98);
  }

  /* Jepitan kayu mencengkeram tali di atas dan ujung kartu di bawah */
  .motif-card-clip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -2.35rem;
    width: 1.85rem;
    height: auto;
    z-index: 30;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
    pointer-events: none;
  }

  .motif-card-title-img {
    position: absolute;
    left: 15% !important;
    bottom: 8%;
    top: auto !important;
    width: 70% !important;
    height: auto;
  }

  /* Icon manusia berada di bawah kartu (order: 3) seperti pada Batik Shaho */
  .motif-person {
    position: relative;
    left: auto;
    top: auto;
    order: 3;
    width: min(13rem, 55vw);
    height: auto;
    margin: 1.5rem auto 1.5rem;
    display: block;
    z-index: 10;
  }
}
</style>
