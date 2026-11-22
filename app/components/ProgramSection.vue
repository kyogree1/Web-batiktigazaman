<script setup lang="ts">
const programs = [
  {
    title: 'Cap Batik',
    text: 'Peserta dapat belajar membuat motif batik menggunakan teknik cap dengan mudah dan menyenangkan.',
    blob: 'blob-cap',
    blobBox: [125, 281, 353, 328],
    art: 'cap-batik',
    artBox: [125, 327, 399, 282],
    titleBox: [206, 675, 177],
    textBox: [146, 731, 322],
  },
  {
    title: 'Mencanting',
    text: 'Belajar teknik dasar mencanting dari nol, tanpa perlu pengalaman.',
    blob: 'blob-canting',
    blobBox: [515, 281, 353, 328],
    art: 'mencanting',
    artBox: [571, 195, 242, 414],
    titleBox: [512, 675, 380],
    textBox: [548, 731, 307],
  },
  {
    title: 'Mewarnai',
    text: 'Peserta dapat berkreasi mewarnai kain batik sesuai dengan warna dan imajinasi masing-masing.',
    blob: 'blob-warna',
    blobBox: [905, 252, 353, 328],
    art: 'mewarnai',
    artBox: [895, 281, 373, 373],
    titleBox: [993, 678, 177],
    textBox: [919, 731, 339],
  },
]
</script>

<template>
  <section id="program" class="program-section artboard aspect-[1440/1024] max-[700px]:aspect-auto" aria-labelledby="program-title">
    <ArtImage :src="asset('umum/ornamen-horizontal.webp')" :box="[0, 0, 1440, 58]" transform="scaleY(-1)" class="border-top" />
    <h2 id="program-title" class="heading layer flow whitespace-nowrap text-right font-buenard font-bold text-paper" :style="place(252, 129, 821)">
      What You Learn With Us!
    </h2>

    <article v-for="program in programs" :key="program.title" class="program">
      <div class="program-visual">
        <ArtImage :src="asset(`beranda/${program.blob}.svg`)" :box="program.blobBox" class="program-blob" />
        <ArtImage :src="asset(`beranda/${program.art}.webp`)" :box="program.artBox" class="program-art" :class="`program-art--${program.art}`" />
      </div>
      <h3 class="program-title layer flow whitespace-nowrap text-center font-poppins font-bold uppercase text-paper" :style="place(program.titleBox[0]!, program.titleBox[1]!, program.titleBox[2])">
        {{ program.title }}
      </h3>
      <p class="program-copy layer flow text-center font-poppins text-paper" :style="place(program.textBox[0]!, program.textBox[1]!, program.textBox[2])">
        {{ program.text }}
      </p>
    </article>

    <GoldLeaves :y="0" />
  </section>
</template>

<style scoped>
.program-section {
  background: linear-gradient(-88.48deg, #261003 1.57%, #8c3b0b 150.84%);
}

.heading {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.program,
.program-visual {
  display: contents;
}

.program-title {
  font-size: calc(25 * var(--u));
  line-height: 1.5;
}

.program-copy {
  font-size: calc(18 * var(--u));
  line-height: 1.5;
}

@media (max-width: 700px) {
  .program-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 3.5rem 1.5rem 8rem;
  }

  .border-top {
    top: 0;
    left: 0;
    width: 200%;
    height: 1.75rem;
  }

  .heading {
    font-size: 2.4rem;
    white-space: normal;
    text-align: center;
  }

  .program {
    display: block;
    width: 100%;
    max-width: 20rem;
  }

  .program-visual {
    position: relative;
    display: block;
    width: 13rem;
    height: 13rem;
    margin: 0 auto 1rem;
  }

  .program-blob,
  .program-art {
    left: 0;
    top: 0.5rem;
    width: 100%;
    height: 12rem;
  }

  .program-art--cap-batik {
    top: 2rem;
    width: 14.3rem;
    height: 10.1rem;
  }

  .program-art--mencanting {
    left: 2.2rem;
    top: -2.2rem;
    width: 8.6rem;
    height: 14.7rem;
  }

  .program-art--mewarnai {
    height: 13rem;
  }

  .program-title {
    font-size: 1.2rem;
  }

  .program-copy {
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
