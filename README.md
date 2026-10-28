# Komunitas Batik Tiga Zaman — Website

Website profil Komunitas Batik Tiga Zaman. Tampilan berupa satu halaman panjang
yang terdiri dari beberapa "halaman" bertumpuk, mengikuti artboard desain
`1440 × 1024`.

Fokus proyek saat ini adalah **kesetiaan visual terhadap desain**: posisi,
proporsi, warna, dan tipografi dibuat mendekati screenshot referensi, bukan
menggunakan layout responsif konvensional.

---

## 1. Status pengerjaan

| Halaman | Section / anchor | File | Status |
| --- | --- | --- | --- |
| 1. Hero | `#home` | `app/pages/index.vue` | Selesai |
| 2. About Us (dekoratif) | `#about` | `app/components/AboutDropdown.vue` | Selesai |
| 3. About Us (detail + peta) | `#about-detail` | `app/components/AboutUsDetailSection.vue` | Selesai |
| 4. What You Learn With Us | `#program` | `app/components/ProgramSection.vue` | Selesai |
| 5. Testimoni | `#partners` (rencana) | `app/components/TestimonialSection.vue` (draft, belum dipasang) | Belum |

Catatan:

- Halaman 1–4 sudah tersusun berurutan di `app/pages/index.vue`
  (`Hero → AboutDropdown → AboutUsDetailSection → ProgramSection`).
- `AboutSection.vue`, `IntroSection.vue`, dan `TestimonialSection.vue` adalah
  komponen lama/draft yang **belum dipakai**. Jangan hapus tanpa konfirmasi.
- Referensi halaman kelima ada di `public/design/5.png` (Testimoni).

---

## 2. Stack

| Bagian | Teknologi |
| --- | --- |
| Framework | Nuxt 4 (`^4.6.1`) |
| UI | Vue 3 SFC (`<script setup lang="ts">`) |
| Styling | Tailwind CSS 3.4 via `@nuxtjs/tailwindcss` |
| Bahasa | TypeScript |
| Font | Nunito (Google Fonts, diimpor dari `app/assets/css/main.css`) |
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
│  ├─ app.vue
│  ├─ assets/css/main.css          # import Nunito + base style
│  ├─ layouts/default.vue
│  ├─ pages/index.vue              # urutan semua section
│  └─ components/
│     ├─ AppNavbar.vue             # navbar hero
│     ├─ AboutDropdown.vue         # halaman 2
│     ├─ AboutUsDetailSection.vue  # halaman 3
│     ├─ ProgramSection.vue        # halaman 4
│     ├─ DecorativeFlower.vue      # bunga SVG/CSS (draft halaman 5)
│     ├─ AboutSection.vue          # draft, belum dipakai
│     ├─ IntroSection.vue          # draft, belum dipakai
│     └─ TestimonialSection.vue    # draft halaman 5, belum dipakai
├─ public/
│  ├─ halaman pertama/             # asset hero
│  ├─ halaman kedua/               # asset halaman 2
│  ├─ halaman ketiga/              # asset halaman 3
│  ├─ halaman keempat/             # asset halaman 4
│  └─ design/                      # referensi desain tambahan
├─ tailwind.config.ts              # token warna & font
├─ nuxt.config.ts
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

Navbar terpisah dari hero dan berada di dalam area hero setinggi `11.2%`.

| Link | Target | Keterangan |
| --- | --- | --- |
| About us | `#about-detail` | halaman 3 |
| Program | `#home` | masih placeholder |
| Mitra Kami | `#home` | masih placeholder |
| Home Page | `#home` | hero |

Tombol "More Info" di hero menuju `#about` (halaman 2). Tombol search di navbar
belum memiliki fungsi.

---

## 7. Asset & aturan pakai

### 7.1 Folder asset

