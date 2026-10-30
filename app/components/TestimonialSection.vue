<script setup lang="ts">
const testimonial = 'Seru banget! Aku bisa bikin batik sendiri pakai cap. Awalnya agak takut karena lilinnya panas, tapi pengajarnya bantuin pelan-pelan. Aku juga paling suka pas mewarnai, warnanya bagus-bagus banget! Sekarang aku jadi bisa, hehe!'
</script>

<template>
  <section
    id="testimonial"
    class="testimonial-section relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="testimonial-title"
  >
    <span class="testimonial-label absolute left-[5.7%] top-[27.8%] z-20 flex h-[6.4%] w-[18.3%] items-center rounded-full bg-[#f7f1ef] px-[1.5%] text-[clamp(1rem,2.1vw,1.9rem)] font-extrabold text-[#cb4c08]">
      Testimoni
    </span>

    <h2
      id="testimonial-title"
      class="testimonial-title absolute left-[5.7%] top-[35.4%] z-20 w-[42%] text-[clamp(2rem,3.35vw,3rem)] font-extrabold leading-[1.52] tracking-[-0.035em]"
    >
      See what our kids have<br class="testimonial-line-break"> to say
    </h2>

    <p class="testimonial-copy absolute left-[5.7%] top-[49.2%] z-20 w-[41.5%] text-[clamp(0.9rem,1.55vw,1.4rem)] leading-[1.48]">
      Seru banget! Aku bisa bikin batik sendiri pakai<br class="testimonial-line-break">
      cap. Awalnya agak takut karena lilinnya panas,<br class="testimonial-line-break">
      tapi pengajarnya bantuin pelan-pelan. Aku juga<br class="testimonial-line-break">
      paling suka pas mewarnai, warnanya bagus-<br class="testimonial-line-break">
      bagus banget! Sekarang aku jadi bisa, hehe!
    </p>

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

      <img
        src="/halaman%20kelima/Rectangle%2085.png"
        alt=""
        aria-hidden="true"
        class="testimonial-bg-blob absolute left-[50%] top-[35.5%] z-10 w-[41.5%]"
      >
      <img
        src="/halaman%20kelima/Mask%20group.png"
        alt="Anak-anak mengikuti kegiatan membatik"
        class="testimonial-photo absolute left-[48.8%] top-[34.8%] z-20 w-[40.9%]"
      >

      <img
        src="/halaman%20kelima/kuning%20emas_20260814121731%201.png"
        alt=""
        aria-hidden="true"
        class="testimonial-star-top absolute left-[84.2%] top-[13.2%] z-20 w-[10.5%]"
      >
      <img
        src="/halaman%20kelima/kuning%20emas_20260814121731%201.png"
        alt=""
        aria-hidden="true"
        class="testimonial-star-bottom absolute left-[47.5%] top-[67.7%] z-30 w-[10.5%]"
      >
    </div>

    <!-- Navigation Buttons Wrapper -->
    <div class="testimonial-buttons-wrapper">
      <button
        type="button"
        disabled
        aria-label="Testimoni sebelumnya"
        class="testimonial-nav-prev absolute left-[45.1%] top-[56.3%] z-30 grid size-[3.6%] min-h-10 min-w-10 place-items-center rounded-full bg-[#f7f1ef] text-[clamp(1.25rem,2.2vw,2rem)] leading-none text-[#1e3c2b] shadow-sm disabled:cursor-default"
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        disabled
        aria-label="Testimoni berikutnya"
        class="testimonial-nav-next absolute left-[88%] top-[58.4%] z-30 grid size-[3.6%] min-h-10 min-w-10 place-items-center rounded-full bg-[#f7f1ef] text-[clamp(1.25rem,2.2vw,2rem)] leading-none text-[#1e3c2b] shadow-sm disabled:cursor-default"
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

  .testimonial-copy {
    position: relative;
    inset: auto;
    width: 100%;
    max-width: 22rem;
    font-size: 0.92rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 2rem;
  }

  .testimonial-photo-wrapper {
    display: block;
    position: relative;
    width: min(18rem, 82vw);
    aspect-ratio: 1;
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
    inset: 4%;
    width: 92%;
    height: 92%;
    object-fit: contain;
  }

  .testimonial-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
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
