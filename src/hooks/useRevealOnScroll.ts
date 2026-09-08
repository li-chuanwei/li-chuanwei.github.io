import { useEffect } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => { element.dataset.visible = 'true' })
      return
    }

    // 元素进入视口后只播放一次，避免滚动时反复闪烁。
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ;(entry.target as HTMLElement).dataset.visible = 'true'
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
