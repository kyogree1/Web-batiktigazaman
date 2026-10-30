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
    class="relative z-30 w-full overflow-hidden bg-sand text-forest"
  >
    <div class="about-container relative aspect-[1440/1024] w-full bg-sand">
      <img
        src="/halaman%20kedua/Rectangle%2070.png"
        alt=""
        class="about-wave-top absolute inset-x-0 top-0 h-[21%] w-full object-fill"
      >
      <img
        src="/halaman%20kedua/Rectangle%2064.png"
        alt=""
        class="about-wave-bottom absolute inset-x-0 bottom-0 h-[26%] w-full object-fill"
      >

      <img
        src="/halaman%20kedua/Vector(1).png"
        alt=""
        aria-hidden="true"
        class="about-flower-top absolute -left-[13.6%] -top-[8%] z-10 w-[27.2%]"
      >
      <div
        class="about-scallop absolute left-[13%] top-[25%] z-20 aspect-square w-[31%] max-w-[28rem]"
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
        class="about-title absolute right-[12%] top-[21.5%] z-20 w-[38%] text-[clamp(1.35rem,4.55vw,4.35rem)] font-extrabold leading-[1.16] tracking-[-0.04em]"
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
    z-index: 30;
  }

  .about-container {
    display: flex;
    min-height: 36rem;
    aspect-ratio: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 6.5rem 1.25rem 6.5rem;
  }

  .about-wave-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5.5rem;
    width: 100%;
    object-fit: fill;
  }

  .about-wave-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5.5rem;
    width: 100%;
    object-fit: fill;
  }

  .about-flower-top {
    position: absolute;
    left: -3rem;
    top: -1.5rem;
    width: 8.5rem;
    pointer-events: none;
  }

  .about-scallop {
    position: relative;
    left: auto;
    top: auto;
    width: min(14rem, 62vw);
    max-width: none;
    flex: none;
    order: 1;
  }

  .about-title {
    position: relative;
    inset: auto;
    order: 2;
    width: min(22rem, 90vw);
    font-size: clamp(1.75rem, 8vw, 2.4rem);
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .about-transition-flower {
    position: absolute;
    bottom: -2rem;
    right: -3rem;
    width: 9rem;
    pointer-events: none;
  }
}
</style>
