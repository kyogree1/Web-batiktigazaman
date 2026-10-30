<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const navigation = [
  { label: 'About us', href: '/#about-detail' },
  { label: 'Program', href: '/#program' },
  { label: 'Mitra Kami', href: '/#about-detail' },
  { label: 'Home Page', href: '/#home' },
]

function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="relative z-50 h-full w-full bg-forest">
    <nav
      aria-label="Navigasi utama"
      class="mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 md:px-[7.9%] text-[clamp(0.75rem,1vw,0.875rem)] text-cream"
    >
      <!-- Desktop Navigation Links -->
      <div class="hidden sm:flex items-center gap-6 md:gap-[3.3vw]">
        <a
          v-for="item in navigation"
          :key="item.label"
          :href="item.href"
          class="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Mobile brand / title -->
      <div class="sm:hidden flex items-center">
        <a href="/#home" class="font-bold text-cream text-sm tracking-wide">
          Batik Tiga Zaman
        </a>
      </div>

      <!-- Right controls (Search + Mobile Hamburger) -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          aria-label="Cari"
          class="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          <img
            src="/design/Vector(3).png"
            alt=""
            aria-hidden="true"
            class="block size-[21px] object-contain"
          >
        </button>

        <!-- Mobile Hamburger Button -->
        <button
          type="button"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Menu navigasi"
          class="sm:hidden grid size-10 place-items-center rounded-lg text-cream transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="sm:hidden absolute inset-x-0 top-full z-50 bg-[#163828] border-t border-cream/15 px-6 py-4 shadow-xl"
      >
        <div class="flex flex-col space-y-3">
          <a
            v-for="item in navigation"
            :key="item.label"
            :href="item.href"
            class="py-2 text-base font-semibold text-cream transition-colors hover:text-white hover:translate-x-1"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
