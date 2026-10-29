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
      class="absolute left-[5.7%] top-[35.4%] z-20 w-[42%] text-[clamp(2rem,3.35vw,3rem)] font-extrabold leading-[1.52] tracking-[-0.035em]"
    >
      See what our kids have<br class="testimonial-line-break"> to say
    </h2>

    <p class="absolute left-[5.7%] top-[49.2%] z-20 w-[41.5%] text-[clamp(0.9rem,1.55vw,1.4rem)] leading-[1.48]">
      Seru banget! Aku bisa bikin batik sendiri pakai<br class="testimonial-line-break">
      cap. Awalnya agak takut karena lilinnya panas,<br class="testimonial-line-break">
      tapi pengajarnya bantuin pelan-pelan. Aku juga<br class="testimonial-line-break">
      paling suka pas mewarnai, warnanya bagus-<br class="testimonial-line-break">
      bagus banget! Sekarang aku jadi bisa, hehe!
    </p>

    <img
      src="/halaman%20kelima/Line%209.png"
      alt=""
      aria-hidden="true"
      class="absolute left-[55.8%] top-[28.7%] z-10 w-[26.3%]"
    >
    <img
      src="/halaman%20kelima/Line%2010.png"
      alt=""
      aria-hidden="true"
      class="absolute left-[58.4%] top-[27.7%] z-10 w-[19.2%]"
    >

    <img
      src="/halaman%20kelima/Rectangle%2085.png"
      alt=""
      aria-hidden="true"
      class="absolute left-[50%] top-[35.5%] z-10 w-[41.5%]"
    >
    <img
      src="/halaman%20kelima/Mask%20group.png"
      alt="Anak-anak mengikuti kegiatan membatik"
      class="absolute left-[48.8%] top-[34.8%] z-20 w-[40.9%]"
    >

    <img
      src="/halaman%20kelima/kuning%20emas_20260814121731%201.png"
      alt=""
      aria-hidden="true"
      class="absolute left-[84.2%] top-[13.2%] z-20 w-[10.5%]"
    >
    <img
      src="/halaman%20kelima/kuning%20emas_20260814121731%201.png"
      alt=""
      aria-hidden="true"
      class="absolute left-[47.5%] top-[67.7%] z-30 w-[10.5%]"
    >

    <button
      type="button"
      disabled
      aria-label="Testimoni sebelumnya"
      class="absolute left-[45.1%] top-[56.3%] z-30 grid size-[3.6%] min-h-10 min-w-10 place-items-center rounded-full bg-[#f7f1ef] text-[clamp(1.25rem,2.2vw,2rem)] leading-none text-[#1e3c2b] disabled:cursor-default"
    >
      <span aria-hidden="true">←</span>
    </button>
    <button
      type="button"
      disabled
      aria-label="Testimoni berikutnya"
      class="absolute left-[88%] top-[58.4%] z-30 grid size-[3.6%] min-h-10 min-w-10 place-items-center rounded-full bg-[#f7f1ef] text-[clamp(1.25rem,2.2vw,2rem)] leading-none text-[#1e3c2b] disabled:cursor-default"
    >
      <span aria-hidden="true">→</span>
    </button>
  </section>
</template>

<style scoped>
@media (max-width: 700px) {
  .testimonial-line-break {
    display: none;
  }
}

@media (max-width: 700px) {
  .testimonial-section {
    aspect-ratio: auto;
    min-height: 62rem;
    padding: 5rem 1rem 4rem;
  }

  .testimonial-label,
  #testimonial-title,
  .testimonial-section > p {
    position: relative;
    inset: auto;
    display: block;
    width: min(22rem, 90vw);
    margin-inline: auto;
  }

  .testimonial-label {
    height: auto;
    padding: 0.65rem 1.5rem;
    text-align: center;
  }

  #testimonial-title {
    margin-top: 1.5rem;
    font-size: clamp(2rem, 10vw, 3rem);
    line-height: 1.1;
    text-align: center;
  }

  .testimonial-section > p {
    margin-top: 1.5rem;
    font-size: 1rem;
    text-align: center;
  }

  .testimonial-section > img,
  .testimonial-section > button {
    position: relative;
    inset: auto;
  }

  .testimonial-section > img:nth-of-type(1),
  .testimonial-section > img:nth-of-type(2),
  .testimonial-section > img:nth-of-type(3),
  .testimonial-section > img:nth-of-type(4),
  .testimonial-section > img:nth-of-type(5) {
    display: block;
    width: min(22rem, 90vw);
    margin: 2rem auto 0;
  }

  .testimonial-section > img:nth-of-type(3) {
    margin-top: -1rem;
  }

  .testimonial-section > img:nth-of-type(4) {
    margin-top: -21rem;
  }

  .testimonial-section > img:nth-of-type(5) {
    width: 6rem;
    margin: 1rem auto 0;
  }

  .testimonial-section > button {
    display: none;
  }
}
</style>
