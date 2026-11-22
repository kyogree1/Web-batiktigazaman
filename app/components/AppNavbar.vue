<script setup lang="ts">
const navigation = [
  { label: 'About us', href: '#about', x: 511 },
  { label: 'Program', href: '#program', x: 613 },
  { label: 'Mitra Kami', href: '#about-detail', x: 714 },
  { label: 'Contact US', href: '#about-detail', x: 818 },
]
</script>

<template>
  <header class="app-header layer z-40 bg-paper" :style="place(0, 0, 1440, 110)">
    <a href="#home" class="brand layer" :style="place(74, 25, 81, 68)" aria-label="Home Page">
      <img :src="asset('umum/logo.webp')" alt="Komunitas Batik Tiga Zaman" class="size-full object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
    </a>

    <nav aria-label="Navigasi utama" class="font-poppins text-[#103520]">
      <a
        v-for="item in navigation"
        :key="item.label"
        :href="item.href"
        :style="place(item.x, 50)"
        class="nav-link layer whitespace-nowrap hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
      >
        {{ item.label }}
      </a>
    </nav>

    <button type="button" aria-label="Cari" class="search layer" :style="place(1378, 45, 21, 20)">
      <img :src="asset('beranda/ikon-cari.svg')" alt="" aria-hidden="true" class="block size-full">
    </button>
  </header>
</template>

<style scoped>
.nav-link {
  font-size: max(9px, calc(12 * var(--u)));
  line-height: 1.5;
  text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
}

@media (max-width: 700px) {
  .app-header {
    display: flex;
    width: 100%;
    height: 3.75rem;
    align-items: center;
    padding-inline: 0.75rem;
  }

  .brand {
    position: static;
    width: 2.75rem;
    height: 2.4rem;
    flex: none;
  }

  nav {
    display: flex;
    min-width: 0;
    flex: 1;
    justify-content: space-evenly;
    gap: 0.35rem;
    overflow-x: auto;
  }

  .nav-link {
    position: static;
    width: auto;
    height: auto;
    padding-block: 0.8rem;
    font-size: 0.66rem;
    text-shadow: none;
  }

  .search {
    position: static;
    width: 1.1rem;
    height: 1.1rem;
    flex: none;
  }
}
</style>
