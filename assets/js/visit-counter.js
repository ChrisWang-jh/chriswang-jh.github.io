(() => {
  "use strict";

  const container = document.getElementById("busuanzi_container_site_pv");
  const value = document.getElementById("busuanzi_value_site_pv");
  const status = document.querySelector("[data-visit-status]");
  if (!container || !value || !status) return;

  status.textContent = "Loading views…";

  // Local previews must not contribute to the public site's count.
  const hostname = window.location.hostname;
  if (window.location.protocol === "file:" || hostname === "localhost" ||
      hostname.endsWith(".localhost") || hostname === "[::1]" ||
      /^127\./.test(hostname) || hostname === "0.0.0.0") {
    status.textContent = "Views available on the live site";
    return;
  }

  let loaded = false;
  const showUnavailable = () => {
    if (!loaded) status.textContent = "Views temporarily unavailable";
  };
  const timeout = window.setTimeout(showUnavailable, 8000);

  // The service is the source of truth; never invent a local fallback count.
  // Keep observing after a timeout so a late response can still be displayed.
  const observer = new MutationObserver(() => {
    if (!/^\d+$/.test(value.textContent.trim())) return;
    loaded = true;
    container.hidden = false;
    status.hidden = true;
    window.clearTimeout(timeout);
    observer.disconnect();
  });
  observer.observe(value, { childList: true, characterData: true, subtree: true });

  const script = document.createElement("script");
  script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  script.async = true;
  script.onerror = () => {
    window.clearTimeout(timeout);
    showUnavailable();
  };
  document.head.appendChild(script);
})();
