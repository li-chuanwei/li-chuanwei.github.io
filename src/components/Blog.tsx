export function Blog() {
  return (
    <section className="blog shell" id="blog" aria-labelledby="blog-title">
      <div className="section-head">
        <span className="section-index">01</span>
        <div><p className="eyebrow">WORDS &amp; IDEAS</p><h2 id="blog-title">我的博客</h2></div>
      </div>
      <div className="blog-empty glass-panel" data-reveal data-tilt>
        <p>内容正在整理中</p>
        <span>以后将在这里收录我发布于 CSDN 和语雀的笔记。</span>
        <div className="source-line" aria-hidden="true"><i>CSDN</i><b /><i>语雀</i></div>
      </div>
    </section>
  )
}
