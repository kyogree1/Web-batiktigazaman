# Komunitas Batik Tiga Zaman — Website

Website profil Komunitas Batik Tiga Zaman. Tampilan berupa satu halaman panjang
yang terdiri dari beberapa "halaman" bertumpuk, mengikuti artboard desain
`1440 × 1024`.

Fokus proyek saat ini adalah **kesetiaan visual terhadap desain** pada desktop
`1440 × 1024`, dengan layout mobile responsif untuk viewport sampai `700 px`.
Posisi, proporsi, warna, dan tipografi dibuat mendekati screenshot referensi.

---

## 1. Status pengerjaan

UI mengikuti section **FIX WEBSITE** di Figma
(`6JStio17HM4nrMpxTH9qRU`, node `438:87`).

| Halaman | Section / route | File | Komponen |
| --- | --- | --- | --- |
| Hero | `#home` | `app/pages/index.vue` | `AppNavbar` |
| Profil komunitas + pemilik gerai | `#about` | `app/pages/index.vue` | `AboutDropdown` |
| What You Learn With Us | `#program` | `app/pages/index.vue` | `ProgramSection` |
| Testimoni (3 slide) | `#testimoni` | `app/pages/index.vue` | `TestimonialSection` |
| Kartu mitra | `#mitra` | `app/pages/index.vue` | `AboutUsDetailSection` |
| Profil mitra | `/mitra/batik-shaho`, `/mitra/bulau-sayang` | route masing-masing | `MitraProfile` |
| Jenis motif | `.../batik-shaho/motif`, `.../bulau-sayang/motif` | route masing-masing | `MitraMotifCatalog` |
| Detail motif | `.../batik-shaho/motif-detail/[jenis]`, `.../bulau-sayang/motif-detail/[jenis]` | route masing-masing | `MitraMotifDetail` |
| Maps | `.../batik-shaho/maps`, `.../bulau-sayang/maps` | route masing-masing | `MitraMaps` |
| Reservasi | `.../batik-shaho/date`, `.../bulau-sayang/date` | route masing-masing | `MitraTerms`, `MitraPricelist`, `MitraReservation` |
| Dokumentasi + QR | `.../batik-shaho/photo`, `.../bulau-sayang/photo` | route masing-masing | `MitraGallery` |

Cara mengubah UI:

- Kontak tiap mitra (nama, WhatsApp, Instagram, website, alamat, base route) ada di `app/utils/mitra.ts`.
  Teks deskripsi, harga, dan motif ada di file halamannya. Tampilan bersama ada di komponen `Mitra*`.
- Route Bulau Sayang memakai struktur yang sama dengan Batik Shaho (`/mitra/bulau-sayang/...`).
  URL lama (`/mitra/bulau-sayang-maps`, dst.) di-redirect 301 lewat `routeRules` di `nuxt.config.ts`.
- Slug motif yang tidak dikenal menghasilkan 404 (`findMotifOr404` di `app/utils/mitra.ts`).
- Judul tab per halaman memakai `useSeoMeta({ title })`; template judul ada di `app/app.vue`.
- Posisi memakai angka px dari Figma (lebar 1440): `:style="place(x, y, lebar, tinggi)"` dengan kelas `layer`,
  di dalam elemen berkelas `artboard`. Ukuran font: `calc(22 * var(--u))` = 22 px di Figma.
- Gambar diputar/di-crop memakai `<ArtImage :box :size :transform :crop />`.
- Mobile (maks. 700 px): `flow` ikut alur halaman, `decor` disembunyikan, sisanya di `<style scoped>`.
- Aset ada di `public/design-baru/`, font Buenard dan Poppins di `public/fonts/`.
- Screenshot peta harus **dipotong di file-nya**, bukan hanya lewat CSS, agar tab/bookmark browser tidak ikut tayang.
- Bagian 5, 6.2-6.4, 7, 11, dan offset di bagian 10 masih mendokumentasikan desain lama.
  Jika berbeda, bagian 1 ini yang berlaku.

---

## 2. Stack