| Folder | Isi | Catatan |
| --- | --- | --- |
| `public/halaman pertama/` | `IMG_3486 1.png`, `logo.png`, `cewe.png`, `cowo.png` | `1.png` hanya referensi komposit |
| `public/halaman kedua/` | `Rectangle 70.png`, `Rectangle 64.png`, `Vector(1).png` | `2.png` hanya referensi |
| `public/halaman ketiga/` | peta, supergrafis, logo S/BS | `3.png` dan `image.png` hanya referensi |
| `public/halaman keempat/` | wave, bunga, ellipse, ilustrasi | `4.png` hanya referensi |

**Jangan memakai file komposit** (`1.png`, `2.png`, `3.png`, `4.png`,
`image.png`) sebagai UI. File itu hanya screenshot acuan. UI harus disusun dari
asset individual.

### 7.2 URL encoding

Nama file mengandung spasi. Di dalam `src` Vue, spasi di-encode:

```html
<img src="/halaman%20keempat/Vector(2).png">
```

Jangan mengganti nama asset tanpa memperbarui semua referensi.

### 7.3 Asset turunan penting

| File | Asal | Kenapa ada |
| --- | --- | --- |
| `Rectangle 69 - sambungan.png` | `Rectangle 69.png` | Area transparan di atas lengkung wave memperlihatkan cream halaman 3. Versi ini mengisi kanopi atas dengan hijau `#1e3c2b` dan mempertahankan lengkung asli. |

Gunakan `Rectangle 69 - sambungan.png` di `ProgramSection.vue`. Jangan kembali
ke `Rectangle 69.png` kecuali seam sudah diuji ulang.

### 7.4 Logo kartu halaman 3

- Logo `S` (`IMG_4822 1.png`): memakai wrapper lingkaran hitam, `aspect-ratio: 1`.
- Logo `BS` (`IMG_4819 3.png`): transparan, memakai rasio asli `239 / 292`,
  **tanpa** wrapper lingkaran.

### 7.5 Fade supergrafis

Supergrafis kiri halaman 3 (`.community-supergraphic`) memakai mask:

```css
mask-image: linear-gradient(to bottom, #000 82%, transparent 99%);
```

Tujuannya agar ornamen memudar sebelum wave halaman 4, tidak terlihat terpotong.

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

- [ ] Tidak ada scroll horizontal.
- [ ] Setiap section mempertahankan rasio `1440/1024`.
- [ ] Teks tidak terpotong dan tidak menabrak asset lain.
- [ ] Warna hijau halaman 3 menyambung dengan kanopi wave halaman 4.
- [ ] Tidak ada area cream/putih yang bocor di atas lengkung wave.
- [ ] Supergrafis kiri memudar halus, tidak terpotong garis lurus.
- [ ] Posisi judul dan kartu halaman 4 sejajar dengan referensi.
- [ ] Logo S dan BS tidak terlihat "tidak pas" di wrapper-nya.
- [ ] Anchor navbar menuju section yang benar.
- [ ] `npm run build` lulus.

### Offset referensi (viewport 1440×1024)

Dengan keempat section pada rasio artboard:

| Anchor | Offset |
| --- | --- |
| `#home` | `0` |
| `#about` | `1024` |
| `#about-detail` | `2048` |
| `#program` | `3072` |

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

---

## 12. Backlog / next steps

- [ ] Implementasi halaman 5 Testimoni dari `public/design/5.png`.
      Draft `TestimonialSection.vue` belum memakai asset dan layout yang tepat.
- [ ] Lengkapi anchor navbar: "Program" dan "Mitra Kami" masih `#home`.
- [ ] Implementasi atau hapus tombol search di navbar.
- [ ] Rapikan komponen draft yang tidak dipakai (`AboutSection.vue`,
      `IntroSection.vue`) setelah konfirmasi.
- [ ] Uji mobile 390×844 dan tablet 768×1024.
- [ ] Audit aksesibilitas: alt text ilustrasi dekoratif, kontras teks, focus ring.
- [ ] Optimasi asset: beberapa PNG berukuran besar; pertimbangkan
      `NuxtImg`/kompresi tanpa mengubah tampilan.
- [ ] Tambahkan metadata SEO (title, description, OG image).

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
