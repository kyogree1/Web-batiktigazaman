<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps<{
  variant: 'shaho' | 'bulau-sayang'
  name: string
  description: string
  links: { maps: string, contact: string, motif: string, date: string, photo: string }
}>()

const isShaho = computed(() => props.variant === 'shaho')

/*
 * Kedua mitra memakai tata letak Figma "Frame 143" (Galeri Bulau Sayang):
 * strip krem 58 px di atas (tempat tombol kembali), banner 466 px, tombol aksi di bawah.
 * Yang berbeda hanya logo: Shaho bulat hitam, Bulau Sayang oval.
 */
const logoBox = computed(() => (isShaho.value
  // Logo Shaho 323 px, dipusatkan di area logo Bulau Sayang (946, 100, 373 x 455).
  ? place(971, 166, 323, 323)
  : place(946, 100, 373, 455)))

const actions = computed(() => [
  { label: 'Maps', to: props.links.maps, x: 174, y: 571, circle: [21, 9], icon: [40.5, 21.4, 19, 33.25], text: [98, 19] },
  { label: 'Contact', href: props.links.contact, x: 402, y: 568, circle: [10.2, 10], icon: [21.2, 19.8, 36, 42.06], text: [78, 21] },
  { label: 'Motif', to: props.links.motif, x: 628, y: 568, circle: [15.2, 9], icon: [20.2, 16, 44, 44], text: [93, 22] },
  { label: 'Date', to: props.links.date, x: 856, y: 568, circle: [15.4, 9], icon: [24.7, 17.3, 39.33, 39.33], text: [95, 22] },
  { label: 'Photo', to: props.links.photo, x: 1084, y: 567, circle: [14, 9], icon: [24, 23, 38, 31], text: [94, 22] },
])
</script>

<template>
  <main class="relative min-h-[100svh] w-full bg-paper" aria-labelledby="mitra-title">
    <MitraBackLink to="/#mitra" label="Kembali ke Home" class="profile-back" />

    <div class="profile artboard aspect-[1440/716] max-[700px]:aspect-auto">
      <div class="band layer" :style="place(0, 58, 1440, 466)" aria-hidden="true" />
      <ArtImage :src="asset('umum/ornamen-horizontal.webp')" :box="[-2, 58, 1442.62, 58.11]" transform="rotate(180deg)" class="ornament" />

      <h1 id="mitra-title" class="title layer flow whitespace-nowrap font-buenard font-bold text-paper" :style="place(91, 100)">{{ name }}</h1>
      <p class="description layer flow text-justify font-poppins text-paper" :style="place(91, 219, 750)">{{ description }}</p>

      <div class="logo layer flow" :class="{ 'logo--round overflow-hidden rounded-full bg-black': isShaho }" :style="logoBox">
        <img :src="asset(isShaho ? 'umum/logo-shaho.webp' : 'umum/logo-bulau-sayang.webp')" :alt="`Logo ${name}`" class="size-full object-cover">
      </div>

      <nav class="actions" aria-label="Menu Aksi Mitra">
        <component
          :is="action.to ? NuxtLink : 'a'"
          v-for="action in actions"
          :key="action.label"
          :to="action.to"
          :href="action.href"
          :target="action.href ? '_blank' : undefined"
          :rel="action.href ? 'noopener noreferrer' : undefined"
          :aria-label="action.href ? `Hubungi ${name} melalui WhatsApp` : action.label"
          class="action pill layer"
          :style="place(action.x, action.y, 184, 76)"
        >
          <ArtImage :src="asset('umum/lingkaran.svg')" :box="[...action.circle, 58, 58]" class="action-circle" eager />
          <ArtImage :src="asset(`umum/ikon-${action.label.toLowerCase()}.svg`)" :box="action.icon" class="action-icon" :class="`action-icon--${action.label.toLowerCase()}`" eager />
          <span class="action-label layer font-buenard font-bold text-[#f2f7f4]" :style="place(action.text[0]!, action.text[1]!)">{{ action.label }}</span>
        </component>
      </nav>
    </div>
  </main>
</template>

<style scoped>
/* Tombol kembali di tengah strip krem 58 px, rata kiri dengan judul (x 91). */
@media (min-width: 701px) {
  a.profile-back {
    left: calc(91 / 1440 * 100%);
    top: calc(9 / 1440 * 100vw);
  }
}

.band {
  background: linear-gradient(#261003 6%, #8c3b0b 96%);
  box-shadow: 3px 4px 10.3px rgb(0 0 0 / 72%);
}

.title {
  font-size: calc(80 * var(--u));
  line-height: 1.23;
}

.description {
  font-size: calc(21 * var(--u));
  line-height: 1.5;
}

.action-label {
  font-size: calc(24 * var(--u));
  line-height: 1.23;
}

@media (max-width: 700px) {
  .profile {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    align-items: center;
    padding: 6.5rem 1.5rem 3rem;
    background: linear-gradient(#261003, #8c3b0b);
  }

  .band {
    display: none;
  }

  .ornament {
    top: 4rem;
    left: 0;
    width: 200%;
    height: 1.75rem;
  }

  .title {
    order: 1;
    font-size: 2.3rem;
    white-space: normal;
    text-align: center;
  }

  .logo {
    order: 2;
    width: 9rem;
    height: 11rem;
    margin-block: 1rem;
  }

  .logo--round {
    height: 9rem;
  }

  .description {
    order: 3;
    font-size: 0.875rem;
    text-align: left;
  }

  .actions {
    display: grid;
    width: 100%;
    max-width: 24rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 2rem;
    order: 4;
  }

  .action {
    position: relative;
    left: auto;
    top: auto;
    width: 100%;
    height: 3.5rem;
  }

  .action:last-child {
    width: calc(50% - 0.375rem);
    grid-column: 1 / -1;
    justify-self: center;
  }

  .action-circle {
    left: 0.4rem;
    top: 0.4rem;
    width: 2.7rem;
    height: 2.7rem;
  }

  .action-icon {
    left: 1rem;
    top: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  .action-icon--maps {
    left: 1.3rem;
    width: 0.9rem;
  }

  .action-label {
    left: 3.4rem;
    top: 0.95rem;
    width: auto;
    height: auto;
    font-size: 1.15rem;
  }
}
</style>
