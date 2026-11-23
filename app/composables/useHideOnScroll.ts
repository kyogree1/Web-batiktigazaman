interface HideOnScrollOptions {
  /** Di atas posisi ini (px) navbar selalu tampil. */
  top?: number
  /** Jarak gulir ke atas (px) sebelum navbar muncul lagi. */
  revealAfter?: number
}

/**
 * Sembunyikan elemen saat halaman digulir ke bawah, tampilkan lagi saat
 * digulir sedikit ke atas. `hold()` menahan status sementara, misalnya selama
 * smooth scroll dari klik menu, agar navbar tidak muncul menutupi section tujuan.
 */
export function useHideOnScroll({ top = 120, revealAfter = 8 }: HideOnScrollOptions = {}) {
  const hidden = ref(false)
  const scrolled = ref(false)

  let lastY = 0
  let upDistance = 0
  let heldUntil = 0
  let frame = 0

  function update() {
    frame = 0
    const y = Math.max(window.scrollY, 0)
    const delta = y - lastY
    lastY = y
    scrolled.value = y > 0

    if (y <= top) {
      hidden.value = false
      upDistance = 0
      return
    }
    if (performance.now() < heldUntil) {
      hidden.value = true
      return
    }

    if (delta > 0) {
      hidden.value = true
      upDistance = 0
    }
    else if (delta < 0) {
      upDistance -= delta
      if (upDistance >= revealAfter) hidden.value = false
    }
  }

  function onScroll() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  /**
   * Sembunyikan dan abaikan arah gulir sampai smooth scroll selesai
   * (`scrollend`), paling lama `maxMs` untuk browser tanpa `scrollend`.
   */
  function hold(maxMs = 3000) {
    hidden.value = true
    heldUntil = performance.now() + maxMs
  }

  function onScrollEnd() {
    if (!heldUntil) return
    heldUntil = 0
    lastY = window.scrollY
    upDistance = 0
  }

  onMounted(() => {
    lastY = window.scrollY
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scrollend', onScrollEnd)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('scrollend', onScrollEnd)
    if (frame) cancelAnimationFrame(frame)
  })

  return { hidden, scrolled, hold }
}
