import { ArrowUpRight } from 'reicon-react'

export function About() {
  return (
    <section className="about shell" id="about" aria-labelledby="about-title">
      <div className="section-head"><span className="section-index">03</span><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">保持好奇，<br /><i>持续创造。</i></h2></div></div>
      <div className="about-card glass-panel" data-reveal>
        <div className="about-stamp" aria-hidden="true">CW<br /><span>EST. 2026</span></div>
        <p>你好，我是 Chuanwei。我喜欢写代码，也喜欢整理知识、观察产品和记录生活。这个网站是我的公开工作台：没有完美答案，只有持续更新的好奇心。</p>
        <div className="about-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a><a href="mailto:hello@example.com">Email <ArrowUpRight size={15} aria-hidden="true" /></a><a href="#top">回到顶部 <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      </div>
    </section>
  )
}