| Bagian | Teknologi |
| --- | --- |
| Framework | Nuxt 4 (`^4.6.1`) |
| UI | Vue 3 SFC (`<script setup lang="ts">`) |
| Styling | Tailwind CSS 3.4 via `@nuxtjs/tailwindcss` |
| Bahasa | TypeScript |
| Font | Buenard, Poppins, Nunito (woff2 lokal di `public/fonts/`, `@font-face` di `app/assets/css/main.css`) |
| Verifikasi visual | `agent-browser` (opsional, untuk agen) |

Tidak ada state management, CMS, atau database. Data teks masih hard-coded di
masing-masing komponen.

---

## 3. Prasyarat

- **Node.js 22.22.3+** (syarat engine Nuxt 4.6.2). Build masih berjalan di
  `v22.22.1`, tetapi npm menampilkan peringatan `EBADENGINE`; upgrade Node
  disarankan.
- **npm** (diuji dengan `11.21.1`).
- Browser Chromium untuk verifikasi screenshot.
- Tidak wajib mengisi `.env.local`. File itu hanya berisi token Vercel dan
  diabaikan Git.

---

## 4. Setup

Seluruh aplikasi Nuxt berada langsung di root repositori. Jalankan perintah
dari root repo.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

### Scripts

```bash
npm run dev       # development server (HMR)
npm run build     # production build
npm run preview   # preview hasil build
npm run generate  # static generation
```

Jika port 3000 dipakai proses lain:

```bash
npm run dev -- --port 3001
```

### Build check

Selalu jalankan build sebelum menutup pekerjaan:

```bash
npm run build
```

Contoh perintah non-interaktif yang dipakai di sesi sebelumnya:

```bash
CI=1 NUXT_TELEMETRY_DISABLED=1 npm run build
```

### Deployment Vercel

Karena aplikasi berada di root repo, setting project Vercel harus:

| Setting | Nilai |
| --- | --- |
| Root Directory | `.` (root repo) |
| Production Branch | `main` |
| Framework Preset | Nuxt |
| Build Command | `npm run build` |

Jangan mengarahkan Root Directory ke `webfinal`; folder itu sudah tidak ada.

---

## 5. Struktur proyek

```text
.
├─ app/
│  ├─ app.vue                      # titleTemplate global
│  ├─ assets/css/main.css          # @font-face, artboard (.layer/.flow/.decor), .pill
│  ├─ layouts/default.vue
│  ├─ utils/
│  │  ├─ artboard.ts               # place(x, y, w, h) + asset(path)
│  │  └─ mitra.ts                  # data kontak mitra, mitraLinks(), findMotifOr404()
│  ├─ pages/
│  │  ├─ index.vue                 # landing page (hero + 4 section)
│  │  └─ mitra/
│  │     ├─ batik-shaho/
│  │     │  ├─ index.vue           # profil
│  │     │  ├─ motif.vue           # katalog jenis motif
│  │     │  ├─ motif-detail/[jenis].vue
│  │     │  ├─ maps.vue            # lokasi & kontak
│  │     │  ├─ date.vue            # ketentuan, pricelist, reservasi
│  │     │  └─ photo.vue           # dokumentasi + QR
│  │     └─ bulau-sayang/          # struktur sama dengan batik-shaho
│  └─ components/
│     ├─ AppNavbar.vue             # navbar hero
│     ├─ ArtImage.vue              # gambar di artboard (box/size/transform/crop)
│     ├─ AboutDropdown.vue         # #about — profil komunitas + pemilik gerai
│     ├─ ProgramSection.vue        # #program
│     ├─ TestimonialSection.vue    # #testimoni (carousel 3 slide)
│     ├─ AboutUsDetailSection.vue  # #mitra — kartu mitra
│     ├─ GoldLeaves.vue            # deretan daun Program/Testimoni
│     └─ Mitra*.vue                # komponen bersama halaman mitra
├─ public/
│  ├─ design-baru/                 # semua asset UI (ekspor Figma)
│  │  ├─ beranda/  foto/  lokasi/  motif/  reservasi/  umum/
│  ├─ fonts/                       # Buenard, Poppins, Nunito (woff2)
│  ├─ favicon.ico                 # simbol logo komunitas (16/32/48 px)
│  ├─ apple-touch-icon.png        # ikon 180 px untuk iPhone/iPad
│  └─ robots.txt
├─ tailwind.config.ts              # token warna & font
├─ nuxt.config.ts                  # head (lang, title, description), routeRules redirect
└─ package.json
```

