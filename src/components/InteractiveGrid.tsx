import { useEffect, useRef } from 'react'

type Point = { x: number; y: number }

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const pointer: Point = { x: window.innerWidth * 0.72, y: window.innerHeight * 0.36 }
    const current: Point = { ...pointer }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId = 0
    let width = 0
    let height = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const displacedPoint = (x: number, y: number) => {
      const deltaX = x - current.x
      const deltaY = y - current.y
      const distance = Math.hypot(deltaX, deltaY)
      const influence = Math.exp(-(distance * distance) / 36000)
      const strength = 34 * influence
      return {
        x: x + (deltaX / Math.max(distance, 1)) * strength,
        y: y + (deltaY / Math.max(distance, 1)) * strength,
      }
    }

    const drawLine = (vertical: boolean, position: number) => {
      context.beginPath()
      const length = vertical ? height : width
      for (let offset = 0; offset <= length + 18; offset += 18) {
        const point = vertical ? displacedPoint(position, offset) : displacedPoint(offset, position)
        if (offset === 0) context.moveTo(point.x, point.y)
        else context.lineTo(point.x, point.y)
      }
      context.stroke()
    }

    const draw = () => {
      current.x += (pointer.x - current.x) * 0.075
      current.y += (pointer.y - current.y) * 0.075
      context.clearRect(0, 0, width, height)

      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
      const glow = context.createRadialGradient(current.x, current.y, 0, current.x, current.y, 280)
      glow.addColorStop(0, `${accent}36`)
      glow.addColorStop(0.45, `${accent}14`)
      glow.addColorStop(1, `${accent}00`)
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)

      context.strokeStyle = `${accent}2b`
      context.lineWidth = 0.8
      const gap = width < 720 ? 38 : 52
      for (let x = -gap; x <= width + gap; x += gap) drawLine(true, x)
      for (let y = -gap; y <= height + gap; y += gap) drawLine(false, y)

      if (!reduceMotion) frameId = window.requestAnimationFrame(draw)
    }

    const movePointer = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') {
        pointer.x = event.clientX
        pointer.y = event.clientY
      }
    }

    // Canvas 只负责视觉反馈，不拦截页面中的点击和滚动。
    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', movePointer, { passive: true })
    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', movePointer)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-grid" aria-hidden="true" />
}
