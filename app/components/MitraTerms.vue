<template>
  <section id="terms" class="terms artboard aspect-[1440/1061] bg-paper max-[700px]:aspect-auto" aria-labelledby="terms-heading">
    <ArtImage :src="asset('umum/ornamen-vertikal.webp')" :box="[1290, -92, 150, 1460]" transform="scaleX(-1)" class="decor" eager />
    <ArtImage :src="asset('umum/ornamen-vertikal.webp')" :box="[21, -92, 150, 1460]" :crop="[13.6, 0, 100.18, 100]" transform="scaleX(-1)" class="decor" eager />

    <h1 id="terms-heading" class="sr-only">Ketentuan dan rincian kegiatan</h1>

    <div class="block-terms">
      <div class="panel layer decor bg-white" :style="place(558, 146, 696, 280)" aria-hidden="true" />
      <h2 class="label label--terms layer flow whitespace-nowrap rounded-full text-center font-buenard font-bold text-white" :style="place(466, 124, 513, 69)">Ketentuan</h2>
      <ul class="list layer flow list-disc font-poppins text-black" :style="place(626, 210, 627)">
        <li>Minimal 10 siswa</li>
        <li>Durasi kegiatan 2 jam (08.30 sampai 10.30)</li>
        <li>Media diserahkan ke pihak sekolah sekitar 3 hari kerja setelah proses selesai</li>
      </ul>
    </div>

    <div class="block-details">
      <div class="panel layer decor bg-white" :style="place(348, 509, 696, 342)" aria-hidden="true" />
      <h2 class="label label--details layer flow whitespace-nowrap rounded-full text-center font-buenard font-bold text-white" :style="place(604.6, 493.6, 513, 69)">Rincian kegiatan</h2>
      <ul class="list layer flow list-disc font-poppins text-black" :style="place(373, 571, 671)">
        <li>Pelajaran dasar batik</li>
        <li>Mewarnai media yang sudah disiapkan</li>
        <li>Media dicanting dan dicap dengan nama serta motif batik</li>
        <li>Motif untuk TK: kapal, pesawat, atau bunga yang mudah dikenali anak, dengan pilihan motif batik</li>
      </ul>
    </div>

    <ArtImage :src="asset('reservasi/pemandu.webp')" :box="[-219, 275, 733.5, 873.45]" :size="[495.74, 743.61]" :crop="[-129.8, 0, 229.86, 108.33]" transform="rotate(-158.53deg) scaleY(-1)" class="guide" eager />
    <ArtImage :src="asset('umum/bintang.webp')" :box="[1036.98, 23, 216.87, 216.87]" :size="[177, 177]" transform="rotate(15.04deg)" class="decor drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" eager />
    <ArtImage :src="asset('reservasi/bunga-atas.svg')" :box="[49, 51, 328, 324]" class="decor" eager />
    <ArtImage :src="asset('reservasi/bunga-bawah.svg')" :box="[1056, 675, 317, 313]" class="decor" eager />
  </section>
</template>

<style scoped>
.block-terms,
.block-details {
  display: contents;
}

.panel {
  border-radius: calc(100 * var(--u));
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
}

.label {
  z-index: 1;
  font-size: calc(50 * var(--u));
  line-height: calc(64 * var(--u));
}

.label--terms {
  background: #cb4c08;
  transform: rotate(-3.49deg);
}

.label--details {
  background: #887a49;
  transform: rotate(3.2deg);
}

.list {
  padding-left: calc(37.5 * var(--u));
  font-size: calc(25 * var(--u));
  line-height: 1.5;
}

@media (max-width: 700px) {
  .terms {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 5.5rem 1rem 11rem;
  }

  .block-terms,
  .block-details {
    display: block;
    width: 100%;
    max-width: 32rem;
    padding-bottom: 1.25rem;
    border-radius: 2rem;
    background: #fff;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  }

  .label {
    width: 85%;
    margin: -0.5rem auto 1rem;
    font-size: 1.7rem;
    line-height: 2.8rem;
  }

  .list {
    padding-inline: 2.2rem 1rem;
    font-size: 0.875rem;
  }

  .guide {
    left: -2rem;
    top: auto;
    bottom: 0;
    width: 9.4rem;
    height: 11.2rem;
  }
}
</style>
