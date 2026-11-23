<script setup lang="ts">
withDefaults(defineProps<{ to: string, label?: string, ariaLabel?: string }>(), { label: 'Kembali' })
</script>

<template>
  <!-- Panah saja (tanpa latar). Area klik tetap 48px agar mudah ditekan. -->
  <NuxtLink :to="to" :aria-label="ariaLabel ?? label" :title="ariaLabel ?? label" class="back z-50">
    <span class="back-arrow" aria-hidden="true" />
  </NuxtLink>
</template>

<style scoped>
.back {
  --size: clamp(48px, 3.8vw, 60px);

  position: absolute;
  left: 1.5%;
  top: 1.1vw;
  display: grid;
  width: var(--size);
  height: var(--size);
  place-items: center;
  border-radius: 9999px;
  color: #5d270c;
  /* Halo krem tipis agar panah tetap terbaca di latar gelap maupun bermotif. */
  filter: drop-shadow(0 0 2px rgb(250 234 211 / 90%)) drop-shadow(0 2px 3px rgb(0 0 0 / 30%));
}

.back-arrow {
  width: 82%;
  height: 82%;
  background: currentColor;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M6 24L20 10L24 14L18.5 21H42V27H18.5L24 34L20 38Z'/%3E%3C/svg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M6 24L20 10L24 14L18.5 21H42V27H18.5L24 34L20 38Z'/%3E%3C/svg%3E") center / contain no-repeat;
}

.back:focus-visible {
  outline: 3px solid #193f2d;
  outline-offset: 2px;
}

/* Panah selalu tampil; saat disorot hanya makin gelap dan bergeser sedikit ke kiri. */
@media (hover: hover) and (pointer: fine) {
  .back:hover {
    color: #261003;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .back {
    transition: color 180ms var(--ease-out);
  }

  .back-arrow {
    transition: transform 180ms var(--ease-out);
  }

  @media (hover: hover) and (pointer: fine) {
    .back:hover .back-arrow {
      transform: translateX(-4px);
    }
  }

  .back:active .back-arrow {
    transform: scale(0.92);
  }
}

@media (max-width: 700px) {
  .back {
    --size: 2.75rem;

    position: fixed;
    left: 0.75rem;
    top: 0.75rem;
    /*
     * Di HP tombol menempel saat digulir, jadi latar di belakangnya berganti-ganti
     * (pita gelap, krem, foto). Panah krem di atas lingkaran gelap buram selalu terbaca.
     */
    color: #faead3;
    background: rgb(38 16 3 / 55%);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    box-shadow: 0 2px 6px rgb(0 0 0 / 35%);
    filter: none;
  }

  .back:hover {
    color: #faead3;
  }

  .back-arrow {
    width: 55%;
    height: 55%;
  }
}
</style>