---

## 6. Aturan implementasi visual

### 6.1 Artboard, bukan layout biasa

Setiap halaman dibungkus section dengan rasio tetap:

```html
<section class="relative aspect-[1440/1024] w-full overflow-hidden">
```

Posisi elemen memakai **absolute + persentase** terhadap artboard, misalnya:

```html
<h2 class="absolute left-[15%] top-[22.5%] w-[67%] ...">
```

Konsekuensi:

- Jangan mengganti ke flex/grid flow biasa tanpa alasan kuat.
- Ukuran teks memakai `clamp()` agar tetap proporsional terhadap viewport.
- `overflow-hidden` penting untuk memotong ornamen yang keluar artboard.
- Perubahan kecil pada `left`/`top`/`width` harus diverifikasi lewat screenshot,
  bukan hanya dihitung.

### 6.2 Warna

Token Tailwind di `tailwind.config.ts`:

| Token | Hex | Pemakaian |
| --- | --- | --- |
| `forest` | `#193f2d` | UI umum, navbar |
| `cream` | `#f2e1c7` | teks hero |
| `sand` | `#ead1ae` | latar halaman 2 |

Halaman 3 dan 4 memakai hex langsung agar sama persis dengan artwork:

- Hijau halaman 3/4 dan kanopi wave: `#1e3c2b`
- Latar halaman 4: `#edd4b8`
- Aksen oranye: `#cb4c08`
- Aksen kuning: `#cbc308`
- Biru ellipse: `#9ab3eb`

Jangan menyamakan `forest` (`#193f2d`) dengan `#1e3c2b`; keduanya sengaja
berbeda dan pernah menjadi sumber garis seam yang terlihat.

### 6.3 Tipografi

- Font global: Nunito.
- Judul memakai `font-extrabold` dan `tracking` negatif tipis.
- Ukuran memakai `clamp()`, contoh halaman 4:
  `text-[clamp(2rem,4.9vw,4.4rem)]`.
- Jika mengubah ukuran font, ukur ulang lebar teks terhadap referensi. Pada
  halaman 4, judul harus selebar ±797 px pada viewport 1440.

### 6.4 Navbar & anchor

Label dan posisi navbar mengikuti Figma (Frame 122).

| Link | Target |
| --- | --- |
| Logo | `#home` |
| About us | `#about` |
| Program | `#program` |
| Mitra Kami | `#mitra` |
| Contact US | `#mitra` (belum ada section kontak) |

Ikon cari di desain Figma sengaja tidak dipasang karena fitur pencarian tidak ada.

Navbar `position: fixed` di luar artboard hero (container query hero mengurung
elemen fixed), dengan artboard sendiri `1440 × 110` sehingga posisi px Figma tetap.
Perilakunya diatur `useHideOnScroll()` (`app/composables/useHideOnScroll.ts`):

- selalu tampil di 120 px teratas halaman;
- hilang saat digulir ke bawah, muncul lagi setelah digulir ke atas ±8 px;
- klik menu/logo memanggil `hold()` agar navbar tidak muncul menutupi section tujuan
  sampai smooth scroll selesai (`scrollend`, maks. 3 detik);
- tetap terlihat saat fokus keyboard (Tab) berada di dalamnya (`:has(:focus-visible)`).

### 6.5 Animasi

Figma tidak berisi data animasi, jadi animasi hanya mengantar elemen ke posisi
akhir yang sudah sesuai desain. Semua memakai `opacity`/`transform` dan easing
`var(--ease-out)`, serta mati otomatis saat `prefers-reduced-motion: reduce`.

