<script setup lang="ts">
interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  image: string
  alt: string
  cardBg: string
  objectPosition?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alya (10 tahun)',
    role: 'Peserta Workshop Batik Anak',
    text: 'Seru banget! Aku bisa bikin batik sendiri pakai cap. Awalnya agak takut karena lilinnya panas, tapi pengajarnya bantuin pelan-pelan. Aku juga paling suka pas mewarnai, warnanya bagus-bagus banget! Sekarang aku jadi bisa, hehe!',
    image: '/halaman%20kelima/Mask%20group.png',
    alt: 'Anak-anak mengikuti kegiatan membatik cap',
    cardBg: '#1e3c2b', // Deep Forest Green (Tema Utama)
    objectPosition: 'center center',
  },
  {
    id: 2,
    name: 'Rafi & Teman-teman',
    role: 'Peserta Workshop Membatik Bersama',
    text: 'Asik banget belajar membatik bareng teman-teman sekelas! Pengajarnya sabar banget ngajarin cara mencampur warna dan mewarnai motif kain. Nggak nyangka kain yang kami warnai sendiri hasilnya bagus banget!',
    image: '/halaman%20kelima/testimoni-baru-1.jpg',
    alt: 'Anak-anak antusias mewarnai motif batik bersama di meja workshop',
    cardBg: '#b84d28', // Warm Batik Terracotta (Merah Bata Hangat)
    objectPosition: 'left center',
  },
  {
    id: 3,
    name: 'Nabila (11 tahun)',
    role: 'Peserta Kelas Canting & Pewarnaan',
    text: 'Awalnya deg-degan takut belepotan, tapi ternyata seru dan menenangkan banget pas ngisi warna di motif batiknya. Bangga banget pas selesai karyanya bisa dibawa pulang buat dipajang!',
    image: '/halaman%20kelima/testimoni-baru-2.jpg',
    alt: 'Peserta fokus mewarnai motif batik dengan kuas dan palet warna',
    cardBg: '#b8741c', // Rich Golden Sogan (Cokelat Emas Sogan)
    objectPosition: 'right center',
  },
]

const currentIndex = ref(0)
const currentTestimonial = computed(() => testimonials[currentIndex.value])

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const goToTestimonial = (index: number) => {
  currentIndex.value = index
}

let autoplayTimer: ReturnType<typeof setInterval> | null = null

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    nextTestimonial()
  }, 6000)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section
    id="testimonial"
    class="testimonial-section relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="testimonial-title"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Label Testimoni (Centered text inside badge) -->
    <span class="testimonial-label absolute left-[5.7%] top-[27.8%] z-20 flex h-[6.4%] w-[18.3%] items-center justify-center text-center rounded-full bg-[#f7f1ef] px-4 text-[clamp(1rem,2.1vw,1.9rem)] font-extrabold text-[#1e3c2b] shadow-sm select-none">
      Testimoni
    </span>

    <h2
      id="testimonial-title"
      class="testimonial-title absolute left-[5.7%] top-[35.4%] z-20 w-[42%] text-[clamp(2rem,3.35vw,3rem)] font-extrabold leading-[1.52] tracking-[-0.035em]"
    >
      See what our kids have<br class="testimonial-line-break"> to say
    </h2>

    <!-- Dynamic Testimonial Copy & Author -->
    <div class="testimonial-copy-wrapper absolute left-[5.7%] top-[48.5%] z-20 w-[41.5%]">
      <Transition name="fade" mode="out-in">
        <div :key="currentIndex" class="testimonial-content min-h-[9rem]">
          <p class="testimonial-copy text-[clamp(0.9rem,1.45vw,1.35rem)] leading-[1.55]">
            “{{ currentTestimonial.text }}”
          </p>
          <div class="testimonial-author-box mt-3 flex items-center gap-2">
            <span
              class="inline-block h-0.5 w-6 transition-colors duration-500"
              :style="{ backgroundColor: currentTestimonial.cardBg }"
            />
            <p class="font-bold text-[#1e3c2b] text-[clamp(0.85rem,1.15vw,1.05rem)]">
              {{ currentTestimonial.name }}
              <span class="font-normal text-[#1e3c2b]/70">({{ currentTestimonial.role }})</span>
            </p>
          </div>
        </div>
      </Transition>

      <!-- Dot Indicators with dynamic active color -->
      <div class="testimonial-dots mt-4 flex items-center gap-2" aria-label="Navigasi slide testimoni">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          type="button"
          :aria-label="`Pilih testimoni ${index + 1}`"
          :aria-current="currentIndex === index ? 'true' : 'false'"
          class="h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2"
          :class="currentIndex === index ? 'w-8' : 'w-2.5 opacity-35 hover:opacity-75'"
          :style="{
            backgroundColor: currentIndex === index ? currentTestimonial.cardBg : '#1e3c2b',
            outlineColor: currentTestimonial.cardBg,
          }"
          @click="goToTestimonial(index)"
        />
      </div>
    </div>

    <!-- Visual / Photo Wrapper -->
    <div class="testimonial-photo-wrapper">
      <img
        src="/halaman%20kelima/Line%209.png"
        alt=""
        aria-hidden="true"
        class="testimonial-line-9 absolute left-[55.8%] top-[28.7%] z-10 w-[26.3%]"
      >
      <img
        src="/halaman%20kelima/Line%2010.png"
        alt=""
        aria-hidden="true"
        class="testimonial-line-10 absolute left-[58.4%] top-[27.7%] z-10 w-[19.2%]"
      >

      <!-- Dynamic Background Shape behind Image with matching organic blob shape & per-slide color -->
      <div
        class="testimonial-bg-blob testimonial-blob-mask absolute left-[50%] top-[35.5%] z-10 w-[41.5%] aspect-[597/499] transition-colors duration-500"
        :style="{ backgroundColor: currentTestimonial.cardBg }"
        aria-hidden="true"
      />

      <!-- Dynamic Testimonial Photo with matching organic blob shape mask -->
      <div class="testimonial-photo-frame testimonial-blob-mask absolute left-[48.8%] top-[34.8%] z-20 w-[40.9%] aspect-[597/499]">
        <Transition name="photo-fade" mode="out-in">
          <img
            :key="currentIndex"
            :src="currentTestimonial.image"
            :alt="currentTestimonial.alt"
            :style="{ objectPosition: currentTestimonial.objectPosition || 'center' }"
            class="testimonial-photo block size-full object-cover transition-transform duration-500 hover:scale-105"
          >
        </Transition>
      </div>

      <img
        src="/halaman%20kelima/kuning%20emas_20260814121731%201.png"
        alt=""
        aria-hidden="true"
        class="testimonial-star-top absolute left-[84.2%] top-[13.2%] z-20 w-[10.5%] pointer-events-none"
      >
      <img
        src="/halaman%20kelima/kuning%20emas_20260814121731%201.png"
        alt=""
        aria-hidden="true"
        class="testimonial-star-bottom absolute left-[47.5%] top-[67.7%] z-30 w-[10.5%] pointer-events-none"
      >
    </div>

    <!-- Navigation Buttons Wrapper -->
    <div class="testimonial-buttons-wrapper">
      <button
        type="button"
        aria-label="Testimoni sebelumnya"
        class="testimonial-nav-prev absolute left-[45.1%] top-[56.3%] z-30 grid size-[3.6%] min-h-10 min-w-10 place-items-center rounded-full bg-[#f7f1ef] text-[clamp(1.25rem,2.2vw,2rem)] leading-none text-[#1e3c2b] shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1e3c2b]"
        @click="prevTestimonial"
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        aria-label="Testimoni berikutnya"
        class="testimonial-nav-next absolute left-[88%] top-[58.4%] z-30 grid size-[3.6%] min-h-10 min-w-10 place-items-center rounded-full bg-[#f7f1ef] text-[clamp(1.25rem,2.2vw,2rem)] leading-none text-[#1e3c2b] shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1e3c2b]"
        @click="nextTestimonial"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Desktop artboard */
