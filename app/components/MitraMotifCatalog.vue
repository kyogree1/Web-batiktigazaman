<script setup lang="ts">
defineProps<{
  back: string
  detailBase: string
  star: number[]
  artisanY: number
  cards: { id: string, title: string, card: number[], clip: number[], image: string, art: number[], label: number[] }[]
}>()
</script>

<template>
  <main class="relative min-h-[100svh] w-full bg-paper" aria-labelledby="motif-title">
    <MitraBackLink :to="back" />

    <div class="catalog artboard aspect-[1440/1024] max-[700px]:aspect-auto">
      <ArtImage :src="asset('umum/ornamen-vertikal.webp')" :box="[0, -302, 150, 1460]" transform="scaleX(-1)" class="decor" eager />
      <ArtImage :src="asset('umum/ornamen-vertikal.webp')" :box="[1291, -272, 150, 1460]" transform="scaleX(-1)" class="decor" eager />
      <ArtImage :src="asset('motif/gelombang-belakang.svg')" :box="[-356, 747.47, 2151, 410.03]" transform="scaleY(-1)" class="wave-back" eager />
      <ArtImage :src="asset('motif/siswi.webp')" :box="[1063, 487, 456, 645]" class="student" eager />
      <ArtImage :src="asset('motif/tali.svg')" :box="[-25, 50.7, 1492.32, 159.81]" class="decor" eager />

      <h1 id="motif-title" class="title layer flow whitespace-nowrap font-buenard font-bold text-[#1e3c2b]" :style="place(452, 54)">Jenis Motif Batik</h1>

      <NuxtLink
        v-for="item in cards"
        :key="item.id"
        :to="`${detailBase}/${item.id}`"
        :aria-label="`Lihat ${item.title}`"
        class="card layer flow bg-[#f5f5f5] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-forest"
        :style="place(item.card[0]!, item.card[1]!, 300, 383)"
      >
        <ArtImage :src="asset(`motif/${item.image}.webp`)" :box="[item.art[0]! - item.card[0]!, item.art[1]! - item.card[1]!, item.art[2]!, item.art[3]!]" class="card-art" eager />
        <span class="card-title layer text-center font-poppins font-bold text-[#1e3c2b]" :style="place(item.label[0]! - item.card[0]!, item.label[1]! - item.card[1]!, item.label[2])">
          {{ item.title }}
        </span>
        <ArtImage :src="asset('motif/jepit.svg')" :box="[item.clip[0]! - item.card[0]! - 4, item.clip[1]! - item.card[1]!, 43, 128]" class="card-clip" eager />
      </NuxtLink>

      <ArtImage :src="asset('umum/bintang.webp')" :box="[...star, 186.88, 186.88]" :size="[177, 177]" transform="rotate(-3.29deg)" class="decor drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" eager />
      <ArtImage :src="asset('motif/pembatik.webp')" :box="[0, artisanY, 790, 559]" class="artisan" eager />
      <ArtImage :src="asset('motif/gelombang-depan.svg')" :box="[-171, 916, 2175.96, 272.42]" transform="scaleY(-1)" class="wave-front" eager />
    </div>
  </main>
</template>

<style scoped>
.title {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.card {
  border-radius: calc(49 * var(--u));
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
}

@media (prefers-reduced-motion: no-preference) {
  .card {
    transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);
  }
}

/* Kartu terangkat seperti kain yang dijepit tertiup angin. */
@media (hover: hover) {
  .card:hover,
  .card:focus-visible {
    transform: translateY(-6px);
    box-shadow: 0 12px 16px rgb(0 0 0 / 28%);
  }
}

.card-title {
  font-size: calc(24 * var(--u));
  line-height: 1.5;
}

@media (max-width: 700px) {
  .catalog {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 5rem 1rem 14rem;
  }

  .title {
    font-size: 2.2rem;
    text-align: center;
  }

  .card {
    z-index: 1;
    width: 15rem;
    height: 18rem;
    border-radius: 2.5rem;
  }

  .card-art {
    left: 3.25rem;
    top: 2rem;
    width: 8.5rem;
    height: 12rem;
  }

  .card-title {
    left: 1rem;
    top: auto;
    bottom: 1.1rem;
    width: 13rem;
    height: auto;
    font-size: 1rem;
  }

  .card-clip {
    left: 6.6rem;
    top: -1.5rem;
    width: 1.8rem;
    height: 5rem;
  }

  .student,
  .artisan {
    top: auto;
    bottom: 0;
  }

  .student {
    left: auto;
    right: -2rem;
    width: 9rem;
    height: 12.7rem;
  }

  .artisan {
    left: -1rem;
    width: 15rem;
    height: 10.6rem;
  }

  .wave-back,
  .wave-front {
    left: -10%;
    top: auto;
    width: 125%;
  }

  .wave-back {
    bottom: -1rem;
    height: 9rem;
  }

  .wave-front {
    bottom: -1.5rem;
    height: 4rem;
  }
}
</style>
