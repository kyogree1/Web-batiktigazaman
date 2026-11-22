<script setup lang="ts">
// Deretan daun di bawah Program dan Testimoni; pada Testimoni digeser 18/32 px.
defineProps<{ y: number, x?: number }>()
</script>

<template>
  <div class="gold-leaves layer pointer-events-none" :style="place(x ?? 0, y, 1440, 1024)" aria-hidden="true">
    <ArtImage :src="asset('beranda/daun-program.webp')" :box="[946, 867, 286.97, 323]" />
    <ArtImage :src="asset('umum/daun-emas.webp')" :box="[1116, 717, 396.3, 406.5]" :size="[301.95, 319.64]" transform="rotate(20.96deg)" />
    <ArtImage :src="asset('beranda/daun-program.webp')" :box="[457, 858, 318, 358]" />
    <ArtImage :src="asset('umum/daun-emas.webp')" :box="[593, 771, 420.25, 431.06]" :size="[320.2, 338.96]" transform="rotate(20.96deg)" />
    <ArtImage :src="asset('beranda/daun-program.webp')" :box="[170.33, 858, 286.97, 323]" transform="scaleX(-1)" />
    <ArtImage :src="asset('umum/daun-emas.webp')" :box="[-109, 708, 396.3, 406.5]" :size="[301.95, 319.64]" transform="rotate(159.04deg) scaleY(-1)" />
  </div>
</template>

<style scoped>
@media (max-width: 700px) {
  .gold-leaves {
    top: auto;
    bottom: 0;
  }
}
</style>
