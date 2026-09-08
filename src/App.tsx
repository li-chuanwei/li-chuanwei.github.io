import { About } from './components/About'
import { Blog } from './components/Blog'
import { Hero } from './components/Hero'
import { InteractiveGrid } from './components/InteractiveGrid'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { Work } from './components/Work'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { useGlassTilt } from './hooks/useGlassTilt'

function App() {
  useRevealOnScroll()
  useGlassTilt()

  return (
    <>
      <InteractiveGrid />
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Blog />
        <Work />
        <About />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
