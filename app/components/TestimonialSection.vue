<script setup lang="ts">
const testimonials = [
  {
    author: 'Siswa, SDN 011 Balai Kota',
    text: 'Seru banget! Aku bisa bikin batik sendiri pakai cap. Awalnya agak takut karena lilinnya panas, tapi pengajarnya bantuin pelan-pelan. Aku juga paling suka pas mewarnai, warnanya bagus-bagus banget! Sekarang aku jadi bisa, hehe!',
    authorY: 371,
    textY: 433,
    image: 'testimoni-balai-kota',
    blob: [289.5, 136.4, 232.05, 193.07],
    photo: [-0.27, -37.64, 241.4, 322.4],
    crop: [-0.14, 0, 100.28, 100],
  },
  {
    author: 'Siswa, SDN 038 Penajam',
    text: 'Aku bangga banget sama hasil batikku! Dari belajar bikin batik sampai belajar mewarnai, semuanya jadi pengalaman yang nggak bakal aku lupain, hehe!',
    authorY: 372,
    textY: 433,
    image: 'testimoni-penajam',
    blob: [289.5, 136.7, 232.05, 193.62],
    photo: [-0.5, -37.83, 255, 322],
    crop: [0.04, 2.71, 94.93, 100.13],
  },
  {
    author: 'INTIS SCHOOL BALIKPAPAN',
    text: 'Dulu cuma lihat batik di baju, sekarang aku bisa bikin sendiri! Awalnya kirain susah, tapi kakaknya ngajarin pelan-pelan, jadi nggak takut salah. Belajar membatik dan mewarnai seru banget, apalagi pas warnanya mulai muncul di kain. Aku bangga sama hasilnya, hehe! Pengen ikut lagi!',
    authorY: 353,
    textY: 400,
    image: 'testimoni-intis',
    blob: [286, 134, 240.68, 199],
    photo: [-37.19, -96.03, 315.41, 420.54],
    crop: undefined,
  },
]

const active = ref(0)
const current = computed(() => testimonials[active.value]!)
/** Arah geser slide: 1 = berikutnya, -1 = sebelumnya. */
const direction = ref<1 | -1>(1)

function move(step: 1 | -1) {
  direction.value = step
  active.value = (active.value + step + testimonials.length) % testimonials.length
}
</script>

<template>
  <section id="testimoni" class="testimonial-section artboard aspect-[1440/1024] bg-paper max-[700px]:aspect-auto" aria-labelledby="testimonial-title">
    <div class="band layer rounded-full bg-gradient-to-r from-rust from-[44.5%] to-cocoa" :style="place(0, -72, 1444, 160)" aria-hidden="true" />

    <div v-for="side in [-233, 1111]" :key="side" class="side layer decor" :style="place(side, 304, 587, 587)" aria-hidden="true" />
    <div v-for="side in [-31, 1313]" :key="`blob-${side}`" class="side-blob layer decor" :style="place(side, 383, 184, 152.81)" aria-hidden="true" />

    <h2 id="testimonial-title" class="heading layer flow whitespace-nowrap font-buenard font-bold text-[#2f1403]" :style="place(563, 136)">Testimoni</h2>

    <GoldLeaves :x="18" :y="32" />

    <div class="slide layer flow" :style="place(347, 186, 722, 699)" role="region" aria-roledescription="carousel" aria-label="Testimoni peserta">
      <ArtImage :src="asset('beranda/kartu-testimoni.svg')" :box="[29.5, 35.6, 717.74, 669.74]" class="decor" />

      <div aria-live="polite" aria-atomic="true">
        <p class="sr-only">Testimoni {{ active + 1 }} dari {{ testimonials.length }}</p>
        <Transition :name="direction === 1 ? 'slide-next' : 'slide-prev'" mode="out-in">
          <div :key="active">
            <div class="blob layer flow overflow-hidden" :style="place(current.blob[0]!, current.blob[1]!, current.blob[2], current.blob[3])">
              <ArtImage :src="asset(`beranda/${current.image}.webp`)" :box="current.photo" :crop="current.crop" class="blob-photo" />
            </div>
            <p class="author layer flow whitespace-nowrap text-center font-poppins font-bold text-paper" :style="place(37, current.authorY, 697)">
              {{ current.author }}
            </p>
            <p class="quote layer flow text-justify font-poppins text-paper" :style="place(90, current.textY, 591)">
              {{ current.text }}
            </p>
          </div>
        </Transition>
      </div>

      <button type="button" class="arrow arrow--prev layer rounded-full" :style="place(309, 606, 50, 50)" aria-label="Testimoni sebelumnya" @click="move(-1)">
        <img :src="asset('beranda/tombol-prev.svg')" alt="" class="absolute inset-0 size-full">
        <img :src="asset('beranda/panah.svg')" alt="" class="relative mx-auto h-[29%] w-[66%] -scale-x-100">
      </button>
      <button type="button" class="arrow arrow--next layer rounded-full" :style="place(422, 606, 50, 50)" aria-label="Testimoni berikutnya" @click="move(1)">
        <img :src="asset('beranda/tombol-next.svg')" alt="" class="absolute inset-0 size-full">
        <img :src="asset('beranda/panah.svg')" alt="" class="relative mx-auto h-[29%] w-[66%]">
      </button>
    </div>
  </section>
