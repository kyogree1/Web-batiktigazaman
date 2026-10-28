<script setup lang="ts">
withDefaults(defineProps<{
  color?: string
  className?: string
}>(), {
  color: '#d64d05',
  className: 'size-32',
})

const petals = Array.from({ length: 8 }, (_, index) => index * 45)
</script>

<template>
  <div
    aria-hidden="true"
    class="flower relative shrink-0"
    :class="className"
    :style="{ '--flower-color': color }"
  >
    <span
      v-for="petal in petals"
      :key="petal"
      class="flower-petal absolute left-1/2 top-1/2 h-[38%] w-[22%] origin-[50%_100%] rounded-full"
      :style="{ transform: `translate(-50%, -100%) rotate(${petal}deg)` }"
    />
    <span class="absolute left-1/2 top-1/2 size-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--flower-color)]" />
  </div>
</template>

<style scoped>
.flower-petal {
  background: var(--flower-color);
  box-shadow: 0 2px 4px rgb(0 0 0 / 18%);
}
</style>
