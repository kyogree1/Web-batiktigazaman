<script setup lang="ts">
// Urutan dan koordinat mengikuti Frame 121 di Figma.
const people = [
  {
    names: ['Pak Oki Hendro Julianto', 'Bu Hendri Astuti'],
    shop: 'Batik Shaho',
    pill: [-245, 865, 1298, 435],
    pillImage: 'pil-shaho',
    fade: [-209, 868, 1262, 435],
    fadeImage: 'pudar-shaho',
    photos: [
      { file: 'oki', box: [0, 763, 369, 537], zoom: 103.04 },
      { file: 'hendri', box: [231, 763, 381, 537], zoom: 106.44 },
    ],
    text: [518, 968],
    line: [613, 1117],
    role: [667, 1123],
  },
  {
    names: ['Ibu Ida Tutik Rusintan'],
    shop: 'Galeri Bulau Sayang',
    pill: [569, 1337, 1188, 435],
    fade: [568, 1337, 1262, 435],
    fadeImage: 'pudar-kanan',
    photos: [{ file: 'ida', box: [698, 1216, 380, 549], zoom: 103.85 }],
    text: [1068, 1499],
    line: [1068, 1553],
    role: [1069, 1567],
  },
  {
    names: ['Pak Yusuf'],
    shop: 'Aneka Batik Balikpapan',
    pill: [-348, 1800, 1309, 435],
    fade: [-301, 1800, 1262, 435],
    fadeImage: 'pudar-kiri',
    photos: [{ file: 'yusuf', box: [71, 1663, 381, 572], zoom: 100 }],
    text: [465, 1949],
    line: [465, 2003],
    role: [466, 2017],
  },
  {
    names: ['Ibu Imelda Larasati'],
    shop: 'Griya Godong',
    pill: [624, 2263, 1149, 435],
    fade: [624, 2261, 1262, 435],
    fadeImage: 'pudar-kiri',
    photos: [{ file: 'imelda', box: [731, 2151, 380, 543], zoom: 105.01 }],
    text: [1111, 2399],
    line: [1111, 2459],
    role: [1114, 2473],
  },
  {
    names: ['Ibu Sutiyani'],
    shop: 'Batik Poyung',
    pill: [-228, 2736, 1149, 435],
    fade: [-341, 2736, 1262, 435],
    fadeImage: 'pudar-kiri',
    photos: [{ file: 'sutiyani', box: [72, 2601, 380, 570], zoom: 100 }],
    text: [452, 2886],
    line: [452, 2946],
    role: [455, 2960],
  },
  {
    names: ['Ibu Lilik Komariyati'],
    shop: 'Tryada Craft dan Tryada Recycle',
    pill: [463, 3244, 1149, 435],
    fade: [463, 3244, 1262, 435],
    fadeImage: 'pudar-kiri',
    photos: [{ file: 'lilik', box: [624, 3092, 418, 587], zoom: 106.84 }],
    text: [1004, 3412],
    line: [1004, 3472],
    role: [1007, 3486],
  },
]
</script>

