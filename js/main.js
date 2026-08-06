(() => {
  const loading = document.querySelector('.loading');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (loading && !reduceMotion) setTimeout(() => loading.classList.add('done'), 1250);
  if (loading && reduceMotion) loading.remove();

  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(item => reveal.observe(item));

  const dialog = document.querySelector('.search-dialog');
  const search = document.querySelector('.search-button');
  const input = document.querySelector('#site-search');
  search.addEventListener('click', () => { dialog.showModal(); search.setAttribute('aria-expanded', 'true'); setTimeout(() => input.focus(), 40); });
  dialog.addEventListener('close', () => search.setAttribute('aria-expanded', 'false'));
  input.addEventListener('input', event => {
    const term = event.target.value.trim();
    document.querySelector('.search-result').textContent = term ? `暂未建立全文索引：正在查找「${term}」` : '试试「知识」「产品」或「工具」';
  });

  const theme = document.querySelector('.theme-button');
  theme.addEventListener('click', () => { document.body.classList.toggle('dark'); theme.setAttribute('aria-label', document.body.classList.contains('dark') ? '切换浅色模式' : '切换深色模式'); });
  document.querySelector('#year').textContent = new Date().getFullYear();
  document.querySelector('#date').textContent = new Intl.DateTimeFormat('en-GB', { year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date()).replaceAll('/', '.');
})();
