<script setup lang="ts">
const route = useRoute()
const motifs = [
  {
    id: 'naga',
    title: ['Motif Naga Kecil'],
    titleY: 185,
    textY: 324,
    image: 'naga',
    art: [850, 257, 398, 563],
    frame: [553, -117],
    description: 'Motif Kepala Naga memuat makna kekuatan dan keberanian dalam menghadapi tantangan, kewibawaan yang mencerminkan kehormatan dan kebijaksanaan, serta perlindungan sebagai simbol harapan akan keselamatan dan keseimbangan. Lengkungan sulurnya menggambarkan perjalanan hidup yang terus berkembang dan saling terhubung. Motif ini menyampaikan pesan bahwa kekuatan sejati terletak pada keberanian yang disertai kebijaksanaan, serta tanggung jawab menjaga kehidupan dan warisan budaya leluhur.',
  },
  {
    id: 'anggrek',
    title: ['Motif Anggrek', 'Hitam Kecil'],
    titleY: 185,
    textY: 411,
    image: 'anggrek',
    art: [855, 256, 388, 548],
    frame: [535, -108],
    description: 'Anggrek Hitam Kecil adalah motif batik yang terinspirasi dari anggrek hitam (Coelogyne pandurata), flora khas Kalimantan yang unik dari segi bentuk dan warna bunganya. Bunga ini distilasi menjadi pola batik yang menggambarkan keindahan dan keanekaragaman hayati Kalimantan. Motif ini memuat empat filosofi, yaitu keunikan dan keindahan, keteguhan untuk bertahan di tengah tantangan, kelestarian alam, serta identitas daerah yang menjadikan anggrek hitam sebagai kebanggaan Kalimantan.',
  },
  {
    id: 'enggang',
    title: ['Motif Ekor', 'Enggang'],
    titleY: 151,
    textY: 393,
    image: 'enggang',
    art: [880, 273, 337, 477],
    frame: [553, -117],
    description: 'Motif Ekor Enggang terinspirasi dari susunan bulu ekor burung Enggang, satwa yang istimewa dalam budaya masyarakat Dayak di Kalimantan. Bulu yang tersusun simetris menggambarkan keseimbangan dan persatuan, sedangkan lengkungannya melambangkan perjalanan hidup yang terus berkembang. Garis geometrisnya mencerminkan keteguhan dan keberanian menjaga identitas budaya. Sebagai simbol kehormatan dan kebijaksanaan, motif ini membawa pesan untuk senantiasa menjaga alam.',
  },
]
const selectedMotif = computed(() => findMotifOr404(motifs, route.params.jenis))

useSeoMeta({ title: () => selectedMotif.value.title.join(' ') })
</script>

<template>
  <MitraMotifDetail back="/mitra/batik-shaho/motif" :motif="selectedMotif" />
</template>
