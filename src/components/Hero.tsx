import { ArrowDown } from 'reicon-react'

export function Hero() {
  return (
    <section className="intro shell" aria-labelledby="intro-title">
      <p className="eyebrow">HELLO, I&apos;M CHUANWEI <i /> BASED IN CHINA</p>
      <div className="intro-grid">
        <h1 id="intro-title">把复杂的事，<br />慢慢讲<span>明白。</span></h1>
        <div className="intro-side">
          <p>这里记录我关于技术、产品与创造的学习笔记，也收集那些让我停下来思考的瞬间。</p>
          <a className="button" href="#blog">查看博客 <ArrowDown size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
