<script setup lang="ts">
withDefaults(defineProps<{ to: string, label?: string, ariaLabel?: string }>(), { label: 'Kembali' })
</script>

<template>
  <NuxtLink :to="to" :aria-label="ariaLabel ?? label" class="back pill z-50 inline-flex items-center gap-2 font-poppins font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
    <span aria-hidden="true">←</span>
    {{ label }}
  </NuxtLink>
</template>

<style scoped>
.back {
  position: absolute;
  left: 1.5%;
  top: 1.1vw;
  padding: 0.55vw 1.2vw;
  font-size: max(11px, 1.05vw);
}

@media (max-width: 700px) {
  .back {
    position: fixed;
    left: 1rem;
    top: 1rem;
    padding: 0.55rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
