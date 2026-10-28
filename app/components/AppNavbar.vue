<script setup lang="ts">
const navigation = [
  { label: 'Program', href: '#home' },
  { label: 'Mitra Kami', href: '#home' },
  { label: 'Home Page', href: '#home' },
]
</script>

<template>
  <header class="relative h-full w-full bg-forest">
    <nav
      aria-label="Navigasi utama"
      class="mx-auto flex h-full w-full items-center justify-between px-[7.9%] text-[clamp(0.55rem,1vw,0.875rem)] text-cream"
    >
      <div class="flex items-center gap-[3.3vw]">
        <a
          href="#about-detail"
          class="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          About us
        </a>

        <a
          v-for="item in navigation"
          :key="item.label"
          :href="item.href"
          class="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          {{ item.label }}
        </a>
      </div>

      <button
        type="button"
        aria-label="Cari"
        class="grid size-10 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
      >
        <span
          aria-hidden="true"
          class="relative block size-[18px] rounded-full border-2 border-cream after:absolute after:-right-[45%] after:bottom-[-35%] after:h-2 after:w-0.5 after:rotate-[-42deg] after:bg-cream"
        />
      </button>
    </nav>
  </header>
</template>
