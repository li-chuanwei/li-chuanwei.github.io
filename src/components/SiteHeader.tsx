import { useEffect, useState } from 'react'
import { Moon, Sun } from 'reicon-react'

export function SiteHeader() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    // 将主题同步到根节点，并记住访问者的选择。
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <header className="site-header" id="top">
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label="Chuanwei 首页">Chuanwei<span>.</span></a>
        <button
          className="icon-button theme-button"
          type="button"
          aria-label={darkMode ? '切换浅色模式' : '切换深色模式'}
          onClick={() => setDarkMode((value) => !value)}
        >
          {darkMode ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
