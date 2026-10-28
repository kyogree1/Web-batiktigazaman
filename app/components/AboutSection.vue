<template>
  <section id="about" class="relative min-h-screen overflow-hidden bg-forest px-6 py-20 text-cream sm:px-12 lg:px-[7vw]" aria-labelledby="about-title">
    <div aria-hidden="true" class="absolute -left-8 top-0 opacity-70">
      <DecorativeFlower color="#6d7440" class-name="size-40" />
    </div>

    <div class="relative z-10 grid min-h-[calc(100vh-10rem)] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div class="flex flex-col items-center gap-[-2rem] sm:flex-row sm:items-end sm:justify-center lg:justify-start">
        <article class="relative z-10 flex w-[220px] flex-col items-center rounded-[7rem] border border-cream/50 bg-[#557061] px-7 pb-8 pt-10 text-center shadow-lg sm:-mr-8 sm:-translate-y-16">
          <div class="grid size-40 place-items-center overflow-hidden rounded-full bg-black">
            <span class="font-serif text-8xl font-bold text-red-600">S</span>
          </div>
          <p class="mt-12 text-lg leading-relaxed">Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.</p>
        </article>

        <article class="relative flex w-[220px] flex-col items-center rounded-[7rem] border border-cream/50 bg-[#557061] px-7 pb-8 pt-10 text-center shadow-lg sm:translate-y-16">
          <div class="grid size-40 place-items-center overflow-hidden rounded-full bg-red-600 ring-8 ring-yellow-400">
            <span class="font-serif text-7xl font-bold text-yellow-300">BS</span>
          </div>
          <p class="mt-12 text-lg leading-relaxed">Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.</p>
        </article>
      </div>

      <div>
        <h2 id="about-title" class="text-right text-5xl font-extrabold text-[#e8b25e] sm:text-7xl">About Us</h2>
        <p class="mt-32 max-w-3xl text-xl leading-relaxed sm:text-2xl">
          Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
        </p>
      </div>
    </div>
  </section>
</template>
