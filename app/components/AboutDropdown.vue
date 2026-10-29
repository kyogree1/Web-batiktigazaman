<script setup lang="ts">
const scallops = Array.from({ length: 14 }, (_, index) => {
  const angle = (index * 360) / 14
  const radians = (angle * Math.PI) / 180

  return {
    angle,
    left: `${50 + Math.cos(radians) * 40}%`,
    top: `${50 + Math.sin(radians) * 40}%`,
  }
})
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-dropdown-title"
    class="relative z-30 w-full bg-sand text-forest"
  >
    <div class="relative aspect-[1440/1024] w-full bg-sand">
      <img
        src="/halaman%20kedua/Rectangle%2070.png"
        alt=""
        class="absolute inset-x-0 top-0 h-[21%] w-full object-fill"
      >
      <img
        src="/halaman%20kedua/Rectangle%2064.png"
        alt=""
        class="absolute inset-x-0 bottom-0 h-[26%] w-full object-fill"
      >

      <img
        src="/halaman%20kedua/Vector(1).png"
        alt=""
        aria-hidden="true"
        class="absolute -left-[13.6%] -top-[8%] z-10 w-[27.2%]"
      >
      <div
        class="absolute left-[13%] top-[25%] z-20 aspect-square w-[31%] max-w-[28rem]"
        aria-hidden="true"
      >
        <div class="absolute inset-[5%] rounded-full bg-white shadow-[0_3px_5px_rgb(0_0_0_/_28%)]" />
        <span
          v-for="scallop in scallops"
          :key="scallop.angle"
          class="absolute size-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          :style="{ left: scallop.left, top: scallop.top }"
        />
      </div>

      <h2
        id="about-dropdown-title"
        class="absolute right-[12%] top-[21.5%] z-20 w-[38%] text-[clamp(1.35rem,4.55vw,4.35rem)] font-extrabold leading-[1.16] tracking-[-0.04em]"
      >
        Komunitas Batik<br>
        Tiga Zaman
      </h2>
    </div>

    <img
      src="/halaman%20kedua/Vector(1).png"
      alt=""
      aria-hidden="true"
      class="about-transition-flower absolute -bottom-[3.6%] -right-[9.4%] z-50 w-[27.2%]"
    >
  </section>
</template>

<style scoped>
@media (max-width: 700px) {
  #about {
    z-index: auto;
  }

  #about > div {
    display: flex;
    min-height: 34rem;
    aspect-ratio: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 5rem 1.5rem 6rem;
  }

  #about > div > img:first-child,
  #about > div > img:nth-child(2) {
    position: absolute;
    height: 21%;
  }

  #about > div > img:first-child {
    top: 0;
  }

  #about > div > img:nth-child(2) {
    bottom: 0;
  }

  #about > div > img:nth-child(3) {
    left: -4rem;
    top: -2rem;
    width: 10rem;
  }

  #about > div > div {
    position: relative;
    left: auto;
    top: auto;
    width: min(16rem, 72vw);
    max-width: none;
    flex: none;
    order: 1;
  }

  #about-dropdown-title {
    position: relative;
    inset: auto;
    order: 2;
    width: min(20rem, 86vw);
    font-size: clamp(2rem, 9vw, 2.8rem);
    text-align: center;
  }

  .about-transition-flower {
    bottom: -2rem;
    right: -4rem;
    width: 11rem;
  }
}
</style>
