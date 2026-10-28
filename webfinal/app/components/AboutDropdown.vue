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
    class="relative w-full overflow-hidden bg-sand text-forest"
  >
    <div class="relative aspect-[1440/1024] w-full overflow-hidden bg-sand">
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
      <img
        src="/halaman%20kedua/Vector(1).png"
        alt=""
        aria-hidden="true"
        class="absolute -bottom-[3.6%] -right-[9.4%] z-10 w-[27.2%]"
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
  </section>
</template>
