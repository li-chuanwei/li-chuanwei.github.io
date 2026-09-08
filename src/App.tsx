import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Moon, Search3, Sun } from 'reicon-react'

type Note = { category: string; date: string; dateTime: string; title: string; summary: string }

const notes: Note[] = [
  { category: '技术实践', date: '2026.07.24', dateTime: '2026-07-24', title: '从一个小工具开始，建立可持续的开发习惯', summary: '让工具服务于注意力，而不是反过来。' },
  { category: '产品思考', date: '2026.07.11', dateTime: '2026-07-11', title: '功能越来越多之后，产品还剩下什么？', summary: '克制并非少做，而是对每一次出现负责。' },
  { category: '效率工具', date: '2026.06.28', dateTime: '2026-06-28', title: '我的桌面、终端和信息输入流', summary: '一套可随时调整的轻量工作流。' },
]

function useRevealOnScroll() {
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

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')
  const [query, setQuery] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  useRevealOnScroll()

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const searchResults = useMemo(() => {
    const keyword = query.trim().toLowerCase()
    if (!keyword) return []
    return notes.filter((note) => `${note.category}${note.title}${note.summary}`.toLowerCase().includes(keyword))
  }, [query])

  const openSearch = () => {
    dialogRef.current?.showModal()
    window.setTimeout(() => searchInputRef.current?.focus(), 30)
  }

  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className="site-header" id="top">
        <div className="shell nav">
          <a className="wordmark" href="#top" aria-label="Chuanwei 首页">Chuanwei<span>.</span></a>
          <nav aria-label="主导航"><a href="#notes">笔记</a><a href="#work">作品</a><a href="#about">关于</a></nav>
          <div className="nav-actions">
            <button className="icon-button search-button" type="button" aria-label="搜索页面内容" onClick={openSearch}><Search3 size={18} aria-hidden="true" /><span>搜索</span></button>
            <button className="icon-button theme-button" type="button" aria-label={darkMode ? '切换浅色模式' : '切换深色模式'} onClick={() => setDarkMode((value) => !value)}>
              {darkMode ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="intro shell" aria-labelledby="intro-title">
          <p className="eyebrow">HELLO, I&apos;M CHUANWEI <i /> BASED IN CHINA</p>
          <div className="intro-grid">
            <h1 id="intro-title">把复杂的事，<br />慢慢讲<span>明白。</span></h1>
            <div className="intro-side"><p>这里记录我关于技术、产品与创造的学习笔记，也收集那些让我停下来思考的瞬间。</p><a className="button" href="#notes">开始阅读 <ArrowDown size={18} aria-hidden="true" /></a></div>
          </div>
          <div className="topic-row" aria-label="内容主题">{['技术实践', '产品思考', '效率工具', '生活观察'].map((topic) => <a href="#notes" key={topic}># {topic}</a>)}</div>
        </section>

        <section className="notes shell" id="notes" aria-labelledby="notes-title">
          <div className="section-head"><div><p className="eyebrow">LATEST NOTES</p><h2 id="notes-title">最近写下的</h2></div><a className="text-link" href="#note-list">全部文章 <ArrowRight size={16} aria-hidden="true" /></a></div>
          <article className="featured-note" data-reveal>
            <a className="feature-art" href="#note-list" aria-label="阅读：关于构建个人知识系统的七个问题"><span>01</span><div className="feature-art__shape" /><em>notes<br />on notes</em></a>
            <div className="featured-note__copy"><p className="meta"><span>思考随笔</span><time dateTime="2026-08-06">2026.08.06</time><span>6 MIN READ</span></p><h3><a href="#note-list">关于构建个人知识系统的<br />七个问题</a></h3><p>不是为了存下更多信息，而是为了在需要的时候，重新找到重要的想法。</p><a className="text-link" href="#note-list">阅读全文 <ArrowRight size={16} aria-hidden="true" /></a></div>
          </article>
          <div className="note-list" id="note-list">
            {notes.map((note) => <article className="note-card" data-reveal key={note.title}><p className="meta"><span>{note.category}</span><time dateTime={note.dateTime}>{note.date}</time></p><h3><a href="#note-list">{note.title}</a></h3><p>{note.summary}</p><a href="#note-list" aria-label={`阅读：${note.title}`} className="arrow-link"><ArrowUpRight size={22} aria-hidden="true" /></a></article>)}
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title"><div className="shell">
          <div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2 id="work-title">正在做的事</h2></div><p className="section-caption">不定期更新<br />持续生长</p></div>
          <div className="work-grid">
            <a href="#work" className="work-card work-card--dark" data-reveal><span className="work-card__index">01 / DIGITAL GARDEN</span><div className="work-card__image work-card__image--grid" aria-hidden="true"><i /><i /><i /><i /></div><h3>个人数字花园</h3><p>把零散的阅读、项目和灵感连成线。</p><b>查看项目 <ArrowRight size={16} aria-hidden="true" /></b></a>
            <a href="#work" className="work-card work-card--paper" data-reveal><span className="work-card__index">02 / ONGOING</span><div className="work-card__image work-card__image--type" aria-hidden="true"><span>GOOD<br />THINGS<br /><em>TAKE TIME.</em></span></div><h3>下一件好事</h3><p>留给尚未命名、但值得投入的想法。</p><b>了解更多 <ArrowRight size={16} aria-hidden="true" /></b></a>
          </div>
        </div></section>

        <section className="about shell" id="about" aria-labelledby="about-title">
          <div className="about-stamp" aria-hidden="true">CW<br /><span>2026</span></div><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">你好，我是<br /><i>Chuanwei。</i></h2></div>
          <div className="about-copy"><p>我喜欢写代码，也喜欢整理知识、观察产品和记录生活。这个网站是我的公开工作台：没有完美答案，只有持续更新的好奇心。</p><div className="about-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a><a href="mailto:hello@example.com">Email <ArrowUpRight size={15} aria-hidden="true" /></a><a href="#top">回到顶部 <ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
        </section>
      </main>

      <footer><div className="shell footer-inner"><span>© {new Date().getFullYear()} CHUANWEI</span><span>MADE SLOWLY, WITH CARE.</span><span>{new Intl.DateTimeFormat('zh-CN').format(new Date())}</span></div></footer>

      <dialog ref={dialogRef} className="search-dialog" aria-labelledby="search-title" onClose={() => setQuery('')}>
        <form method="dialog"><button className="close-button" aria-label="关闭搜索">×</button></form>
        <div className="search-content"><label id="search-title" htmlFor="site-search">搜索本站</label><input ref={searchInputRef} id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} autoComplete="off" placeholder="输入关键词…" /><div className="search-results" aria-live="polite">{!query.trim() && <p>试试“技术”“产品”或“工具”</p>}{query.trim() && searchResults.length === 0 && <p>没有找到相关内容</p>}{searchResults.map((note) => <a href="#note-list" key={note.title} onClick={() => dialogRef.current?.close()}><span>{note.category}</span>{note.title}</a>)}</div></div>
      </dialog>
    </>
  )
}

export default App
