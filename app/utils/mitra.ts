/** Formulir reservasi (Google Form) dan jadwal reservasi (Google Sheets), dipakai kedua mitra. */
const reservasi = {
  form: 'https://docs.google.com/forms/d/e/1FAIpQLScQ6cUP66DXIE7Ww5CMaolRt5435x0vQbRW7uugDS-YLDY_ww/viewform',
  jadwal: 'https://docs.google.com/spreadsheets/d/1uTJv66UpQorjP4D6LQK_RQLDaGoMyQBsP--NQPDWtqY/edit?gid=1419325820#gid=1419325820',
}

/** Data kontak tiap mitra. Satu sumber untuk profil, maps, reservasi, dan galeri. */
export const mitra = {
  shaho: {
    name: 'Batik Shaho',
    base: '/mitra/batik-shaho',
    whatsapp: { href: 'https://wa.me/6281346241922', label: '+62813-4624-1922' },
    instagram: { href: 'https://instagram.com/batik_shahokaltim', label: '@batik_shahokaltim' },
    website: 'https://www.batikshaho.com',
    reservasi,
    address: 'Jl. LKMD No.45, RT.05, Batu Ampar, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76136',
  },
  'bulau-sayang': {
    name: 'Galeri Bulau Sayang',
    base: '/mitra/bulau-sayang',
    whatsapp: { href: 'https://wa.me/6281348747700', label: '+62813-4874-7700' },
    instagram: { href: 'https://instagram.com/bulau_sayang', label: '@bulau_sayang' },
    website: 'https://www.bulausayang.com',
    reservasi,
    address: 'Jl. Gusung No.RT.002, Nenang, Penajam, Kabupaten Penajam Paser Utara, Kalimantan Timur 76142',
  },
} as const

export type MitraId = keyof typeof mitra

/** Link tombol aksi di halaman profil mitra. */
export function mitraLinks(id: MitraId) {
  const { base, whatsapp } = mitra[id]
  return {
    maps: `${base}/maps`,
    contact: whatsapp.href,
    motif: `${base}/motif`,
    date: `${base}/date`,
    photo: `${base}/photo`,
  }
}

/** Cari motif berdasarkan slug di URL; slug yang tidak dikenal menghasilkan halaman 404. */
export function findMotifOr404<T extends { id: string }>(motifs: T[], slug: unknown): T {
  const found = motifs.find((motif) => motif.id === slug)
  if (!found) throw createError({ statusCode: 404, statusMessage: 'Motif tidak ditemukan', fatal: true })
  return found
}