| Animasi | Lokasi | Catatan |
| --- | --- | --- |
| Intro hero | `.reveal` di `main.css`, dipakai di `pages/index.vue` | Satu kali saat load. Urutan lewat `--delay`. Jangan dipakai di section lain. |
| Slide testimoni | `<Transition>` di `TestimonialSection.vue` | Arah geser mengikuti tombol prev/next. |
| Transisi halaman | `app.pageTransition` di `nuxt.config.ts`, `.page-*` di `main.css` | Fade 250 ms. Tiap halaman wajib satu root element. |
| Hover | `a.pill` (`main.css`), `.card` (`MitraMotifCatalog.vue`), `.arrow` (`TestimonialSection.vue`) | Hanya di perangkat yang punya hover. |

---

## 7. Asset & aturan pakai

### 7.1 Folder asset

Semua asset UI ada di `public/design-baru/` dan dipanggil lewat helper
`asset('folder/file')`. Hampir semuanya hasil ekspor Figma (SVG/WebP).

| Folder | Isi |
| --- | --- |
| `beranda/` | hero, pemilik gerai, program, testimoni |
| `umum/` | logo, ornamen, ikon tombol mitra, daun emas, bintang |
| `motif/` | katalog & detail motif |
| `lokasi/` | peta, pin, ikon kontak |
| `reservasi/` | ketentuan, pricelist, kalender |
| `foto/` | dokumentasi kegiatan & QR |

Folder lama (`public/halaman *`, `public/design/`) sudah dihapus karena tidak
lagi dirujuk kode. Jika perlu, ambil dari riwayat git (sebelum 2026-11-23).

### 7.2 Responsive mobile

- Breakpoint utama: `max-width: 700px`.
- Hero memakai tinggi alur mobile; background memenuhi area sampai karakter.
- `AboutDropdown` memakai susunan flow vertikal.
- `AboutUsDetailSection` memakai komposisi diagonal: kartu S kiri-atas,
  kartu BS kanan-bawah, supergrafis kiri memanjang, peta sebagian dari kanan.
- `ProgramSection` dan `TestimonialSection` memakai susunan satu kolom.
- Desktop tetap mempertahankan artboard `1440 × 1024`.

### 7.3 URL encoding

Nama file mengandung spasi. Di dalam `src` Vue, spasi di-encode:

```html
<img src="/halaman%20keempat/Vector(2).png">
```

Jangan mengganti nama asset tanpa memperbarui semua referensi.

### 7.4 Catatan asset lama

Aturan `Rectangle 69 - sambungan.png`, logo kartu `IMG_48xx`, dan
`.community-supergraphic` berlaku untuk desain lama dan tidak relevan lagi
setelah migrasi ke `design-baru/`.

---

## 8. Skills yang diperlukan

### Kompetensi teknis minimum

- Vue 3 SFC (`<script setup>`, template, scoped style).
- Tailwind CSS, termasuk arbitrary value seperti `top-[22.5%]` dan `w-[67%]`.
- CSS layout: `position: absolute`, `aspect-ratio`, `clamp()`, `mask-image`,
  dan stacking context (`z-index`).
- Penggunaan browser DevTools untuk mengukur elemen dan mengambil screenshot.
- Dasar pengelolaan gambar: rasio asli, transparansi PNG, dan URL encoding.

### Skill agen

Proyek ini dikerjakan dengan bantuan agen coding. Muat skill berikut lewat tool
`skill` sebelum mulai.

### Wajib

| Skill ID | Kapan dipakai |
| --- | --- |
| `frontend-design` | Menyusun komposisi visual, tipografi, dan keputusan estetika dari referensi. |
| `vue-best-practices` | Menulis/mengubah SFC Vue 3: `<script setup>`, props, styling, aksesibilitas. |
| `agent-browser` | Membuka halaman, mengatur viewport, scroll ke section, dan mengambil screenshot verifikasi. |

### Situasional

| Skill ID | Kapan dipakai |
| --- | --- |
| `graphify` | Memetakan repo/asset atau menjawab pertanyaan arsitektur; berguna saat konteks proyek membesar. |
| `opencode` | Jika mengubah konfigurasi harness, agent, plugin, atau butuh dokumentasi OpenCode. |
| `find-skills` | Jika butuh skill baru yang belum tersedia. |

Contoh memuat skill di sesi agen:

