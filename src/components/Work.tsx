import { ArrowRight } from 'reicon-react'

export function Work() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title"><div className="shell">
      <div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2 id="work-title">正在做的事</h2></div><p className="section-caption">不定期更新<br />持续生长</p></div>
      <div className="work-grid">
        <a href="#work" className="work-card work-card--dark" data-reveal><span className="work-card__index">01 / DIGITAL GARDEN</span><div className="work-card__image work-card__image--grid" aria-hidden="true"><i /><i /><i /><i /></div><h3>个人数字花园</h3><p>把零散的阅读、项目和灵感连成线。</p><b>查看项目 <ArrowRight size={16} aria-hidden="true" /></b></a>
        <a href="#work" className="work-card work-card--paper" data-reveal><span className="work-card__index">02 / ONGOING</span><div className="work-card__image work-card__image--type" aria-hidden="true"><span>GOOD<br />THINGS<br /><em>TAKE TIME.</em></span></div><h3>下一件好事</h3><p>留给尚未命名、但值得投入的想法。</p><b>了解更多 <ArrowRight size={16} aria-hidden="true" /></b></a>
      </div>
    </div></section>
  )
}
