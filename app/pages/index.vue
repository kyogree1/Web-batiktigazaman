<template>
  <main id="home" class="bg-forest">
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
        class="absolute left-1/2 top-[20.8%] z-20 w-[20%] -translate-x-1/2"
      >

      <p class="absolute left-1/2 top-[54%] z-20 w-[59%] -translate-x-1/2 text-center text-[clamp(0.72rem,1.45vw,1.35rem)] leading-[1.42] text-forest">
        Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
      </p>

      <img
        src="/halaman%20pertama/cewe.png"
        alt=""
        aria-hidden="true"
        class="absolute bottom-0 left-[-2.5%] z-20 h-[57%] w-auto max-w-[42%] object-contain object-bottom"
      >
      <img
        src="/halaman%20pertama/cowo.png"
        alt=""
        aria-hidden="true"
        class="absolute bottom-0 right-[-2.5%] z-20 h-[57%] w-auto max-w-[42%] object-contain object-bottom"
      >

      <a
        href="#about"
        class="absolute left-[36.8%] top-[76.2%] z-30 flex h-[7.5%] w-[28.6%] items-center justify-center rounded-full bg-forest text-[clamp(0.9rem,2.2vw,2rem)] font-bold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
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
    min-height: 36rem;
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }

  .home-hero-nav {
    position: absolute;
    height: 3.5rem;
  }

  .home-hero :deep(nav) {
    gap: 0.75rem;
    overflow-x: auto;
    padding-inline: 1rem;
    white-space: nowrap;
  }

  .home-hero :deep(nav > div) {
    gap: 0.9rem;
  }

  .home-hero :deep(nav > button) {
    flex: none;
  }

  .home-hero > img:first-of-type {
    position: absolute;
    inset: 3.5rem 0 0;
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .home-hero > div:nth-of-type(2) {
    position: absolute;
    inset: 3.5rem 0 0;
    height: auto;
  }

  .home-hero > img:nth-of-type(2) {
    top: 7rem;
    width: 10rem;
  }

  .home-hero > p {
    top: 18rem;
    width: 82%;
    font-size: 0.9rem;
  }

  .home-hero > img:nth-of-type(3),
  .home-hero > img:nth-of-type(4) {
    bottom: 0;
    height: 9rem;
    max-width: 48%;
  }

  .home-hero > a {
    left: 25%;
    top: auto;
    bottom: 1.5rem;
    height: 3rem;
    width: 50%;
    font-size: 1.05rem;
  }
}
</style>
