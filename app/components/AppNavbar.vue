<script setup lang="ts">
const navigation = [
  { label: 'About us', href: '#about', x: 511 },
  { label: 'Program', href: '#program', x: 613 },
  { label: 'Mitra Kami', href: '#mitra', x: 714 },
  { label: 'Contact US', href: '#mitra', x: 818 },
]

// Navbar ikut hilang saat menggulir ke bawah dan muncul lagi saat menggulir sedikit ke atas.
const { hidden, scrolled, hold } = useHideOnScroll()
</script>

<template>
  <header
    class="app-header artboard bg-paper"
    :class="{ 'app-header--hidden': hidden, 'app-header--scrolled': scrolled }"
  >
    <a href="#home" class="brand layer" :style="place(74, 25, 81, 68)" aria-label="Home Page" @click="hold()">
      <img :src="asset('umum/logo.webp')" alt="Komunitas Batik Tiga Zaman" class="size-full object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
    </a>

    <nav aria-label="Navigasi utama" class="font-poppins text-[#103520]">
      <a
        v-for="item in navigation"
        :key="item.label"
        :href="item.href"
        :style="place(item.x, 50)"
        class="nav-link layer whitespace-nowrap hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        @click="hold()"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
/*
 * Header berada di luar artboard hero karena container query pada hero
 * mengurung elemen `fixed`. Header punya artboard sendiri (lebar 1440, tinggi 110)
 * sehingga posisi px dari Figma tetap sama.
 */
.app-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  aspect-ratio: 1440 / 110;
  overflow: visible;
}

.app-header--hidden {
  transform: translateY(-100%);
}

/* Tetap terlihat saat navigasi keyboard (Tab) masuk ke header; klik mouse tidak memicu ini. */
.app-header:has(:focus-visible) {
  transform: none;
}

/*
 * Setelah halaman digulir, navbar jadi tembus pandang agar konten di belakangnya
 * tetap terlihat. Di posisi paling atas tetap solid seperti desain Figma.
 */
.app-header--scrolled {
  background-color: rgb(250 234 211 / 90%);
  box-shadow: 0 4px 10px rgb(0 0 0 / 12%);
}

@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
  .app-header--scrolled {
    background-color: rgb(250 234 211 / 70%);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .app-header {
    transition:
      transform 250ms var(--ease-out),
      background-color 250ms var(--ease-out),
      box-shadow 250ms var(--ease-out);
  }
}

.nav-link {
  font-size: max(9px, calc(12 * var(--u)));
  line-height: 1.5;
  text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
}

@media (max-width: 700px) {
  .app-header {
    display: flex;
    height: 3.75rem;
    aspect-ratio: auto;
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
    gap: 0.25rem;
    overflow-x: auto;
  }

  .nav-link {
    position: static;
    width: auto;
    height: auto;
    padding-block: 0.8rem;
    font-size: 0.75rem;
    text-shadow: none;
  }
}
</style>
