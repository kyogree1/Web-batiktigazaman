<script setup lang="ts">
const base = '/design/jenis_motif_batik/2'

const cards = [
  {
    bg: 'Rectangle%2078.png',
    left: '14.4%',
    top: '20.31%',
    motif: 'motif%203%201.png',
    motifClass: 'left-[1.37%] top-[2.73%] w-[89.3%]',
    title: 'Motif Naga Kecil',
  },
  {
    bg: 'Rectangle%2079.png',
    left: '41.6%',
    top: '23.14%',
    motif: 'Motif%205%201.png',
    motifClass: 'left-[16.37%] top-[4.41%] w-[68%]',
    title: 'Motif Anggrek Hitam Kecil',
  },
  {
    bg: 'Rectangle%2080.png',
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
    class="relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="motif-title"
  >
    <img
      :src="`${base}/Supergrafis%202%201.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-0 top-0 w-[10.42%] max-w-none"
    >
    <img
      :src="`${base}/Rectangle%2072.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-0 top-[73.05%] h-[33.6%] w-full max-w-none object-fill"
    >
    <img
      :src="`${base}/Vector%20(1).png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[69.79%] top-[61.23%] w-[32.64%] max-w-none"
    >
    <img
      :src="`${base}/IMG_2223%201.png`"
      alt="Ilustrasi perempuan muda"
      class="absolute left-[-10.2%] top-[39.82%] w-[38.4%] max-w-none"
    >

    <img
      :src="`${base}/Line%2011.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[-1.8%] top-[5.5%] w-[103.7%] max-w-none"
    >

    <img
      :src="`${base}/kuning%20emas_20260814121731%203.png`"
      alt=""
      aria-hidden="true"
      class="absolute left-[7.99%] top-[17.38%] w-[13.13%] max-w-none"
    >

    <div
      v-for="card in cards"
      :key="card.title"
      class="absolute w-[20.83%]"
      :style="{ left: card.left, top: card.top }"
    >
      <img :src="`${base}/${card.bg}`" alt="" aria-hidden="true" class="block w-full">
      <img
        :src="`${base}/${card.motif}`"
        alt=""
        aria-hidden="true"
        class="absolute max-w-none"
        :class="card.motifClass"
      >
      <p class="absolute left-[18.5%] top-[74%] w-[63%] text-center text-[1.81vw] font-extrabold leading-[1.35]">
        {{ card.title }}
      </p>
    </div>

    <img
      v-for="clip in clips"
      :key="clip.file"
      :src="`${base}/${clip.file}`"
      alt=""
      aria-hidden="true"
      class="absolute w-[2.85%] max-w-none"
      :style="{ left: clip.left, top: clip.top }"
    >

    <h1
      id="motif-title"
      class="absolute left-1/2 top-[6.35%] w-full -translate-x-1/2 text-center text-[5vw] font-extrabold leading-none tracking-[-0.02em]"
    >
      Jenis Motif Batik
    </h1>
  </main>
</template>




