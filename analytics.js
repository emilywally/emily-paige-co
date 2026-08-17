// Emily Paige & Co. — analytics, sticky CTA, exit-intent, social share
// Fires GA4 events on data-track clicks, shows a floating "Start Here"
// CTA after the visitor scrolls past the hero, and offers the Local
// Guide once as an exit-intent modal.
(function() {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  // -------- GA4 event tracking --------
  ready(function() {
    if (typeof gtag !== 'function') return;
    document.querySelectorAll('[data-track]').forEach(function(el) {
      el.addEventListener('click', function() {
        var eventName = el.dataset.track;
        var label = el.dataset.trackLabel || (el.textContent || '').trim().slice(0, 100);
        var payload = {
          event_category: 'engagement',
          event_label: label,
          page_location: window.location.href,
          page_path: window.location.pathname
        };
        var href = el.getAttribute('href') || '';
        if (href) payload.link_url = href;
        gtag('event', eventName, payload);
      });
    });
  });

  // -------- Sticky desktop CTA --------
  ready(function() {
    // Skip on Start Here anchor page (they're already there)
    if (window.location.hash === '#start') return;
    var cta = document.createElement('div');
    cta.className = 'sticky-cta';
    cta.setAttribute('aria-hidden', 'true');
    cta.innerHTML = '<a href="/#start" data-track="sticky_cta_click">Start Here &rarr;</a>';
    document.body.appendChild(cta);
    var revealAt = 500;
    function onScroll() {
      if (window.scrollY > revealAt) {
        cta.classList.add('visible');
        cta.setAttribute('aria-hidden', 'false');
      } else {
        cta.classList.remove('visible');
        cta.setAttribute('aria-hidden', 'true');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  // -------- Exit intent modal (desktop only, once per visitor) --------
  ready(function() {
    if (window.innerWidth < 720) return;                      // skip on mobile
    try { if (localStorage.getItem('epco_exit_seen')) return; } catch (e) {}
    var shown = false;
    function makeModal() {
      var wrap = document.createElement('div');
      wrap.className = 'exit-modal-backdrop';
      wrap.innerHTML = ''
        + '<div class="exit-modal" role="dialog" aria-labelledby="exit-title" aria-modal="true">'
        + '  <button class="exit-close" aria-label="Close">&times;</button>'
        + '  <span class="exit-eyebrow">Before you go</span>'
        + '  <h3 id="exit-title">Grab the Milwaukee Local Guide.</h3>'
        + '  <p>My honest, opinionated take on where to live, eat, walk, and settle in. Free, delivered by email.</p>'
        + '  <a href="https://emilywalczak.myflodesk.com/g89xageera" target="_blank" rel="noopener" class="btn btn-primary" data-track="exit_intent_guide_click">Send Me the Guide</a>'
        + '</div>';
      document.body.appendChild(wrap);
      var close = function() {
        wrap.classList.remove('open');
        setTimeout(function() { wrap.remove(); }, 300);
      };
      wrap.querySelector('.exit-close').addEventListener('click', close);
      wrap.addEventListener('click', function(e) { if (e.target === wrap) close(); });
      document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
      });
      requestAnimationFrame(function() { wrap.classList.add('open'); });
      if (typeof gtag === 'function') {
        gtag('event', 'exit_intent_shown', { event_category: 'engagement' });
      }
    }
    document.addEventListener('mouseout', function(e) {
      if (shown) return;
      if (e.clientY > 0) return;                              // only fire on top edge
      if (e.relatedTarget) return;
      shown = true;
      try { localStorage.setItem('epco_exit_seen', '1'); } catch (err) {}
      makeModal();
    });
  });

  // -------- Social share on blog posts --------
  ready(function() {
    document.querySelectorAll('.post-share [data-share-copy]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var url = window.location.href;
        var doCopy = function() {
          var toast = btn.parentElement.querySelector('.copied-toast');
          if (toast) {
            toast.classList.add('show');
            setTimeout(function() { toast.classList.remove('show'); }, 1600);
          }
        };
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(doCopy);
        } else {
          var ta = document.createElement('textarea');
          ta.value = url; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); doCopy(); } catch (e) {}
          document.body.removeChild(ta);
        }
        if (typeof gtag === 'function') gtag('event', 'post_share_copy_link', { event_category: 'engagement' });
      });
    });
  });

  // -------- Dynamic "Latest from the Journal" homepage feed --------
  // Renders the N most recent blog posts from /blog/posts.json.
  // To add a new post: add a post file AND prepend its entry to posts.json.
  ready(function() {
    var host = document.querySelector('[data-latest-posts]');
    if (!host) return;
    var limit = parseInt(host.getAttribute('data-latest-posts'), 10) || 2;
    fetch('/blog/posts.json?v=' + Date.now())
      .then(function(r) { return r.json(); })
      .then(function(posts) {
        posts.sort(function(a, b) { return b.date.localeCompare(a.date); });
        var html = posts.slice(0, limit).map(function(p) {
          var img = p.image ? '<a href="/blog/' + p.slug + '.html" class="blog-preview-hero"><img src="' + p.image + '" alt="" loading="lazy"></a>' : '';
          return '<article class="blog-preview blog-preview-photo">'
            + img
            + '<div class="blog-preview-body">'
            + '  <div class="post-meta">' + p.dateDisplay + ' &middot; ' + p.category + '</div>'
            + '  <h3><a href="/blog/' + p.slug + '.html">' + p.title + '</a></h3>'
            + '  <p>' + p.excerpt + '</p>'
            + '  <a href="/blog/' + p.slug + '.html" class="btn-ghost">Read the post</a>'
            + '</div>'
            + '</article>';
        }).join('');
        host.innerHTML = html;
      })
      .catch(function() { /* leave fallback content in place */ });
  });
})();
