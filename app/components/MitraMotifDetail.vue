<script setup lang="ts">
defineProps<{
  back: string
  motif: {
    /** Tiap item adalah satu baris judul seperti di desain */
    title: string[]
    titleY: number
    description: string
    textY: number
    image: string
    art: number[]
    frame: number[]
    leavesY?: number
  }
}>()
</script>

<template>
  <main class="relative min-h-[100svh] w-full bg-rust" aria-labelledby="motif-detail-title">
    <MitraBackLink :to="back" aria-label="Kembali ke Jenis Motif" />

    <div class="detail artboard aspect-[1440/1024] bg-gradient-to-b from-[#f6f3f0] to-rust max-[700px]:aspect-auto">
      <ArtImage :src="asset('motif/gawangan.webp')" :box="[...motif.frame, 991, 991]" class="decor" eager />
      <ArtImage :src="asset(`motif/${motif.image}.webp`)" :box="motif.art" :alt="motif.title.join(' ')" class="artwork flow" eager />

      <h1 id="motif-detail-title" class="title layer flow font-buenard font-bold text-[#431c05]" :style="place(116, motif.titleY)">
        <span v-for="line in motif.title" :key="line" class="block">{{ `${line} ` }}</span>
      </h1>
      <p class="description layer flow text-justify font-poppins text-[#431c05]" :style="place(116, motif.textY, 580)">{{ motif.description }}</p>

      <ArtImage :src="asset('motif/daun.webp')" :box="[-271, motif.leavesY ?? 411, 1012.35, 1002.15]" :size="[702.83, 744.01]" transform="rotate(55.09deg)" class="leaves" eager />
      <ArtImage :src="asset('motif/canting.webp')" :box="[957, 650, 571.84, 466.89]" :size="[352.97, 499.28]" transform="rotate(-75.48deg)" class="decor" eager />
      <ArtImage :src="asset('umum/ornamen-horizontal.webp')" :box="[-3, 4, 1442.62, 58.11]" transform="rotate(180deg)" class="ornament" eager />
    </div>
  </main>
</template>

<style scoped>
.title {
  font-size: calc(80 * var(--u));
  line-height: 1.28;
  white-space: nowrap;
}

.description {
  font-size: calc(21 * var(--u));
  line-height: 1.5;
}

@media (max-width: 700px) {
  .detail {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    align-items: center;
    padding: 4.5rem 1.5rem 12rem;
  }

  .artwork {
    width: 12.5rem;
    height: 17.5rem;
    margin-block: 1rem;
    border-radius: 1.5rem;
    background: #fff;
  }

  .title {
    font-size: 2.2rem;
    white-space: normal;
    text-align: center;
  }

  .description {
    z-index: 1;
    margin-top: 1rem;
    font-size: 0.875rem;
    text-align: left;
  }

  .ornament {
    top: 0;
    left: 0;
    width: 200%;
    height: 1.75rem;
  }

  .leaves {
    left: -6rem;
    top: auto;
    bottom: -8rem;
    width: 21rem;
    height: 21rem;
  }
}
</style>
