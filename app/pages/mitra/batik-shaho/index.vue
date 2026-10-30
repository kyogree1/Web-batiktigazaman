<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')
const base = '/design/halaman_mitra_batik_shaho/1'

const actions = [
  {
    label: 'Maps',
    icon: 'at-icons_location.png',
    bg: '#ff340c',
    to: '/mitra/batik-shaho/maps',
    ariaLabel: 'Lihat lokasi Batik Shaho di Maps',
  },
  {
    label: 'Contact',
    icon: 'Vector.png',
    bg: '#cbc308',
    href: 'https://wa.me/6281346241922',
    ariaLabel: 'Hubungi Batik Shaho melalui WhatsApp',
  },
  {
    label: 'Motif',
    icon: 'mdi_palette.png',
    bg: '#f03272',
    to: '/mitra/batik-shaho/motif',
    ariaLabel: 'Lihat koleksi motif Batik Shaho',
  },
  {
    label: 'Date',
    icon: 'akar-icons_calendar.png',
    bg: '#9ab3eb',
    to: '/mitra/batik-shaho/date',
    ariaLabel: 'Reservasi tanggal kunjungan Batik Shaho',
  },
]
</script>

<template>
  <main
    class="mitra-shaho relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b] max-[700px]:aspect-auto max-[700px]:min-h-[100svh] max-[700px]:overflow-y-auto max-[700px]:px-5 max-[700px]:pb-16 max-[700px]:pt-20"
    aria-labelledby="mitra-title"
  >
    <!-- Tombol Kembali ke Home -->
    <NuxtLink
      to="/#about-detail"
      aria-label="Kembali ke Home"
      class="absolute left-[3.5%] top-[4%] z-30 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest max-[700px]:fixed max-[700px]:left-4 max-[700px]:top-4 max-[700px]:px-4 max-[700px]:py-2 max-[700px]:text-sm"
    >
      <span aria-hidden="true">←</span>
      Kembali ke Home
    </NuxtLink>

    <!-- Ornamen Latar -->
    <img
      :src="`${base}/Ellipse%2041.png`"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute left-[-1.5%] top-0 w-[24.5%] max-w-none max-[700px]:w-[42%]"
    >
    <img
      :src="`${base}/Vector(1).png`"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute left-[77.24%] top-[-5.3%] w-[24.72%] max-w-none max-[700px]:left-auto max-[700px]:right-[-6%] max-[700px]:top-[-2%] max-[700px]:w-[35%]"
    >
    <img
      :src="`${base}/1%20(1)%201.png`"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute left-[81.5%] top-[66.55%] w-[25%] max-w-none max-[700px]:bottom-0 max-[700px]:left-auto max-[700px]:right-0 max-[700px]:top-auto max-[700px]:w-[38%] max-[700px]:opacity-40"
    >

    <!-- Bentuk Kuning dan Logo S Kiri -->
    <div
      class="pointer-events-none absolute left-0 top-[28.61%] h-[63.09%] w-[45.07%] rounded-r-full bg-[#cbc308] max-[700px]:relative max-[700px]:left-auto max-[700px]:top-auto max-[700px]:mx-auto max-[700px]:mb-6 max-[700px]:h-52 max-[700px]:w-52 max-[700px]:rounded-full"
      aria-hidden="true"
    />
    <img
      :src="`${base}/Mask%20group.png`"
      alt="Logo Batik Shaho"
      class="absolute left-[5%] top-[35.94%] z-10 w-[35.97%] max-w-none max-[700px]:relative max-[700px]:left-auto max-[700px]:top-auto max-[700px]:-mt-48 max-[700px]:mx-auto max-[700px]:mb-6 max-[700px]:block max-[700px]:w-44"
    >

    <!-- Judul Halaman -->
    <h1
      id="mitra-title"
      class="absolute left-[32.64%] top-[14.5%] z-20 text-[6.06vw] font-extrabold leading-none tracking-[-0.005em] text-[#1e3c2b] max-[700px]:relative max-[700px]:left-auto max-[700px]:top-auto max-[700px]:mb-6 max-[700px]:text-center max-[700px]:text-3xl"
    >
      Batik Shaho
    </h1>

    <!-- Kartu Informasi Sejarah -->
    <section
      class="absolute left-[47.92%] top-[30.08%] z-20 h-[34.67%] w-[48.47%] rounded-[2.8vw] bg-white pb-[2.4vw] pl-[4.1vw] pr-[5.4vw] pt-[2.9vw] shadow-[0_1.2vw_2.8vw_rgba(30,60,43,0.08)] max-[700px]:relative max-[700px]:left-auto max-[700px]:top-auto max-[700px]:mb-8 max-[700px]:h-auto max-[700px]:w-full max-[700px]:rounded-3xl max-[700px]:p-6 max-[700px]:shadow-md"
      aria-label="Tentang Batik Shaho"
    >
      <p class="text-[1.585vw] leading-[1.335] text-[#1e3c2b] max-[700px]:text-sm max-[700px]:leading-relaxed">
        Batik SHAHO didirikan oleh (Alm.) Pak Supratono dan keluarga pada tahun 1990. Nama SHAHO sendiri diambil dari nama depan seluruh anggota keluarga beliau: (Alm.) Supratono, (Almh.) Haryati (istri), Ardi (anak), Hendri (anak), dan Oki (anak). Mulai dari mengerjakan pesanan sablonan hingga produk-produk lainnya, Batik SHAHO tumbuh dan saat ini sedang mempersiapkan diri untuk mengekspor batik Indonesia.
      </p>
    </section>

    <!-- 4 Tombol Aksi Navigasi -->
    <nav
      class="absolute left-[48.33%] top-[68.55%] z-20 grid w-[31.53%] grid-cols-2 gap-x-[1.04vw] gap-y-[1.85vw] max-[700px]:relative max-[700px]:left-auto max-[700px]:top-auto max-[700px]:mx-auto max-[700px]:w-full max-[700px]:max-w-sm max-[700px]:gap-4"
      aria-label="Menu Aksi Mitra"
    >
      <component
        :is="action.to ? NuxtLink : 'a'"
        v-for="action in actions"
        :key="action.label"
        :to="action.to"
        :href="action.href"
        :target="action.href ? '_blank' : undefined"
        :rel="action.href ? 'noopener noreferrer' : undefined"
        :aria-label="action.ariaLabel"
        class="flex h-[5.42vw] items-center gap-[7%] rounded-full pl-[6%] pr-[5%] font-bold text-white shadow-md transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 max-[700px]:h-12 max-[700px]:gap-3 max-[700px]:px-4"
        :style="{ backgroundColor: action.bg }"
      >
        <span class="grid aspect-square h-[72%] shrink-0 place-items-center rounded-full bg-white max-[700px]:h-8">
          <img :src="`${base}/${action.icon}`" alt="" class="w-[52%] object-contain">
        </span>
        <span class="flex-1 text-center text-[1.93vw] font-extrabold max-[700px]:text-base">{{ action.label }}</span>
      </component>
    </nav>
  </main>
</template>
