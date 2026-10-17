/* Scroll motion shared by every page:
   1. section headings rise line by line from behind a mask
   2. the role logos on the home page wipe in one after another
   The page is complete without this file; it only adds movement. */
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ── 1. Headings, line by line ──────────────────────────────────── */
  // Split into words (an inline element such as <em> stays one unit), let the
  // browser lay them out, group them by line, then mask each line.
  function splitLines(h) {
    const original = h.innerHTML;
    const parts = [];
    h.childNodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/ +/).forEach(function (w) { if (w.trim()) parts.push(escape(w)); });
      } else if (node.nodeName === 'BR') {
        parts.push('<br>');
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        parts.push(node.outerHTML);
      }
    });
    h.innerHTML = parts.map(function (p) { return p === '<br>' ? p : '<span class="rise-word">' + p + '</span>'; }).join(' ');

    const lines = [];
    let top = null;
    h.querySelectorAll('.rise-word').forEach(function (w) {
      if (top === null || Math.abs(w.offsetTop - top) > 2) { lines.push([]); top = w.offsetTop; }
      lines[lines.length - 1].push(w.innerHTML);
    });
    h.innerHTML = lines.map(function (words, i) {
      return '<span class="rise-line"><span class="rise-line-in" style="animation-delay:' + (i * 0.12) + 's">' + words.join(' ') + '</span></span>';
    }).join('');
    return { original: original, count: lines.length };
  }
  function escape(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  const headings = document.querySelectorAll('.section-heading, .page-title');
  const headObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const h = entry.target;
      headObs.unobserve(h);
      const split = splitLines(h);
      h.classList.add('is-rising');
      const last = h.querySelectorAll(".rise-line-in")[split.count - 1];
      if (!last) { h.innerHTML = split.original; return; }
      // once the last line lands, put the original markup back so it reflows freely
      last.addEventListener('animationend', function () {
        h.innerHTML = split.original;
        h.classList.remove('is-rising');
      }, { once: true });
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  headings.forEach(function (h) {
    if (h.closest('.sr-only')) return;
    // the line motion replaces the old fade on the heading itself
    h.classList.remove('reveal');
    headObs.observe(h);
  });

  /* ── 2. Role logos, one after another ───────────────────────────── */
  const roles = document.querySelector('.roles-grid');
  if (roles) {
    const roleObs = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      roleObs.disconnect();
      roles.classList.add('is-playing');
    }, { threshold: 0.3 });
    roleObs.observe(roles);
  }
})();
