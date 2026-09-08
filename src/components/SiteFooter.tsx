export function SiteFooter() {
  return (
    <footer><div className="shell footer-inner glass-panel"><span>© {new Date().getFullYear()} CHUANWEI</span><span>BE WILD · CREATIVE · COOL</span><span>{new Intl.DateTimeFormat('zh-CN').format(new Date())}</span></div></footer>
  )
}