</template>

<style scoped>
.side {
  border-radius: calc(50 * var(--u));
  background: rgb(52 22 4 / 50%);
}

.side-blob {
  background: rgb(0 0 0 / 28%);
  mask: url('/design-baru/beranda/masker-samping.svg') center / 100% 100% no-repeat;
}

.heading {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.blob {
  mask: url('/design-baru/beranda/masker-foto.svg') center / 100% 100% no-repeat;
}

.author,
.quote {
  font-size: calc(22 * var(--u));
  line-height: 1.5;
}

.arrow:focus-visible {
  outline: 2px solid #faead3;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: no-preference) {
  /* Slide berganti: keluar ke satu sisi, masuk dari sisi lain. */
  .slide-next-enter-active,
  .slide-next-leave-active,
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: opacity 300ms var(--ease-out), transform 300ms var(--ease-out);
  }

  .slide-next-enter-from,
  .slide-prev-leave-to {
    opacity: 0;
    transform: translateX(24px);
  }

  .slide-next-leave-to,
  .slide-prev-enter-from {
    opacity: 0;
    transform: translateX(-24px);
  }

  .arrow {
    transition: transform 180ms var(--ease-out);
  }

  .arrow:active {
    transform: scale(0.96);
  }
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .arrow:hover {
    transform: scale(1.06);
  }

  .arrow:active {
    transform: scale(0.96);
  }
}

@media (max-width: 700px) {
  .testimonial-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem 7rem;
  }

  .band {
    top: -2rem;
    width: 100%;
    height: 3.5rem;
  }

  .heading {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    text-align: center;
  }

  .slide {
    z-index: 1;
    padding: 1.5rem 1.25rem 5rem;
    border-radius: 2rem;
    background: linear-gradient(#f0b9a4, #5d270c);
    box-shadow: 3px 4px 10px rgb(0 0 0 / 45%);
  }

  .blob {
    width: 12rem;
    height: 10rem;
    margin-inline: auto;
  }

  .blob-photo {
    left: -10%;
    top: -25%;
    width: 120%;
    height: 150%;
  }

  .author {
    margin-block: 1rem 0.75rem;
    font-size: 0.95rem;
    white-space: normal;
  }

  .quote {
    font-size: 0.875rem;
    text-align: left;
  }

  .arrow {
    top: auto;
    bottom: 1rem;
    width: 2.9rem;
    height: 2.9rem;
  }

  .arrow--prev {
    left: calc(50% - 3.5rem);
  }

  .arrow--next {
    left: calc(50% + 0.6rem);
  }
}
</style>
