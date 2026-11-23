<script setup lang="ts">
const props = defineProps<{
  variant: 'shaho' | 'bulau-sayang'
  name: string
  back: string
  qrTitle: string
  driveUrl: string
}>()

const isShaho = computed(() => props.variant === 'shaho')

const photos = computed(() => isShaho.value
  ? [
      { file: 1, box: [365, 216, 332, 249] },
      { file: 2, box: [717, 216, 332, 249] },
      { file: 3, box: [365, 487, 332, 249] },
      { file: 4, box: [717, 487, 332, 249] },
    ]
  : [
      { file: 1, box: [305, 198, 392, 221] },
      { file: 2, box: [716, 198, 397, 223] },
      { file: 3, box: [300, 442, 397, 223] },
      { file: 4, box: [716, 442, 397, 223] },
      { file: 1, box: [716, 702, 397, 223] },
    ])
</script>

<template>
  <main class="relative w-full bg-olive" :aria-label="`Dokumentasi kegiatan ${name}`">
    <MitraBackLink :to="back" :aria-label="`Kembali ke ${name}`" />

    <section class="board artboard aspect-[1440/1024] max-[700px]:aspect-auto" aria-labelledby="photo-title">
      <MitraGalleryFrame />
      <h1 id="photo-title" class="heading pill layer flow whitespace-nowrap text-center font-buenard font-bold text-paper" :style="place(241, 57, 921, 104)">
        <span class="heading-text">Dokumentasi Kegiatan</span>
      </h1>
      <ArtImage v-for="(photo, index) in photos" :key="index" :src="asset(`foto/${variant}-${photo.file}.webp`)" :box="photo.box" :alt="`Kegiatan membatik bersama ${name}`" class="photo flow" />
      <ArtImage :src="asset('foto/siswi.webp')" :box="isShaho ? [166, 303, 510, 721] : [187, 379, 510, 721]" class="girl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
    </section>

    <section class="board artboard aspect-[1440/1024] max-[700px]:aspect-auto" aria-labelledby="qr-title">
      <MitraGalleryFrame />
      <h2 id="qr-title" class="heading pill layer flow whitespace-nowrap text-center font-buenard font-bold text-paper" :style="place(241, 57, 921, 104)">
        <span class="heading-text">{{ qrTitle }}</span>
      </h2>
      <a :href="driveUrl" target="_blank" rel="noopener noreferrer" class="qr layer flow" :style="place(isShaho ? 462 : 464, 256, 512, 512)" :aria-label="`Buka folder dokumentasi ${name}`">
        <img :src="asset(`foto/qr-${variant}.svg`)" :alt="`QR dokumentasi ${name}`" class="size-full">
      </a>
      <ArtImage :src="asset('reservasi/pemandu.webp')" :box="isShaho ? [-19, 332, 571, 716] : [-42, 327, 571, 716]" :crop="[0, -0.02, 177.39, 100.03]" class="boy" />
    </section>
  </main>
</template>

<style scoped>
.heading {
  font-size: calc(64 * var(--u));
  line-height: calc(100 * var(--u));
}

.heading-text {
  position: relative;
  left: calc(16 * var(--u));
}

.qr {
  overflow: hidden;
  border-radius: calc(50 * var(--u));
}

@media (max-width: 700px) {
  .board {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 5rem 1.5rem 12rem;
  }

  .heading {
    padding-block: 0.6rem;
    font-size: clamp(1.25rem, 7vw, 1.8rem);
    line-height: 1.2;
  }

  .heading-text {
    left: 0;
  }

  .photo {
    aspect-ratio: 4 / 3;
  }

  .qr {
    max-width: 18rem;
    margin-top: 1rem;
    border-radius: 1.75rem;
  }

  .girl,
  .boy {
    left: 0;
    top: auto;
    bottom: 0;
  }

  .girl {
    width: 7.6rem;
    height: 10.8rem;
  }

  .boy {
    width: 8.6rem;
    height: 10.8rem;
  }
}
</style>
