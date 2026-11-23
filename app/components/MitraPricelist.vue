<script setup lang="ts">
export interface PriceCard {
  type: string
  size?: string
  price?: string
  service?: string
  details?: string[]
  /** Baris terakhir yang ditebalkan */
  duration?: string
}

const props = defineProps<{ cards: PriceCard[] }>()

// 3 kartu = desain Batik Shaho, 6 kartu = desain Bulau Sayang.
const large = computed(() => props.cards.length <= 3)
const height = computed(() => (large.value ? 1155 : 1643))
const tones = ['linear-gradient(#4f2107, #b54c10)', 'linear-gradient(#1e3c2b, #51a274)', 'linear-gradient(#887a49, #221f12)']

const items = computed(() => props.cards.map((card, index) => ({
  ...card,
  x: 90 + (index % 3) * 434,
  y: large.value ? 378 : 372.2 + Math.floor(index / 3) * 542.64,
  background: tones[index % 3],
})))
</script>

<template>
  <section id="pricelist" class="pricelist artboard bg-paper" :class="large ? 'pricelist--large' : 'pricelist--detailed'" aria-labelledby="pricelist-heading">
    <ArtImage v-for="x in [0, 1290]" :key="x" :src="asset('umum/ornamen-vertikal.webp')" :box="[x, -4, 150, large ? 1028 : 1618]" :crop="large ? [0, -21.98, 100, 142.02] : [0, -13.9, 100, 120]" transform="scaleX(-1)" class="decor" />

    <div class="heading layer flow rounded-full bg-gradient-to-r from-[#cb4c08] to-[#652604]" :style="place(309, large ? 113 : 111.2, 822, large ? 111 : 109.3)">
      <h2 id="pricelist-heading" class="heading-text layer flow whitespace-nowrap text-center font-buenard font-bold text-white" :style="place(57, 9, 704)">Pricelist Booking</h2>
    </div>

    <article
      v-for="(card, index) in items"
      :key="index"
      class="price layer flow text-center font-poppins text-white"
      :style="{ ...place(card.x, card.y, 391, large ? 391 : 510.14), background: card.background }"
    >
      <ArtImage v-if="card.service" :src="asset('reservasi/ikon-layanan.svg')" :box="[178, 46.3, 35, 60.32]" class="price-icon price-icon--service flow" />
      <ArtImage v-else-if="large" :src="asset('reservasi/penggaris.svg')" :box="[170, 63, 58, 65.16]" class="price-icon flow" />
      <ArtImage v-else :src="asset('reservasi/penggaris-bs.svg')" :box="[167, 46.3, 58, 57.15]" class="price-icon flow" />

      <p class="price-type layer flow" :style="place(0, large ? 127 : 124.1, 391)">{{ card.type }}</p>
      <p v-if="card.service" class="price-service layer flow font-bold" :style="place(64, 180, 262)">{{ card.service }}</p>
      <template v-else>
        <p class="price-size layer flow font-bold" :style="place(0, large ? 165 : 162.5, 391)">{{ card.size }}</p>
        <p class="price-value layer flow whitespace-nowrap font-bold" :style="place(0, large ? 227 : 198.9, 391)">{{ card.price }}</p>
        <p class="price-unit layer flow" :style="place(0, large ? 294 : 259, 391)">per siswa</p>
      </template>

      <template v-if="card.details">
        <span class="layer decor border-t border-white" :style="place(70, 327, 250, 1)" aria-hidden="true" />
        <p class="price-details layer flow" :style="place(card.service ? 72 : 10, index < 3 ? 347 : card.service ? 335 : 347, card.service ? 247 : 371)">
          <span v-for="line in card.details" :key="line" class="block">{{ line }}</span>
          <strong v-if="card.duration" class="block">{{ card.duration }}</strong>
        </p>
      </template>
    </article>

    <ArtImage :src="asset('reservasi/daun-hijau.webp')" :box="large ? [-72, 705, 355.26, 431.94] : [-134.42, 1235.37, 414.91, 473.69]" :size="[324.2, 407.7]" :transform="large ? 'rotate(4.51deg)' : 'rotate(14.89deg)'" class="decor" />
    <ArtImage :src="asset('reservasi/daun-hijau.webp')" :box="large ? [1126, 660, 518.99, 495.65] : [1114.95, 1233.12, 515.04, 491.88]" :size="[324.2, 407.7]" transform="rotate(-56.4deg)" class="decor" />
  </section>
</template>

<style scoped>
.pricelist {
  aspect-ratio: 1440 / v-bind(height);
}

.heading-text {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.price {
  border-radius: calc(49 * var(--u));
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%), inset 0 4px 4px rgb(0 0 0 / 25%);
  font-size: calc(22 * var(--u));
  line-height: 1.5;
}

.price-size {
  font-size: calc(24 * var(--u));
}

.price-value {
  font-size: calc(38 * var(--u));
}

.pricelist--large .price-size {
  font-size: calc(36 * var(--u));
}

.pricelist--large .price-value {
  font-size: calc(50 * var(--u));
}

@media (max-width: 700px) {
  .pricelist {
    display: flex;
    aspect-ratio: auto;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 3rem 1.25rem;
  }

  .heading {
    padding-block: 0.6rem;
  }

  .heading-text {
    font-size: 1.9rem;
  }

  .price {
    max-width: 22rem;
    padding: 1.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.9rem;
  }

  .price-icon {
    width: 2.5rem;
    height: 2.7rem;
    margin: 0 auto 0.5rem;
  }

  .price-icon--service {
    width: 1.6rem;
  }

  .price-size,
  .pricelist--large .price-size {
    font-size: 1.2rem;
  }

  .price-value,
  .pricelist--large .price-value {
    font-size: 1.9rem;
  }

  .price-details {
    margin-top: 0.8rem;
    padding-top: 0.8rem;
    border-top: 1px solid #fff;
  }
}
</style>
