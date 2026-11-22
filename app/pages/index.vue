<template>
  <main id="home" class="overflow-x-clip bg-paper">
    <section class="home-hero artboard aspect-[1440/1024] bg-paper max-[700px]:aspect-auto" aria-labelledby="home-title">
      <ArtImage :src="asset('beranda/hero-band.svg')" :box="[-9, 107, 1471, 458]" class="band" eager />
      <div class="photo layer overflow-hidden" :style="place(-9, 114, 1449, 447)" aria-hidden="true">
        <ArtImage :src="asset('beranda/hero-foto.webp')" :box="[-392.2, -472.39, 2195.24, 1646.43]" class="opacity-20" eager />
      </div>
      <ArtImage :src="asset('beranda/hero-alas.svg')" :box="[692, 686, 653, 194]" class="decor" eager />

      <AppNavbar />

      <p class="welcome layer flow whitespace-nowrap font-poppins text-paper" :style="place(88, 221)">Selamat Datang di</p>
      <h1 id="home-title" class="title layer flow z-10 whitespace-nowrap font-buenard text-white" :style="place(83, 233)">
        Komunitas<br>Batik Tiga Zaman
      </h1>

      <ArtImage :src="asset('beranda/hero-peta.webp')" :box="[483, -18, 975, 568]" :crop="[0, -0.02, 100, 128.69]" class="map z-[41] drop-shadow-[0_4px_4px_black]" eager />
      <ArtImage :src="asset('beranda/hero-daun.webp')" :box="[1192, 583, 296.58, 323.91]" :size="[177.4, 271.01]" transform="rotate(-146.91deg) scaleY(-1)" class="decor" eager />
      <ArtImage :src="asset('umum/daun-emas.webp')" :box="[538, 534, 347.38, 346.3]" :size="[238.63, 252.61]" transform="rotate(-48.13deg)" class="decor" eager />
      <ArtImage
        :src="asset('beranda/hero-anak.webp')"
        :box="[727, 266, 678, 590]"
        :crop="[-23.09, 0, 123.13, 100]"
        alt="Anak-anak berbusana batik dari tiga zaman"
        class="children z-[42] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        eager
      />

      <p class="intro layer flow text-justify font-poppins text-[#1e3c2b]" :style="place(88, 625, 450)">
        Kami adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga dan memperkenalkan batik sebagai warisan budaya yang terus relevan. Bersama enam gerai batik di Kalimantan Timur, kami memadukan nilai tradisi dan sentuhan modern agar batik tetap menjadi identitas yang dibanggakan.
      </p>

      <ArtImage :src="asset('beranda/hero-gelombang.svg')" :box="[-63, 834, 1896.4, 280.19]" :size="[1889.49, 192.2]" transform="rotate(177.32deg)" class="wave" eager />

      <a href="#about" class="swipe pill layer flow grid place-items-center font-buenard font-bold text-paper" :style="place(83, 798, 279, 58)">
        Swipe Up
      </a>
    </section>

    <AboutDropdown />
    <ProgramSection />
    <TestimonialSection />
    <AboutUsDetailSection />
  </main>
</template>

<style scoped>
.welcome,
.intro {
  font-size: calc(15 * var(--u));
  line-height: 1.5;
}

.title {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.swipe {
  display: grid;
  font-size: calc(30 * var(--u));
}

/* Peta menimpa navbar seperti di desain, tetapi tidak boleh menghalangi klik. */
.map,
.children {
  pointer-events: none;
}

@media (max-width: 700px) {
  .home-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 1.5rem 4rem;
  }

  .band,
  .photo {
    left: 0;
    top: 3.75rem;
    width: 100%;
    height: 12rem;
  }

  .map {
    z-index: 0;
    left: auto;
    right: -2rem;
    top: 4.5rem;
    width: 18rem;
    height: 10.5rem;
    opacity: 0.4;
  }

  .welcome {
    margin-top: 1.5rem;
    font-size: 0.85rem;
  }

  .title {
    font-size: clamp(1.8rem, 10vw, 2.75rem);
  }

  .children {
    position: relative;
    left: auto;
    top: auto;
    width: min(20rem, 88vw);
    height: auto;
    aspect-ratio: 678 / 590;
    margin-top: 3rem;
  }

  .intro {
    margin-top: 1rem;
    font-size: 0.875rem;
    text-align: left;
  }

  .wave {
    left: -10%;
    top: auto;
    bottom: -2.6rem;
    width: 125%;
    height: 5rem;
  }

  .swipe {
    z-index: 10;
    width: 12rem;
    height: 3rem;
    margin-top: 1.5rem;
    font-size: 1.3rem;
  }
}
</style>
