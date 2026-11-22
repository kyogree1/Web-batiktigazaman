<script setup lang="ts">
const props = defineProps<{
  variant: 'shaho' | 'bulau-sayang'
  whatsapp: string
}>()

const isShaho = props.variant === 'shaho'
const height = isShaho ? 939 : 1024
// Di Figma, 109 px teratas frame Bulau Sayang tertutup section pricelist.
const visible = isShaho ? height : height - 109
const top = isShaho ? 0 : -109
</script>

<template>
  <section id="reservation" class="reservation artboard bg-paper" aria-labelledby="reserve-heading">
    <div class="content layer" :style="place(0, top, 1440, height)">
      <ArtImage
        :src="asset('reservasi/kain-batik.webp')"
        :box="isShaho ? [-6.2, -26.99, 1821.94, 1292.93] : [-365.13, -269, 1823.36, 1303.29]"
        :size="isShaho ? [1283.15, 1815.04] : [1274.95, 1803.44]"
        :transform="isShaho ? 'rotate(90.31deg) scaleY(-1)' : 'rotate(-89.09deg) scaleY(-1)'"
        class="fabric opacity-20"
      />
      <ArtImage :src="asset('reservasi/monstera.webp')" :box="[1108, 696, 614, 598]" class="decor" />
      <ArtImage
        :src="asset('reservasi/kalender.webp')"
        :box="isShaho ? [115.59, 233.13, 704.22, 586.06] : [70, 182, 745, 620]"
        :crop="[-30.87, -60.65, 162.15, 194.84]"
        alt="Kalender reservasi tanggal 2 Oktober"
        class="calendar flow"
      />
      <h2 id="reserve-heading" class="title layer flow text-center font-buenard font-bold text-[#6c361b]" :style="place(807, 277, 548)">
        {{ isShaho ? 'Ayok' : 'Ayo' }} Reservasi<br>Segera !
      </h2>
      <a :href="whatsapp" target="_blank" rel="noopener noreferrer" class="reserve pill layer flow text-center font-buenard text-white" :style="place(827, 492, 507, 199)">
        {{ isShaho ? 'Reservasi!' : 'Reservasi' }}
      </a>
      <a :href="whatsapp" target="_blank" rel="noopener noreferrer" class="schedule pill layer flow text-center font-buenard text-white" :style="place(948, 744, 279, 58)">
        Cek Jadwal
      </a>
    </div>
  </section>
</template>

<style scoped>
.reservation {
  aspect-ratio: 1440 / v-bind(visible);
}

.title {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.reserve {
  border-radius: calc(100 * var(--u));
  font-size: calc(64 * var(--u));
  line-height: calc(197 * var(--u));
}

.schedule {
  font-size: calc(32 * var(--u));
  line-height: calc(56 * var(--u));
}

@media (max-width: 700px) {
  .reservation {
    aspect-ratio: auto;
  }

  .content {
    position: relative;
    top: auto;
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    padding: 2rem 1.25rem 3rem;
  }

  .fabric {
    left: -70%;
    top: -30%;
    width: 240%;
    height: 160%;
  }

  .calendar {
    width: 16rem;
    height: 13.3rem;
  }

  .title {
    font-size: 2.2rem;
  }

  .reserve {
    width: 16rem;
    height: 5rem;
    font-size: 2rem;
    line-height: 4.8rem;
  }

  .schedule {
    width: 10rem;
    height: 2.8rem;
    font-size: 1.15rem;
    line-height: 2.7rem;
  }
}
</style>
