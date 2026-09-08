import { ArrowDown, ArrowUpRight } from 'reicon-react'

export function Hero() {
  return (
    <section className="intro shell" aria-labelledby="intro-title">
      <div className="hero-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-copy">
        <p className="eyebrow glass-label">HELLO, I&apos;M CHUANWEI · BASED IN CHINA</p>
        <h1 id="intro-title">创造一些<br /><span>有意思的事。</span></h1>
      </div>
      <aside className="intro-card glass-panel" data-tilt>
        <span className="card-index">00 / INTRO</span>
        <p>我写代码，也整理知识。这里收集技术、产品与创造过程中的长期思考。</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#blog">向下探索 <ArrowDown size={18} aria-hidden="true" /></a>
          <a className="round-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="访问 GitHub"><ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </aside>
      <p className="scroll-hint">SCROLL CAREFULLY <span>慢慢向下</span></p>
    </section>
  )
}
