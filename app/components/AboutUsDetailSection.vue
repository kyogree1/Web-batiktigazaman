<script setup lang="ts">
const learningCards = [
  {
    image: '/halaman%20ketiga/IMG_4822%201.png',
    alt: 'Logo S teknik cap batik',
    text: 'Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.',
    className: 'community-card--first',
    logoClass: 'community-card-logo--s',
  },
  {
    image: '/halaman%20ketiga/IMG_4819%203.png',
    alt: 'Logo BS kegiatan batik',
    text: 'Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.',
    className: 'community-card--second',
    logoClass: 'community-card-logo--bs',
  },
]
</script>

<template>
  <section
    id="about-detail"
    class="community-detail relative aspect-[1440/1024] w-full overflow-hidden bg-[#1e3c2b] text-cream"
    aria-labelledby="about-us-title"
  >
    <picture aria-hidden="true" class="community-supergraphic absolute inset-y-0 left-0 z-10 block w-[9.8%]">
      <source
        media="(max-width: 700px)"
        srcset="/halaman%20ketiga/Supergrafis%202%202(1).png"
      >
      <img
        src="/halaman%20ketiga/Supergrafis%202%202.png"
        alt=""
        class="block size-full object-fill"
      >
    </picture>

    <div
      v-for="card in learningCards"
      :key="card.image"
      class="community-card absolute z-20 flex flex-col items-center border border-cream/50 bg-[#4b6257] text-center"
      :class="card.className"
    >
      <div class="community-card-logo grid place-items-center" :class="card.logoClass">
        <img :src="card.image" :alt="card.alt" class="block size-full object-contain">
      </div>
      <p class="community-card-copy">{{ card.text }}</p>
    </div>

    <h2
      id="about-us-title"
      class="absolute right-[7.5%] top-[9.3%] z-20 text-[clamp(1.35rem,2.6vw,2.5rem)] font-extrabold leading-none text-[#dba658]"
    >
      About Us
    </h2>

    <img
      src="/halaman%20ketiga/8_Motif%20senusantara%202.png"
      alt="Peta Indonesia dengan motif batik Nusantara"
      class="community-map absolute left-[32%] top-[-6%] z-10 w-[68%] max-w-none"
    >

    <p class="absolute bottom-[30%] right-[7.5%] z-20 w-[45%] text-[clamp(0.8rem,1.25vw,1.15rem)] leading-[1.42] text-cream">
      Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
    </p>
  </section>
</template>

<style scoped>
.community-supergraphic {
  mask-image: linear-gradient(to bottom, #000 82%, transparent 99%);
  -webkit-mask-image: linear-gradient(to bottom, #000 82%, transparent 99%);
}

.community-card {
  width: 17.5%;
  height: 49%;
  border-radius: 7rem;
  padding: 3.2% 1.8% 2.8%;
}

.community-card--first {
  left: 6.6%;
  top: 7%;
}

.community-card--second {
  left: 24%;
  top: 46%;
}

.community-card-logo {
  width: 72%;
  aspect-ratio: 1;
  flex: none;
}

.community-card-logo--s {
  overflow: hidden;
  border-radius: 9999px;
  background: #000;
}

.community-card-logo--bs {
  width: 82%;
  aspect-ratio: 239 / 292;
}

.community-card-copy {
  margin-top: clamp(1.5rem, 3.5vw, 3.25rem);
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
  line-height: 1.42;
}

.community-map {
  height: auto;
}

@media (max-width: 700px) {
  .community-card {
    border-radius: 3rem;
  }

  .community-card-copy {
    font-size: clamp(0.62rem, 1.4vw, 0.82rem);
  }
}
</style>
