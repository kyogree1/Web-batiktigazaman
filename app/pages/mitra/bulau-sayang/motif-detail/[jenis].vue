<script setup lang="ts">
const route = useRoute()
const motifs = [
  {
    id: 'ruang-walu',
    title: ['Motif Ruang', 'Walu'],
    titleY: 185,
    textY: 411,
    image: 'ruang-walu',
    art: [888, 328, 285, 403],
    frame: [535, -108],
    description: 'Motif Ruang Walu terinspirasi dari janur yang digunakan masyarakat Suku Paser dalam ritual dan prosesi adat, sebagai lambang doa, harapan, dan penghormatan terhadap tradisi serta leluhur. Melalui motif ini, Batik Bulau Sayang mengabadikan nilai-nilai luhur tersebut dalam karya batik sebagai wujud kecintaan terhadap budaya Paser dan komitmen untuk melestarikannya agar tetap dikenal generasi mendatang.',
  },
  {
    id: 'sarumbolum',
    title: ['Motif', 'Sarumbolum'],
    titleY: 185,
    textY: 411,
    image: 'sarumbolum',
    art: [912, 336, 275, 388],
    frame: [535, -108],
    leavesY: 434,
    description: 'Batik Sarumbolum terinspirasi dari tumbuhan Sarumbolum, atau Daun Pendingin, yang bermakna penting bagi masyarakat adat Paser karena digunakan dalam ritual adat dan sebagai tanaman obat tradisional. Tumbuhan ini melambangkan kesejukan, ketenangan, dan kesucian, serta menjadi simbol doa agar kehidupan diliputi kedamaian, kesehatan, dan keberkahan. Melalui motif ini, nilai-nilai tersebut dituangkan dalam batik sebagai upaya mengenalkan dan melestarikan kearifan lokal Suku Paser kepada generasi penerus.',
  },
]
const motif = computed(() => findMotifOr404(motifs, route.params.jenis))

useSeoMeta({ title: () => motif.value.title.join(' ') })
</script>

<template>
  <MitraMotifDetail back="/mitra/bulau-sayang/motif" :motif="motif" />
</template>
