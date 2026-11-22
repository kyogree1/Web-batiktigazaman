<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  /** [x, y, lebar, tinggi] kotak luar di Figma */
  box: number[]
  /** [lebar, tinggi] gambar sebelum diputar */
  size?: number[]
  transform?: string
  /** [kiri, atas, lebar, tinggi] gambar di dalam kotak, dalam persen */
  crop?: number[]
  alt?: string
  eager?: boolean
}>(), { alt: '' })

const innerStyle = computed(() => {
  const [, , width = 1, height = 1] = props.box
  const [w = width, h = height] = props.size ?? []
  return {
    width: `${(w / width) * 100}%`,
    height: `${(h / height) * 100}%`,
    transform: `translate(-50%, -50%) ${props.transform ?? ''}`,
  }
})

const imageStyle = computed(() => {
  if (!props.crop) return { inset: '0', width: '100%', height: '100%', objectFit: 'cover' as const }
  const [left, top, width, height] = props.crop
  return { left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }
})
</script>

<template>
  <span class="layer pointer-events-none" :style="place(box[0]!, box[1]!, box[2], box[3])" :aria-hidden="alt ? undefined : true">
    <span class="absolute left-1/2 top-1/2 block" :class="{ 'overflow-hidden': crop }" :style="innerStyle">
      <img :src="src" :alt="alt" :loading="eager ? 'eager' : 'lazy'" decoding="async" class="absolute block max-w-none" :style="imageStyle">
    </span>
  </span>
</template>
