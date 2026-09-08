export function Blog() {
  return (
    <section className="blog shell" id="blog" aria-labelledby="blog-title">
      <div className="section-head">
        <div><p className="eyebrow">MY BLOG</p><h2 id="blog-title">我的博客</h2></div>
      </div>
      <div className="blog-empty" data-reveal>
        <p>内容正在整理中</p>
        <span>以后将在这里收录我发布于 CSDN 和语雀的笔记。</span>
      </div>
    </section>
  )
}