```text
skill({ id: 'frontend-design' })
skill({ id: 'vue-best-practices' })
skill({ id: 'agent-browser' })
```

Skill ini bukan dependency npm. Tidak ada langkah `npm install` untuk skills.

---

## 9. Workflow melanjutkan pekerjaan

1. **Baca konteks**
   - `README.md` ini.
   - `app/pages/index.vue` untuk urutan section.
   - Komponen section yang akan diubah.
   - Screenshot referensi di folder `public/halaman .../`.
   - `Agent Memory/MEMORY.md` di Obsidian bila sesi memakai memori agen.

2. **Jalankan dev server**

   ```bash
   npm run dev
   ```

3. **Tentukan target**
   - Section dan anchor.
   - File komponen.
   - Asset yang dipakai.
   - Perilaku di viewport 1440×1024 dan mobile (≤700 px).

4. **Ubah komponen**
   - Pertahankan pola `aspect-[1440/1024]` + absolute percentage.
   - Jangan memakai file komposit.
   - Jangan mengubah asset asli; buat turunan baru bila perlu.

5. **Verifikasi visual**
   - Screenshot pada 1440×1024.
   - Screenshot area seam halaman 3 → 4.
   - Cek mobile 390×844 bila mengubah layout.
   - Bandingkan dengan referensi, bukan hanya "terlihat bagus".

6. **Build**

   ```bash
   npm run build
   ```

7. **Catat perubahan**
   - Update `README.md` bila ada keputusan/asset baru.
   - Update `Agent Memory/MEMORY.md` bila memakai protokol memori agen.
   - Sebutkan file yang diubah, keputusan, dan status/next.

---

## 10. Verifikasi dengan agent-browser

Contoh alur yang dipakai di sesi sebelumnya:

```bash
agent-browser set viewport 1440 1024
agent-browser open http://127.0.0.1:3000/
agent-browser wait --load domcontentloaded
```

Matikan smooth scroll sebelum scroll programatik, agar screenshot tidak
tertangkap di tengah animasi:

```bash
agent-browser eval "document.documentElement.style.scrollBehavior='auto'"
```

Scroll ke section:

```bash
agent-browser eval "window.scrollTo(0, document.querySelector('#program').offsetTop)"
```

Screenshot:

```bash
agent-browser screenshot /tmp/opencode/program-section.png
```

### Checklist visual

- [x] Tidak ada scroll horizontal pada viewport yang diuji.
- [x] Setiap section mempertahankan rasio `1440/1024` di desktop.
- [x] Teks tidak terpotong dan tidak menabrak asset lain pada screenshot mobile terakhir.
- [ ] Warna hijau halaman 3 menyambung dengan kanopi wave halaman 4.
- [ ] Tidak ada area cream/putih yang bocor di atas lengkung wave.
- [ ] Supergrafis kiri memudar halus, tidak terpotong garis lurus.
- [ ] Posisi judul dan kartu halaman 4 sejajar dengan referensi.
- [ ] Logo S dan BS tidak terlihat "tidak pas" di wrapper-nya.
- [ ] Anchor navbar menuju section yang benar; `Program` dan `Mitra Kami`
      masih placeholder `#home`.
- [x] `npm run build` lulus.

### Offset referensi (viewport 1440×1024)

Dengan keempat section pada rasio artboard:

| Anchor | Offset |
| --- | --- |
| `#home` | `0` |
| `#about` | `1024` |
| `#mitra` | `2048` |
| `#program` | `3072` |
| `#testimoni` | `4096` |

Offset bisa berubah jika ada section baru, margin, atau tinggi non-artboard.

---

## 11. Jebakan yang sudah ditemukan

1. **Wave transparan**
   `Rectangle 69.png` memiliki area transparan di atas lengkung. Di atas
   halaman cream, area itu memperlihatkan cream dan membuat seam terlihat
   salah. Solusi: `Rectangle 69 - sambungan.png`.

2. **Dua hijau berbeda**
   `forest` = `#193f2d`, artwork = `#1e3c2b`. Mencampur keduanya memunculkan
   garis seam.

