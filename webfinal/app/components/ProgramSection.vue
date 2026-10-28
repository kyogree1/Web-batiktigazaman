<script setup lang="ts">
const programs = [
  {
    title: 'Cap Batik',
    text: 'Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.',
    ellipse: '/halaman%20keempat/Ellipse%2026.png',
    artwork: '/halaman%20keempat/Karya_Seni_Tanpa_Judul%203.png',
    artworkClass: 'program-art--cap',
  },
  {
    title: 'Karya Bisa Dibawa Pulang',
    text: 'Belajar teknik dasar mencanting dari nol, tanpa perlu pengalaman.',
    ellipse: '/halaman%20keempat/Ellipse%2028.png',
    artwork: '/halaman%20keempat/mencanting_20260814121541%201.png',
    artworkClass: 'program-art--canting',
  },
  {
    title: 'Mewarnai',
    text: 'Peserta dapat berkreasi mewarnai kain batik sesuai dengan warna dan imajinasi masing-masing.',
    ellipse: '/halaman%20keempat/Ellipse%2027.png',
    artwork: '/halaman%20keempat/pallete%20campur%20warna_20260814121823%201.png',
    artworkClass: 'program-art--color',
  },
]
</script>

<template>
  <section
    id="program"
    class="program-section relative aspect-[1440/1024] w-full overflow-hidden bg-[#edd4b8] text-[#1e3c2b]"
    aria-labelledby="program-title"
  >
    <img
      src="/halaman%20keempat/Rectangle%2069%20-%20sambungan.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-x-0 top-0 z-0 block h-auto w-full"
    >

    <img
      src="/halaman%20keempat/Vector(2).png"
      alt=""
      aria-hidden="true"
      class="absolute left-[-10%] top-[4.7%] z-10 w-[26%] max-w-none"
    >

    <h2
      id="program-title"
      class="absolute left-[15%] top-[22.5%] z-10 w-[67%] text-center text-[clamp(2rem,4.9vw,4.4rem)] font-extrabold leading-none tracking-[-0.035em]"
    >
      What You Learn With Us!
    </h2>

    <div class="program-grid absolute left-[10.1%] top-[35.8%] z-10 w-[79.8%]">
      <article v-for="program in programs" :key="program.title" class="program-item text-center">
        <div class="program-visual relative aspect-[353/328] w-full">
          <img :src="program.ellipse" alt="" aria-hidden="true" class="absolute inset-0 block size-full">
          <img
            :src="program.artwork"
            alt=""
            aria-hidden="true"
            class="program-art absolute max-w-none"
            :class="program.artworkClass"
          >
        </div>

        <h3 class="program-item-title mt-[clamp(1rem,3.8vw,3.5rem)] text-[clamp(0.9rem,1.9vw,1.7rem)] font-extrabold uppercase leading-[1.15]">
          {{ program.title }}
        </h3>
        <p class="program-item-copy mx-auto mt-[clamp(0.75rem,1.8vw,1.6rem)] max-w-[92%] text-[clamp(0.75rem,1.3vw,1.15rem)] leading-[1.42]">
          {{ program.text }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.program-grid {
  display: grid;
  grid-template-columns: repeat(3, 30.7%);
  justify-content: space-between;
}

.program-art--cap {
  left: 0;
  top: 14.6%;
  width: 113%;
}

.program-art--canting {
  left: 19.3%;
  top: -23.2%;
  width: 68.6%;
}

.program-art--color {
  left: 0;
  top: 1.8%;
  width: 105.7%;
}

@media (max-width: 700px) {
  .program-grid {
    grid-template-columns: repeat(3, 30.7%);
  }

  .program-item-title {
    font-size: clamp(0.55rem, 2.2vw, 0.95rem);
  }

  .program-item-copy {
    font-size: clamp(0.45rem, 1.8vw, 0.72rem);
  }
}
</style>
