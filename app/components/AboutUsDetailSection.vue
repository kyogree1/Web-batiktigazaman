<script setup lang="ts">
const description = 'Melestarikan budaya Paser melalui seni batik yang autentik. Setiap motif mengandung cerita dan makna budaya lokal yang mendalam.'

const partners = [
  {
    name: 'Batik Shaho',
    to: '/mitra/batik-shaho',
    card: 295,
    title: [731, 376, 328],
    copy: [735, 445],
    button: [731, 543],
    logo: 'logo-shaho-kartu',
    logoBox: [393, 334, 289, 289],
    round: true,
  },
  {
    name: 'Bulau Sayang',
    to: '/mitra/bulau-sayang',
    card: 743,
    title: [402, 828, 328],
    copy: [300, 899],
    button: [452, 997],
    logo: 'logo-bulau-sayang',
    logoBox: [761, 719, 347, 424],
    round: false,
  },
]
</script>

<template>
  <section id="mitra" class="partners artboard aspect-[1440/1280] bg-paper max-[700px]:aspect-auto" aria-labelledby="about-us-title">
    <div class="layer decor bg-gradient-to-b from-cocoa to-rust" :style="place(0, 97, 1440, 1136)" aria-hidden="true" />

    <h2 id="about-us-title" class="heading layer flow whitespace-nowrap font-buenard font-bold text-paper" :style="place(592, 149)">Mitra Kami</h2>

    <article v-for="partner in partners" :key="partner.name" class="partner">
      <div class="layer decor rounded-full bg-white/20" :style="place(156, partner.card, 1149, 368)" aria-hidden="true" />
      <div
        class="partner-logo layer flow"
        :class="partner.round ? 'partner-logo--round overflow-hidden rounded-full bg-black' : ''"
        :style="place(partner.logoBox[0]!, partner.logoBox[1]!, partner.logoBox[2], partner.logoBox[3])"
      >
        <img :src="asset(`umum/${partner.logo}.webp`)" :alt="`Logo ${partner.name}`" loading="lazy" class="size-full object-cover">
      </div>
      <h3
        class="partner-name layer flow whitespace-nowrap font-buenard font-bold text-paper"
        :class="{ 'text-right': !partner.round }"
        :style="place(partner.title[0]!, partner.title[1]!, partner.title[2])"
      >
        {{ partner.name }}
      </h3>
      <p class="partner-copy layer flow text-justify font-poppins text-[#edd4b8]" :style="place(partner.copy[0]!, partner.copy[1]!, 430)">
        {{ description }}
      </p>
      <NuxtLink :to="partner.to" class="partner-link pill layer flow text-center font-buenard font-bold text-white" :style="place(partner.button[0]!, partner.button[1]!, 279, 58)" :aria-label="`Lihat profil ${partner.name}`">
        Open More
      </NuxtLink>
    </article>

    <ArtImage :src="asset('umum/ornamen-horizontal.webp')" :box="[0, 118, 51.21, 1093.57]" :size="[1093.3, 44.04]" transform="rotate(90.38deg) scaleY(-1)" class="decor" />
    <ArtImage :src="asset('umum/ornamen-horizontal.webp')" :box="[1389, 118, 51.21, 1093.57]" :size="[1093.3, 44.04]" transform="rotate(89.62deg)" class="decor" />
  </section>
</template>

<style scoped>
.heading {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.partner {
  display: contents;
}

.partner-logo--round {
  box-shadow: 0 2px 3px rgb(255 255 255 / 45%);
}

.partner-name {
  font-size: calc(48 * var(--u));
  line-height: 1.23;
}

.partner-copy {
  font-size: calc(18 * var(--u));
  line-height: 1.5;
}

.partner-link {
  font-size: calc(40 * var(--u));
  line-height: calc(54 * var(--u));
}

@media (max-width: 700px) {
  .partners {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 3rem 1rem;
    background: linear-gradient(#261003, #8c3b0b);
  }

  .heading {
    font-size: 2.5rem;
    text-align: center;
  }

  .partner {
    display: flex;
    width: 100%;
    max-width: 30rem;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 2rem 1.5rem;
    border-radius: 3rem;
    background: rgb(255 255 255 / 20%);
  }

  .partner-logo {
    width: 8.5rem;
    height: 10.4rem;
  }

  .partner-logo--round {
    height: 8.5rem;
  }

  .partner-name {
    font-size: 2rem;
    text-align: center;
  }

  .partner-copy {
    font-size: 0.875rem;
    text-align: center;
  }

  .partner-link {
    width: 12rem;
    height: 3rem;
    font-size: 1.5rem;
    line-height: 2.85rem;
  }
}
</style>