3. **Smooth scroll saat screenshot**
   Screenshot bisa tertangkap sebelum scroll selesai. Set
   `scrollBehavior = 'auto'` lebih dulu.

4. **Komposit dianggap asset UI**
   `1.png`–`4.png` adalah screenshot gabungan. Memakainya membuat halaman
   tidak bisa diedit per elemen dan kualitasnya turun.

5. **Absolute positioning + teks panjang**
   Di layar sempit, teks bisa keluar dari kartu. Gunakan `clamp()` dan uji
   minimal 390 px. Jangan mengandalkan tampilan desktop saja.

6. **Tracking judul**
   `tracking-[-0.035em]` mengubah lebar teks. Saat menyamakan dengan referensi,
   ukur bounding box, jangan hanya memperkirakan dari font-size.

7. **Mask supergrafis**
   Fade bawah membuat ornamen menghilang sebelum section berakhir. Ini
   disengaja. Jika fade dihapus, seam akan terlihat terpotong lagi.

8. **Horizontal scroll karena ornamen keluar artboard**
   Elemen dekoratif seperti bunga transisi `-right-[9.4%]` di `AboutDropdown` dapat
   memicu horizontal scrollbar jika parent tidak memotong overflow horizontal.
   Solusi: terapkan `overflow-x: clip` pada `html`, `body` (`main.css`) dan
   `<main id="home">` (`index.vue`).

9. **Ketergantungan file komposit pada Halaman Mitra**
   Menggunakan screenshot `Frame 22.png` bersama overlay tag `<section>` memicu
   kartu ganda (satu tertanam di gambar, satu dari HTML). Halaman mitra Batik Shaho
   kini murni disusun dari aset individual (`Mask group.png`, `Union.png`, dsb.)
   dan native HTML/Tailwind.

10. **Konsistensi tombol kembali**
    Seluruh tombol kembali pada halaman mitra memakai `NuxtLink` dan palet
    tombol "More Info" Home (`bg-forest text-white shadow-lg hover:scale-[1.02]`).
    Tujuan tombol berjenjang:
    - halaman mitra (`/mitra/batik-shaho`, `/mitra/bulau-sayang`) →
      `/#mitra` (section kartu mitra);
    - subhalaman maps/motif/date → halaman mitra masing-masing (label
      `← Kembali`, bukan "Kembali ke Home");
    - detail motif → katalog jenis motif.

---

## 12. Backlog / next steps

- [x] Implementasi halaman 5 Testimoni dari `public/design/5.png`.
      Asset individual sudah dipasang di `TestimonialSection.vue`.
- [x] Anchor navbar terhubung ke section masing-masing.
- [x] Ikon search dihapus dari navbar (fitur pencarian tidak ada).
- [x] Hapus komponen draft (`AboutSection`, `IntroSection`, `DecorativeFlower`)
      dan folder asset lama (2026-11-23).
- [x] Uji mobile 390×844, 403×750, 473×750, tablet 768×1024,
      dan desktop 1440×1024.
- [ ] Ubah tombol navigasi testimoni menjadi carousel aktif jika data testimoni kedua sudah tersedia.
- [ ] Audit aksesibilitas lanjutan: kontras teks. (Focus ring `.pill`, reduced motion, carousel `role=region` sudah.)
- [ ] Optimasi asset: beberapa PNG berukuran besar; pertimbangkan
      `NuxtImg`/kompresi tanpa mengubah tampilan.
- [x] Metadata dasar: `lang="id"`, title per halaman, description.
- [ ] OG image untuk pratinjau share.

---

## 13. Definition of done

Sebuah perubahan dianggap selesai jika:

1. Tampilan pada 1440×1024 sesuai referensi.
2. Tidak ada regresi pada section lain, terutama seam halaman 3 → 4.
3. `npm run build` lulus.
4. Screenshot verifikasi tersimpan/diperiksa.
5. README atau catatan memori diperbarui bila ada keputusan baru.

---

## 14. Lisensi & kredit

Aset visual, logo, dan foto merupakan milik Komunitas Batik Tiga Zaman. Jangan
menggunakan ulang untuk publikasi lain tanpa izin. Kode aplikasi mengikuti
kebutuhan internal proyek.
