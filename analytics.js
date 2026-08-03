// Emily Paige & Co. GA4 event tracking
// Fires custom events on key conversion clicks so we can see what's actually driving leads.
// Wire elements with data-track="event_name" to have their clicks reported to GA4.
(function() {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
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
})();
