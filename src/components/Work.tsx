export function Work() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-head"><span className="section-index">02</span><div><p className="eyebrow">SELECTED WORK</p><h2 id="work-title">正在做的事</h2></div></div>
        <div className="work-grid">
          <article className="work-card glass-panel" data-reveal data-tilt>
            <span className="card-index">01 / DIGITAL GARDEN</span>
            <div className="work-visual work-visual--garden" aria-hidden="true"><i /><i /><i /><i /><strong>IDEAS<br />KEEP<br />GROWING</strong></div>
            <h3>个人数字花园</h3><p>把零散的阅读、项目和灵感连成线。</p><span className="status">ONGOING</span>
          </article>
          <article className="work-card work-card--offset glass-panel" data-reveal data-tilt>
            <span className="card-index">02 / EXPERIMENT</span>
            <div className="work-visual work-visual--type" aria-hidden="true"><span>GOOD<br />THINGS<br /><em>TAKE TIME.</em></span></div>
            <h3>下一件好事</h3><p>留给尚未命名、但值得投入的想法。</p><span className="status">EXPLORING</span>
          </article>
        </div>
      </div>
    </section>
  )
}
