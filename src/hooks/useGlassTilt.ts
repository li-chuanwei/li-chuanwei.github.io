import { useEffect } from 'react'

export function useGlassTilt() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]')

    const listeners = Array.from(cards).map((card) => {
      const move = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return
        const rect = card.getBoundingClientRect()
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -4
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 4
        card.style.setProperty('--tilt-x', `${rotateX}deg`)
        card.style.setProperty('--tilt-y', `${rotateY}deg`)
        card.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
        card.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
      }
      const leave = () => {
        card.style.setProperty('--tilt-x', '0deg')
        card.style.setProperty('--tilt-y', '0deg')
      }
      card.addEventListener('pointermove', move)
      card.addEventListener('pointerleave', leave)
      return { card, move, leave }
    })

    return () => listeners.forEach(({ card, move, leave }) => {
      card.removeEventListener('pointermove', move)
      card.removeEventListener('pointerleave', leave)
    })
  }, [])
}
