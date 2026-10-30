<template>
  <main id="home" class="overflow-x-clip bg-forest">
    <section class="home-hero relative aspect-[1440/1024] w-full overflow-hidden" aria-label="Halaman utama">
      <div class="absolute inset-x-0 top-0 z-40 h-[11.2%] bg-forest home-hero-nav">
        <AppNavbar />
      </div>

      <img
        src="/halaman%20pertama/IMG_3486%201.png"
        alt="Anak-anak belajar membatik bersama Komunitas Batik Tiga Zaman"
        class="absolute inset-0 block size-full object-cover"
      >
      <div class="absolute inset-0 bg-cream/75" />

      <img
        src="/halaman%20pertama/logo.png"
        alt="Komunitas Batik Tiga Zaman"
        class="home-hero-logo absolute left-1/2 top-[20.8%] z-20 w-[20%] -translate-x-1/2"
      >

      <p class="home-hero-copy absolute left-1/2 top-[54%] z-20 w-[59%] -translate-x-1/2 text-center text-[clamp(0.72rem,1.45vw,1.35rem)] leading-[1.42] text-forest">
        Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
      </p>

      <img
        src="/halaman%20pertama/cewe.png"
        alt=""
        aria-hidden="true"
        class="home-hero-cewe absolute bottom-0 left-[-2.5%] z-20 h-[57%] w-auto max-w-[42%] object-contain object-bottom pointer-events-none"
      >
      <img
        src="/halaman%20pertama/cowo.png"
        alt=""
        aria-hidden="true"
        class="home-hero-cowo absolute bottom-0 right-[-2.5%] z-20 h-[57%] w-auto max-w-[42%] object-contain object-bottom pointer-events-none"
      >

      <a
        href="#about"
        class="home-hero-btn absolute left-[36.8%] top-[76.2%] z-30 flex h-[7.5%] w-[28.6%] items-center justify-center rounded-full bg-forest text-[clamp(0.9rem,2.2vw,2rem)] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
      >
        More Info
      </a>
    </section>

    <AboutDropdown />
    <AboutUsDetailSection />
    <ProgramSection />
    <TestimonialSection />
  </main>
</template>

<style scoped>
@media (max-width: 700px) {
  .home-hero {
    aspect-ratio: auto;
    min-height: 44rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5.5rem;
    padding-bottom: 7rem;
    padding-inline: 1.25rem;
  }

  .home-hero-nav {
    position: absolute;
    height: 4rem;
  }

  .home-hero-logo {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: min(10.5rem, 50vw);
    margin-bottom: 1.5rem;
  }

  .home-hero-copy {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 23rem;
    font-size: 0.88rem;
    line-height: 1.55;
    margin-bottom: 1.75rem;
  }

  .home-hero-btn {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: min(13rem, 65vw);
    height: 3.1rem;
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
  }

  .home-hero-cewe,
  .home-hero-cowo {
    position: absolute;
    bottom: 0;
    height: 8.5rem;
    max-width: 38%;
  }

  .home-hero-cewe {
    left: -1%;
  }

  .home-hero-cowo {
    right: -1%;
  }
}
</style>
