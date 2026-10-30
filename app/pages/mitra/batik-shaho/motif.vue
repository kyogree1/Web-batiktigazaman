<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')
const base = '/design/jenis_motif_batik/2'

const cards = [
  {
    id: 'naga',
    bg: 'Rectangle%2078.png',
    clip: 'Rectangle%2094.png',
    left: '14.4%',
    top: '20.31%',
    motif: 'motif%203%201.png',
    motifClass: 'left-[1.37%] top-[2.73%] w-[89.3%]',
    title: 'Motif Naga Kecil',
  },
  {
    id: 'anggrek',
    bg: 'Rectangle%2079.png',
    clip: 'Rectangle%2092.png',
    left: '41.6%',
    top: '23.14%',
    motif: 'Motif%205%201.png',
    motifClass: 'left-[16.37%] top-[4.41%] w-[68%]',
    title: 'Motif Anggrek Hitam Kecil',
  },
  {
    id: 'enggang',
    bg: 'Rectangle%2080.png',
    clip: 'Rectangle%2093.png',
    left: '68.8%',
    top: '20.31%',
    motif: 'Motif%204%201.png',
    motifClass: 'left-[13.3%] top-[2.6%] w-[74%]',
    title: 'Motif Ekor Enggang',
  },
]

const clips = [
  { file: 'Rectangle%2094.png', left: '23.54%', top: '12.79%' },
  { file: 'Rectangle%2092.png', left: '50.76%', top: '17.19%' },
  { file: 'Rectangle%2093.png', left: '77.85%', top: '12.79%' },
]
</script>

<template>
  <main
    class="motif-main relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="motif-title"
  >
    <!-- Back to Batik Shaho -->
    <NuxtLink
      to="/mitra/batik-shaho"
      aria-label="Kembali ke Batik Shaho"
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
      class="motif-supergrafis pointer-events-none absolute left-0 top-0 w-[10.42%] max-w-none"
    >

    <!-- Bottom Wave Banner -->
    <img
      :src="`${base}/Rectangle%2072.png`"
      alt=""
      aria-hidden="true"
      class="motif-bottom-wave pointer-events-none absolute left-0 top-[73.05%] h-[33.6%] w-full max-w-none object-fill"
    >

    <!-- Flower Vector Bottom Right -->
    <img
      :src="`${base}/Vector%20(1).png`"
      alt=""
      aria-hidden="true"
      class="motif-vector-flower pointer-events-none absolute left-[69.79%] top-[61.23%] w-[32.64%] max-w-none"
    >

    <!-- Clothesline Line (Desktop Asli) -->
    <img
      :src="`${base}/Line%2011.png`"
      alt=""
      aria-hidden="true"
      class="motif-line pointer-events-none absolute left-[-1.8%] top-[5.5%] z-0 w-[103.7%] max-w-none"
    >

    <!-- Gold Sparkle -->
    <img
      :src="`${base}/kuning%20emas_20260814121731%203.png`"
      alt=""
      aria-hidden="true"
      class="motif-star pointer-events-none absolute left-[7.99%] top-[17.38%] z-10 w-[13.13%] max-w-none"
    >

    <!-- Title -->
    <h1
      id="motif-title"
      class="motif-title absolute left-1/2 top-[6.35%] z-20 w-full -translate-x-1/2 text-center text-[5vw] font-extrabold leading-none tracking-[-0.02em]"
    >
      Jenis Motif Batik
    </h1>

    <!-- Cards Container -->
    <div class="motif-cards-container">
      <div
        v-for="card in cards"
        :key="card.id"
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

        <!-- Kartu Motif Polaroid -->
        <component
          :is="NuxtLink"
          :to="`/mitra/batik-shaho/motif-detail/${card.id}`"
          :aria-label="`Lihat ${card.title}`"
          class="motif-card group absolute block w-[20.83%] z-10 rounded-[3.5vw] outline-offset-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#cb4c08]"
          :style="{ left: card.left, top: card.top }"
        >
          <img
            :src="`${base}/${card.bg}`"
            alt=""
            aria-hidden="true"
            class="block w-full transition-transform duration-200 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          >
          <img
            :src="`${base}/${card.motif}`"
            alt=""
            aria-hidden="true"
            class="absolute max-w-none"
            :class="card.motifClass"
          >
          <span class="motif-card-title absolute left-[18.5%] top-[74%] w-[63%] text-center text-[1.81vw] font-extrabold leading-[1.35]">
            {{ card.title }}
          </span>

          <!-- Jepitan Kayu (Clothespin) -->
          <img
            :src="`${base}/${card.clip}`"
            alt=""
            aria-hidden="true"
            class="motif-card-clip pointer-events-none"
          >
        </component>
      </div>
    </div>

    <!-- Girl Illustration (Maskot di bawah kartu pada mobile) -->
    <img
      :src="`${base}/IMG_2223%201.png`"
      alt="Ilustrasi perempuan muda"
      class="motif-girl pointer-events-none absolute left-[-10.2%] top-[39.82%] w-[38.4%] max-w-none"
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
  top: -19%;
  width: 13.5%;
  height: auto;
  z-index: 30;
  pointer-events: none;
}

@media (max-width: 700px) {
  .motif-main {
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
    width: 100%;
    text-align: center;
    font-size: clamp(2.1rem, 8.5vw, 2.75rem);
    line-height: 1.15;
    margin-bottom: 3.5rem;
    z-index: 20;
  }

  .motif-line {
    display: none;
  }

  .motif-clips-desktop {
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

  .motif-bottom-wave {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    height: 6rem;
    width: 100%;
    object-fit: fill;
  }

  .motif-vector-flower {
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

  .motif-card-title {
    position: absolute;
    left: 10%;
    bottom: 10%;
    top: auto;
    width: 80%;
    text-align: center;
    font-size: 1.05rem;
    font-weight: 800;
    line-height: 1.3;
    color: #1e3c2b;
  }

  .motif-girl {
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
