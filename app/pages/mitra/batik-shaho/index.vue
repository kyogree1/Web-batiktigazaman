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
    class="mitra-shaho relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="mitra-title"
  >
    <!-- Tombol Kembali ke Home -->
    <NuxtLink
      to="/#about-detail"
      aria-label="Kembali ke Home"
      class="mitra-back-btn absolute left-[3.5%] top-[4%] z-30 inline-flex items-center gap-2 rounded-full bg-forest px-[1.2vw] py-[0.65vw] text-[1.05vw] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
    >
      <span aria-hidden="true">←</span>
      <span>Kembali ke Home</span>
    </NuxtLink>

    <!-- Ornamen Latar -->
    <img
      :src="`${base}/Ellipse%2041.png`"
      alt=""
      aria-hidden="true"
      class="mitra-decor-tl pointer-events-none absolute left-[-14.31%] top-[-12.5%] w-[37.22%] max-w-none"
    >
    <img
      :src="`${base}/Vector(1).png`"
      alt=""
      aria-hidden="true"
      class="mitra-decor-tr pointer-events-none absolute left-[77.5%] top-[-8.2%] w-[27.22%] max-w-none"
    >
    <img
      :src="`${base}/1%20(1)%201.png`"
      alt=""
      aria-hidden="true"
      class="mitra-decor-br pointer-events-none absolute left-[81.53%] top-[66.02%] w-[30.07%] max-w-none"
    >

    <!-- Judul Halaman -->
    <h1
      id="mitra-title"
      class="mitra-title absolute left-[32.64%] top-[14.5%] z-20 text-[6.06vw] font-extrabold leading-none tracking-[-0.005em] text-[#1e3c2b]"
    >
      Batik Shaho
    </h1>

    <!-- Bentuk Kuning dan Logo S Kiri -->
    <div
      class="mitra-shape-yellow pointer-events-none absolute left-0 top-[28.61%] h-[63.09%] w-[45.07%] rounded-r-full bg-[#cbc308]"
      aria-hidden="true"
    />
    <div class="mitra-logo-wrapper absolute left-[5%] top-[35.94%] z-10 w-[35.97%]">
      <img
        :src="`${base}/Mask%20group.png`"
        alt="Logo Batik Shaho"
        class="mitra-logo block size-full object-contain"
      >
    </div>

    <!-- Kartu Informasi Sejarah -->
    <section
      class="mitra-card absolute left-[47.92%] top-[30.08%] z-20 h-[34.67%] w-[48.47%] rounded-[2.8vw] bg-white pb-[2.4vw] pl-[4.1vw] pr-[5.4vw] pt-[2.9vw] shadow-[0_1.2vw_2.8vw_rgba(30,60,43,0.08)]"
      aria-label="Tentang Batik Shaho"
    >
      <p class="mitra-card-text text-[1.585vw] leading-[1.335] text-[#1e3c2b]">
        Batik SHAHO didirikan oleh (Alm.) Pak Supratono dan keluarga pada tahun 1990. Nama SHAHO sendiri diambil dari nama depan seluruh anggota keluarga beliau: (Alm.) Supratono, (Almh.) Haryati (istri), Ardi (anak), Hendri (anak), dan Oki (anak). Mulai dari mengerjakan pesanan sablonan hingga produk-produk lainnya, Batik SHAHO tumbuh dan saat ini sedang mempersiapkan diri untuk mengekspor batik Indonesia.
      </p>
    </section>

    <!-- 4 Tombol Aksi Navigasi -->
    <nav
      class="mitra-actions absolute left-[48.33%] top-[68.55%] z-20 grid w-[31.53%] grid-cols-2 gap-x-[1.04vw] gap-y-[1.85vw]"
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
        class="mitra-action-btn flex h-[5.42vw] items-center gap-[7%] rounded-full pl-[6%] pr-[5%] font-bold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        :style="{ backgroundColor: action.bg }"
      >
        <span class="mitra-action-icon grid aspect-square h-[72%] shrink-0 place-items-center rounded-full bg-white shadow-sm">
          <img :src="`${base}/${action.icon}`" alt="" class="w-[52%] object-contain">
        </span>
        <span class="mitra-action-label flex-1 text-center text-[1.93vw] font-extrabold">{{ action.label }}</span>
      </component>
    </nav>
  </main>
</template>

<style scoped>
@media (max-width: 700px) {
  .mitra-shaho {
    aspect-ratio: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem 1.25rem 4rem;
    position: relative;
    overflow-x: hidden;
  }

  .mitra-back-btn {
    position: relative;
    left: auto;
    top: auto;
    align-self: flex-start;
    order: 1;
    margin-bottom: 0.75rem;
    padding: 0.5rem 1.15rem;
    font-size: 0.875rem;
    z-index: 30;
  }

  .mitra-decor-tl {
    position: absolute;
    left: -2.5rem;
    top: -2rem;
    width: 7.5rem;
    opacity: 0.45;
  }

  .mitra-decor-tr {
    position: absolute;
    right: -2rem;
    top: -1.5rem;
    left: auto;
    width: 8rem;
    opacity: 0.45;
  }

  .mitra-decor-br {
    position: absolute;
    right: -2rem;
    bottom: -1rem;
    left: auto;
    top: auto;
    width: 8.5rem;
    opacity: 0.35;
  }

  .mitra-title {
    position: relative;
    left: auto;
    top: auto;
    order: 2;
    width: 100%;
    text-align: center;
    font-size: clamp(2.2rem, 9vw, 2.85rem);
    line-height: 1.15;
    margin-bottom: 1.5rem;
    z-index: 10;
  }

  .mitra-shape-yellow {
    display: none;
  }

  .mitra-logo-wrapper {
    position: relative;
    left: auto;
    top: auto;
    order: 3;
    width: min(13rem, 54vw);
    height: auto;
    aspect-ratio: 1;
    margin: 0 auto 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-color: #cbc308;
    box-shadow: 0 12px 32px rgba(30, 60, 43, 0.14);
    padding: 0.6rem;
    z-index: 10;
  }

  .mitra-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 9999px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .mitra-card {
    position: relative;
    left: auto;
    top: auto;
    order: 4;
    width: 100%;
    max-width: 25rem;
    height: auto;
    border-radius: 1.75rem;
    padding: 1.6rem 1.4rem;
    background-color: #ffffff;
    box-shadow: 0 10px 30px rgba(30, 60, 43, 0.08);
    margin-bottom: 1.75rem;
    z-index: 10;
  }

  .mitra-card-text {
    font-size: 0.95rem;
    line-height: 1.65;
    color: #1e3c2b;
    text-align: left;
  }

  .mitra-actions {
    position: relative;
    left: auto;
    top: auto;
    order: 5;
    width: 100%;
    max-width: 25rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.85rem;
    z-index: 10;
  }

  .mitra-action-btn {
    height: 3.35rem;
    padding-left: 0.5rem;
    padding-right: 0.75rem;
    border-radius: 9999px;
    gap: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .mitra-action-icon {
    width: 2.35rem;
    height: 2.35rem;
    border-radius: 9999px;
    background-color: #ffffff;
  }

  .mitra-action-label {
    font-size: 1rem;
    font-weight: 800;
  }
}
</style>
