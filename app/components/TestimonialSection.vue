<script setup lang="ts">
const testimonial = 'Seru banget! Aku bisa bikin batik sendiri pakai cap. Awalnya agak takut karena lilinnya panas, tapi pengajarnya bantuin pelan-pelan. Aku juga paling suka pas mewarnai, warnanya bagus-bagus banget! Sekarang aku jadi bisa, hehe!'
</script>

<template>
  <section id="partners" class="relative overflow-hidden bg-sand px-6 py-24 text-forest sm:px-12 lg:px-[8vw]" aria-labelledby="testimonial-title">
    <div aria-hidden="true" class="absolute right-10 top-10 text-8xl text-yellow-400">★</div>
    <div class="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
      <div>
        <span class="inline-block rounded-full bg-white px-6 py-3 text-xl font-extrabold text-[#d64d05]">Testimoni</span>
        <h2 id="testimonial-title" class="mt-6 max-w-xl text-5xl font-extrabold leading-tight">See what our kids have to say</h2>
        <p class="mt-6 max-w-xl text-xl leading-relaxed">{{ testimonial }}</p>
      </div>

      <div class="relative">
        <div class="absolute -top-12 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-[50%] border-b-8 border-forest" />
        <div class="rotate-3 overflow-hidden rounded-[35%_45%_35%_45%] border-[12px] border-[#d64d05] bg-white shadow-xl">
          <img
            src="/halaman%20pertama/IMG_3486%201.png"
            alt="Peserta mengikuti kegiatan membatik"
            class="aspect-[4/3] h-full w-full object-cover"
          >
        </div>
        <div aria-hidden="true" class="absolute -bottom-10 left-0 text-8xl text-yellow-400">★</div>
      </div>
    </div>
  </section>
</template>
