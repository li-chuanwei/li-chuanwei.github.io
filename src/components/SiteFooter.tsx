export function SiteFooter() {
  return (
    <footer><div className="shell footer-inner"><span>© {new Date().getFullYear()} CHUANWEI</span><span>MADE SLOWLY, WITH CARE.</span><span>{new Intl.DateTimeFormat('zh-CN').format(new Date())}</span></div></footer>
  )
}
