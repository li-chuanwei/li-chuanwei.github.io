import { useLayoutEffect, useState } from 'react'
import { Moon, Sun } from 'reicon-react'

export function SiteHeader() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') !== 'light')

  useLayoutEffect(() => {
    // 默认使用深色主题；访问者主动选择浅色后仍保留其偏好。
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode ? '#0B2225' : '#FCF9E8')
  }, [darkMode])

  return (
    <header className="site-header" id="top">
      <div className="shell header-inner glass-panel">
        <a className="wordmark" href="#top" aria-label="Chuanwei 首页">Chuanwei<span>.</span></a>
        <p className="header-note">DESIGN · CODE · NOTES</p>
        <button className="icon-button theme-button" type="button" aria-label={darkMode ? '切换浅色模式' : '切换深色模式'} onClick={() => setDarkMode((value) => !value)}>
          {darkMode ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
