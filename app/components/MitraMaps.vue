<script setup lang="ts">
const props = defineProps<{
  variant: 'shaho' | 'bulau-sayang'
  name: string
  back: string
  address: string
  website: string
  whatsapp: { href: string, label: string }
  instagram: { href: string, label: string }
}>()

const isShaho = props.variant === 'shaho'

const contacts = [
  { icon: 'ikon-web', href: props.website, label: props.website, x: isShaho ? 410 : 413 },
  { icon: 'ikon-whatsapp', ...props.whatsapp, x: isShaho ? 669 : 701 },
  { icon: 'ikon-instagram', ...props.instagram, x: isShaho ? 855 : 891 },
]
</script>

<template>
  <main class="relative min-h-[100svh] w-full bg-olive" aria-labelledby="maps-title">
    <MitraBackLink :to="back" :aria-label="`Kembali ke ${name}`" />

    <div class="maps artboard aspect-[1440/1024] bg-olive max-[700px]:aspect-auto">
      <ArtImage :src="asset('reservasi/kain-batik.webp')" :box="[-614.57, -1788.61, 3577.92, 4040.75]" :size="[2366.75, 3347.81]" transform="rotate(25.51deg) scaleY(-1)" class="decor opacity-20" eager />

      <div class="heading layer flow whitespace-nowrap rounded-full bg-gradient-to-r from-cocoa to-rust" :style="place(334, 109, 822, 111)">
        <h1 id="maps-title" class="heading-text layer flow text-center font-buenard font-bold text-white" :style="place(34, 9, 704)">Temukan Kami !</h1>
      </div>

      <div class="map-card layer flow bg-white" :style="place(13, 262, 1413, 504)">
        <ArtImage
          :src="asset(isShaho ? 'lokasi/peta-shaho.webp' : 'lokasi/peta-bulau-sayang.webp')"
          :box="isShaho ? [52, 45, 1310, 414] : [31, 41, 1321, 415]"
          :alt="`Peta lokasi ${name}`"
          class="map overflow-hidden"
          eager
        />
        <div class="pin layer decor" :style="place(isShaho ? 613 : 589, 186, 103, 103)" aria-hidden="true">
          <ArtImage :src="asset('lokasi/pin-alas.svg')" :box="[8.58, 63.21, 85.83, 31.2]" class="decor" eager />
          <ArtImage :src="asset('lokasi/pin.svg')" :box="[25.75, 8.58, 51.5, 68.67]" eager />
          <div class="layer decor overflow-hidden rounded-full" :style="isShaho ? place(35, 22, 33, 33) : place(36.3, 21.6, 30.4, 30.4)">
            <ArtImage :src="asset(`lokasi/pin-${variant}.webp`)" :box="isShaho ? [0, 0, 33, 33] : [0, 0, 30.4, 30.4]" eager />
          </div>
        </div>
      </div>

      <ArtImage :src="asset('lokasi/pemandu.webp')" :box="[0, 317, 480, 560]" :crop="[0, -0.05, 165.03, 100.09]" class="guide" eager />

      <div class="footer-shape layer decor rounded-full bg-gradient-to-b from-cocoa to-rust" :style="place(-41, 797, 1533, 442)" aria-hidden="true" />

      <footer class="footer">
        <ArtImage :src="asset('lokasi/logo-putih.webp')" :box="[isShaho ? 94 : 70, 844, 125, 106]" alt="Komunitas Batik Tiga Zaman" class="footer-logo flow" eager />
        <address class="address layer flow text-center font-poppins not-italic text-white" :style="place(isShaho ? 255 : 280, 836, 1053)">{{ address }}</address>
        <a
          v-for="contact in contacts"
          :key="contact.href"
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact layer flow whitespace-nowrap font-poppins text-white hover:underline"
          :style="place(contact.x, 930)"
        >
          <img :src="asset(`lokasi/${contact.icon}.svg`)" alt="" class="contact-icon">
          {{ contact.label }}
        </a>
      </footer>

      <ArtImage :src="asset('umum/ornamen-horizontal.webp')" :box="[0, 981, 1830, 74]" class="ornament" eager />
    </div>
  </main>
</template>

<style scoped>
.heading-text {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.map-card,
.map {
  border-radius: calc(100 * var(--u));
}

.map-card {
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
}

.footer {
  display: contents;
}

.address {
  font-size: calc(25 * var(--u));
  line-height: 1.5;
}

.contact {
  display: flex;
  align-items: center;
  gap: calc(7 * var(--u));
  font-size: calc(15 * var(--u));
  line-height: 1.5;
}

.contact-icon {
  width: calc(23 * var(--u));
  height: calc(23 * var(--u));
}

@media (max-width: 700px) {
  .maps {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
  }

  .heading {
    width: 88%;
    padding-block: 0.6rem;
  }

  .heading-text {
    max-width: none;
    font-size: 1.9rem;
  }

  .map-card {
    width: 92%;
    height: 16rem;
    margin-top: 1.5rem;
    border-radius: 2rem;
  }

  .map {
    left: 0.7rem;
    top: 0.7rem;
    width: calc(100% - 1.4rem);
    height: 14.6rem;
    border-radius: 1.5rem;
  }

  .guide {
    position: relative;
    left: auto;
    top: auto;
    align-self: flex-start;
    width: 9rem;
    height: 10.5rem;
    margin-top: -3.5rem;
  }

  .footer {
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem 1.25rem 3rem;
    border-radius: 2.5rem 2.5rem 0 0;
    background: linear-gradient(#261003, #8c3b0b);
  }

  .footer-logo {
    width: 5.5rem;
    height: 4.7rem;
  }

  .address {
    font-size: 0.875rem;
  }

  .contact {
    justify-content: center;
    font-size: 0.8rem;
  }

  .contact-icon {
    width: 1.3rem;
    height: 1.3rem;
  }

  .ornament {
    left: 0;
    top: auto;
    bottom: -0.7rem;
    width: 200%;
    height: 2rem;
  }
}
</style>