<template>
  <section id="about" class="community artboard aspect-[1440/4059] bg-olive max-[700px]:aspect-auto" aria-labelledby="about-dropdown-title">
    <ArtImage :src="asset('beranda/peta-indonesia.webp')" :box="[-429, 1165, 2186, 1639]" class="decor drop-shadow-[0_4px_4px_#1e3c2b]" />
    <ArtImage :src="asset('umum/ornamen-vertikal.webp')" :box="[-195, -504, 389, 5013]" :crop="[-2.69, 11.67, 105.67, 79.66]" class="decor opacity-[0.16]" />
    <ArtImage :src="asset('umum/ornamen-vertikal.webp')" :box="[1242, -533, 395, 4650]" :crop="[-2.69, 12.78, 105.67, 87.22]" class="decor opacity-[0.16]" />

    <h2 id="about-dropdown-title" class="heading layer flow whitespace-nowrap font-buenard font-bold text-paper" :style="place(571, 25)">Mitra Kami</h2>
    <ArtImage :src="asset('umum/logo.webp')" :box="[571, 208, 323, 273]" alt="Komunitas Batik Tiga Zaman" class="logo flow drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
    <p class="about-copy layer flow text-center font-poppins text-paper" :style="place(372, 541, 722)">
      Komunitas Batik Tiga Zaman adalah ruang kolaborasi bagi pecinta, perajin, dan masyarakat untuk menjaga serta memperkenalkan batik sebagai warisan budaya yang relevan di setiap zaman. Beranggotakan enam gerai batik di Kalimantan Timur, komunitas ini memadukan nilai tradisional dan modern untuk menjadikan batik sebagai simbol identitas dan kebanggaan budaya Indonesia.
    </p>
    <ArtImage :src="asset('beranda/siswa-putri.webp')" :box="[20, 208, 413, 584]" class="student student--left drop-shadow-[0_4px_4px_#1e3c2b]" />
    <ArtImage :src="asset('beranda/siswa-putra.webp')" :box="[1009, 216, 408, 576]" class="student student--right drop-shadow-[0_4px_4px_#1e3c2b]" />

    <ArtImage :src="asset('beranda/gelombang-tim.svg')" :box="[-345, 3656, 2159, 461]" transform="scaleY(-1)" class="decor" />

    <article v-for="person in people" :key="person.shop" class="person">
      <ArtImage v-if="person.pillImage" :src="asset(`beranda/${person.pillImage}.svg`)" :box="person.pill" class="decor" />
      <div v-else class="person-pill layer decor" :style="place(person.pill[0]!, person.pill[1]!, person.pill[2], person.pill[3])" />

      <div class="person-photos">
        <ArtImage
          v-for="photo in person.photos"
          :key="photo.file"
          :src="asset(`beranda/${photo.file}.webp`)"
          :box="photo.box"
          :crop="[0, 0, 100, photo.zoom]"
          class="person-photo z-[1]"
        />
      </div>
      <ArtImage :src="asset(`beranda/${person.fadeImage}.svg`)" :box="person.fade" class="decor z-[2]" />

      <div class="person-text">
        <h3
          class="person-name layer z-[3] whitespace-nowrap font-buenard"
          :class="{ 'person-name--pair': person.names.length > 1 }"
          :style="place(person.text[0]!, person.text[1]!, person.names.length > 1 ? 452 : undefined)"
        >
          <template v-for="(name, index) in person.names" :key="name">
            <span v-if="index" class="ampersand block">&amp;</span>
            <span class="block">{{ name }}</span>
          </template>
        </h3>
        <span class="layer decor z-[3] border-t border-[#321504]" :style="place(person.line[0]!, person.line[1]!, 262, 1)" aria-hidden="true" />
        <p class="person-role layer z-[3] whitespace-nowrap font-buenard" :style="place(person.role[0]!, person.role[1]!)">
          Pemilik <span class="person-shop">{{ person.shop }}</span>
        </p>
      </div>
    </article>

    <ArtImage :src="asset('beranda/pembatik.webp')" :box="[-167, 3352, 1004, 710]" class="artisans z-[4]" />
  </section>
</template>

<style scoped>
.heading {
  font-size: calc(64 * var(--u));
  line-height: 1.23;
}

.about-copy {
  font-size: calc(22 * var(--u));
  line-height: 1.5;
}

.person,
.person-photos,
.person-text {
  display: contents;
}

.person-pill {
  border-radius: 9999px;
  background: linear-gradient(#faead3, #b45f2d);
}

.person-name {
  color: #321504;
  font-size: calc(36 * var(--u));
  line-height: 1.23;
}

.person-name--pair {
  text-align: center;
  line-height: calc(41.5 * var(--u));
}

.person-role {
  color: #321504;
  font-size: calc(20 * var(--u));
  line-height: 1.23;
}

.person-shop {
  color: #652604;
}

@media (max-width: 700px) {
  .community {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 2rem 1rem 11rem;
  }

  .heading {
    font-size: 2.5rem;
    text-align: center;
  }

  .logo {
    width: 9rem;
    height: 7.6rem;
  }

  .student {
    top: 5rem;
    width: 6rem;
    height: 8.5rem;
  }

  .student--left {
    left: 0.25rem;
  }

  .student--right {
    left: auto;
    right: 0.25rem;
  }

  .about-copy {
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  .person {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 30rem;
    height: 10rem;
    align-items: center;
    overflow: hidden;
    border-radius: 5rem;
    background: linear-gradient(#faead3, #b45f2d);
  }

  .person-photos {
    display: flex;
    width: 42%;
    height: 100%;
    flex: none;
    justify-content: center;
    padding-left: 0.75rem;
  }

  .person-photo {
    position: relative;
    left: auto;
    top: auto;
    width: 6.5rem;
    height: 9.4rem;
    flex: none;
    align-self: flex-end;
  }

  .person-photo:not(:only-child) {
    width: 5.5rem;
    height: 8rem;
  }

  .person-photo + .person-photo {
    margin-left: -2.6rem;
  }

  .person-text {
    display: block;
    min-width: 0;
    flex: 1;
    padding-right: 1.25rem;
  }

  .person-name,
  .person-role {
    position: relative;
    left: auto;
    top: auto;
    width: auto;
    height: auto;
    white-space: normal;
  }

  .person-name {
    font-size: 1.15rem;
    line-height: 1.15;
    text-align: left;
  }

  .person-role {
    margin-top: 0.5rem;
    padding-top: 0.35rem;
    border-top: 1px solid #321504;
    font-size: 0.85rem;
  }

  .artisans {
    left: -1.5rem;
    top: auto;
    bottom: 0;
    width: 15rem;
    height: 10.6rem;
  }
}
</style>