.testimonial-photo-wrapper,
.testimonial-buttons-wrapper {
  display: contents;
}

/* Organic Blob Mask for photo and background shape */
.testimonial-blob-mask {
  -webkit-mask-image: url('/halaman%20kelima/Rectangle%2085.png');
  mask-image: url('/halaman%20kelima/Rectangle%2085.png');
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}

.testimonial-bg-blob {
  filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.2));
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.photo-fade-enter-active,
.photo-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.photo-fade-enter-from {
  opacity: 0;
  transform: scale(0.96);
}

.photo-fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

/* Mobile responsive */
@media (max-width: 700px) {
  .testimonial-line-break {
    display: none;
  }

  .testimonial-section {
    aspect-ratio: auto;
    min-height: auto;
    padding: 5rem 1.25rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .testimonial-label {
    position: relative;
    inset: auto;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    width: auto;
    height: auto;
    padding: 0.5rem 1.75rem;
    font-size: 1.15rem;
    margin-bottom: 1.25rem;
  }

  .testimonial-title {
    position: relative;
    inset: auto;
    width: 100%;
    max-width: 22rem;
    font-size: clamp(1.85rem, 8vw, 2.5rem);
    line-height: 1.25;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .testimonial-copy-wrapper {
    position: relative;
    inset: auto;
    width: 100%;
    max-width: 24rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .testimonial-copy {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: center;
  }

  .testimonial-author-box {
    justify-content: center;
  }

  .testimonial-dots {
    justify-content: center;
  }

  .testimonial-photo-wrapper {
    display: block;
    position: relative;
    width: min(19rem, 84vw);
    aspect-ratio: 597 / 499;
    margin: 0 auto 1.5rem;
  }

  .testimonial-line-9 {
    position: absolute;
    left: 20%;
    top: -10%;
    width: 60%;
  }

  .testimonial-line-10 {
    position: absolute;
    left: 30%;
    top: -8%;
    width: 45%;
  }

  .testimonial-bg-blob {
    position: absolute;
    inset: 3% -2% -3% 2%;
    width: 96%;
    height: 96%;
    filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.18));
  }

  .testimonial-photo-frame {
    position: absolute;
    inset: 0;
    width: 96%;
    height: 96%;
  }

  .testimonial-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .testimonial-star-top {
    position: absolute;
    right: -10%;
    top: -10%;
    left: auto;
    width: 3rem;
  }

  .testimonial-star-bottom {
    position: absolute;
    left: -5%;
    bottom: -5%;
    top: auto;
    width: 3rem;
  }

  .testimonial-buttons-wrapper {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
  }

  .testimonial-nav-prev,
  .testimonial-nav-next {
    position: relative;
    inset: auto;
    width: 2.75rem;
    height: 2.75rem;
    font-size: 1.25rem;
  }
}
</style>
