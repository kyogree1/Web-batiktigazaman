<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const learningCards = [
  {
    image: '/halaman%20ketiga/IMG_4822%201.png',
    alt: 'Logo Batik Shaho',
    text: 'Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.',
    className: 'community-card--first',
    logoClass: 'community-card-logo--s',
    to: '/mitra/batik-shaho',
  },
  {
    image: '/halaman%20ketiga/IMG_4819%203.png',
    alt: 'Logo BS kegiatan batik',
    text: 'Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.',
    className: 'community-card--second',
    logoClass: 'community-card-logo--bs',
    to: '/mitra/bulau-sayang',
  },
]
</script>

<template>
  <section
    id="about-detail"
    class="community-detail relative aspect-[1440/1024] w-full overflow-hidden bg-[#1e3c2b] text-cream"
    aria-labelledby="about-us-title"
  >
    <picture aria-hidden="true" class="community-supergraphic absolute inset-y-0 left-0 z-10 block w-[9.8%] pointer-events-none">
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

    <h2
      id="about-us-title"
      class="community-title absolute right-[7.5%] top-[9.3%] z-20 text-[clamp(2.4rem,4.5vw,4.25rem)] font-extrabold leading-none text-[#dba658]"
    >
      About Us
    </h2>

    <img
      src="/halaman%20ketiga/8_Motif%20senusantara%202.png"
      alt="Peta Indonesia dengan motif batik Nusantara"
      class="community-map absolute left-[32%] top-[-6%] z-10 w-[68%] max-w-none"
    >

    <p class="community-desc absolute bottom-[30%] right-[7.5%] z-20 w-[45%] text-[clamp(0.8rem,1.25vw,1.15rem)] leading-[1.42] text-cream">
      Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
    </p>

    <div class="community-cards-container">
      <component
        :is="card.to ? NuxtLink : 'div'"
        v-for="card in learningCards"
        :key="card.image"
        :to="card.to"
        class="community-card flex flex-col items-center border border-[#9f9b83] bg-[#435b4e] text-center text-[#edd4b8] transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        :class="card.className"
        :aria-label="card.to ? 'Lihat profil ' + card.alt : undefined"
      >
        <div class="community-card-logo grid place-items-center" :class="card.logoClass">
          <img :src="card.image" :alt="card.alt" class="block size-full object-contain">
        </div>
        <p class="community-card-copy">{{ card.text }}</p>
      </component>
    </div>
  </section>
</template>

<style scoped>
/* Desktop artboard styles */
.community-supergraphic {
  mask-image: linear-gradient(to bottom, #000 82%, transparent 99%);
  -webkit-mask-image: linear-gradient(to bottom, #000 82%, transparent 99%);
}

.community-cards-container {
  display: contents;
}

.community-card {
  position: absolute;
  z-index: 20;
  width: 17.3%;
  height: 48.5%;
  border-radius: 7rem;
  padding: 3.2% 2% 2.8%;
}

.community-card--first {
  left: 6.6%;
  top: 7%;
}

.community-card--second {
  left: 24%;
  top: 45.8%;
  width: 16.3%;
  height: 45.7%;
}

.community-card-logo {
  position: absolute;
  left: 50%;
  top: 8.4%;
  width: 78%;
  aspect-ratio: 1;
  flex: none;
  transform: translateX(-50%);
}

.community-card-logo--s {
  overflow: hidden;
  border-radius: 9999px;
  background: #000;
}

.community-card-logo--bs {
  top: 3.2%;
  width: 98%;
  aspect-ratio: 239 / 292;
}

.community-card-copy {
  position: absolute;
  left: 10%;
  top: 60%;
  width: 80%;
  margin: 0;
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
  line-height: 1.42;
}

.community-map {
  height: auto;
}

/* Mobile responsive styles */
@media (max-width: 700px) {
  .community-detail {
    aspect-ratio: auto;
    min-height: auto;
    padding: 4.5rem 1.25rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .community-supergraphic {
    width: 2.5rem;
    opacity: 0.8;
  }

  .community-title {
    position: relative;
    inset: auto;
    order: 1;
    margin-bottom: 1.25rem;
    font-size: clamp(2.2rem, 9vw, 3rem);
    text-align: center;
  }

  .community-map {
    position: relative;
    left: auto;
    top: auto;
    order: 2;
    display: block;
    width: min(24rem, 95vw);
    height: auto;
    margin: 0 auto 1.5rem;
  }

  .community-desc {
    position: relative;
    right: auto;
    bottom: auto;
    order: 3;
    width: min(24rem, 92vw);
    font-size: 0.92rem;
    line-height: 1.6;
    text-align: center;
    margin: 0 auto 2.5rem;
  }

  .community-cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    order: 4;
    position: relative;
    z-index: 20;
  }

  .community-card {
    position: relative;
    left: auto;
    top: auto;
    width: min(18rem, 85vw);
    height: auto;
    min-height: auto;
    border-radius: 3rem;
    padding: 2rem 1.25rem 1.75rem;
  }

  .community-card-logo {
    position: static;
    left: auto;
    top: auto;
    transform: none;
    width: 6.5rem;
  }

  .community-card-logo--bs {
    position: static;
    top: auto;
    width: 6.5rem;
  }

  .community-card-copy {
    position: static;
    left: auto;
    top: auto;
    width: 100%;
    margin-top: 1.25rem;
    font-size: 0.88rem;
    line-height: 1.5;
  }
}
</style>
