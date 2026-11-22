/**
 * Posisi elemen di atas artboard, memakai angka px yang sama dengan Figma (lebar 1440).
 * Kelas `.layer` di main.css mengubahnya menjadi ukuran proporsional terhadap lebar section.
 */
export function place(x: number, y: number, w?: number, h?: number) {
  return { '--x': x, '--y': y, '--w': w ?? 'initial', '--h': h ?? 'initial' }
}

/** Aset desain baru hasil ekspor Figma. */
export const asset = (path: string) => `/design-baru/${path}`
