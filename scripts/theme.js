(function () {
  var DEFAULT = 'simple';
  var current = localStorage.getItem('theme') || DEFAULT;

  function loadCaveat() {
    if (document.getElementById('caveat-font')) return;
    var link = document.createElement('link');
    link.id = 'caveat-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap';
    document.head.appendChild(link);
  }

  function removeIllustrations() {
    var existing = document.getElementById('theme-illustration');
    if (existing) existing.remove();
  }

  function injectPlayfulIllustration() {
    removeIllustrations();
    var el = document.createElement('div');
    el.id = 'theme-illustration';
    el.style.cssText = 'position:fixed;bottom:60px;right:20px;width:180px;height:180px;pointer-events:none;z-index:1;opacity:0.65;';
    el.innerHTML = '<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" fill="none">'
      // big star top-left
      + '<text x="8" y="38" font-size="30" fill="#FF6B6B" opacity="0.8">✦</text>'
      // small scattered stars
      + '<text x="100" y="18" font-size="16" fill="#4ECDC4" opacity="0.75">✦</text>'
      + '<text x="148" y="44" font-size="12" fill="#A855F7" opacity="0.7">✦</text>'
      + '<text x="58" y="68" font-size="10" fill="#FB923C" opacity="0.65">✦</text>'
      + '<text x="130" y="80" font-size="8" fill="#22C55E" opacity="0.6">✦</text>'
      // dot cluster
      + '<circle cx="136" cy="100" r="5" fill="#FF6B6B" opacity="0.55"/>'
      + '<circle cx="118" cy="112" r="3.5" fill="#4ECDC4" opacity="0.6"/>'
      + '<circle cx="150" cy="114" r="4" fill="#22C55E" opacity="0.55"/>'
      + '<circle cx="128" cy="124" r="3" fill="#A855F7" opacity="0.6"/>'
      + '<circle cx="155" cy="130" r="2.5" fill="#FB923C" opacity="0.55"/>'
      // squiggly line
      + '<path d="M 8 128 Q 22 114 36 128 Q 50 142 64 128 Q 78 114 92 128 Q 106 142 120 128" stroke="#FF6B6B" stroke-width="2.5" stroke-linecap="round" opacity="0.45"/>'
      // heart
      + '<text x="14" y="168" font-size="22" fill="#EC4899" opacity="0.6">♥</text>'
      // smiley circle
      + '<circle cx="148" cy="156" r="16" stroke="#FB923C" stroke-width="2" fill="rgba(251,146,60,0.08)" opacity="0.7"/>'
      + '<circle cx="143" cy="152" r="2.5" fill="#FB923C" opacity="0.75"/>'
      + '<circle cx="153" cy="152" r="2.5" fill="#FB923C" opacity="0.75"/>'
      + '<path d="M 141 161 Q 148 167 155 161" stroke="#FB923C" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>'
      // small sun top area
      + '<circle cx="164" cy="20" r="10" fill="rgba(255,213,79,0.5)" opacity="0.6"/>'
      + '<line x1="164" y1="4" x2="164" y2="10" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.55"/>'
      + '<line x1="164" y1="30" x2="164" y2="36" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.55"/>'
      + '<line x1="148" y1="20" x2="154" y2="20" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.55"/>'
      + '<line x1="174" y1="20" x2="180" y2="20" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.55"/>'
      + '<line x1="152" y1="8" x2="156" y2="12" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.45"/>'
      + '<line x1="176" y1="8" x2="172" y2="12" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.45"/>'
      + '<line x1="152" y1="32" x2="156" y2="28" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.45"/>'
      + '<line x1="176" y1="32" x2="172" y2="28" stroke="#FFD54F" stroke-width="2" stroke-linecap="round" opacity="0.45"/>'
      + '</svg>';
    document.body.appendChild(el);
  }

  function injectLoudIllustration() {
    removeIllustrations();
    var el = document.createElement('div');
    el.id = 'theme-illustration';
    el.style.cssText = 'position:fixed;top:63px;right:0;width:240px;height:240px;pointer-events:none;z-index:0;';
    el.innerHTML = '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" fill="none">'
      // filled corner triangle
      + '<polygon points="240,0 240,240 0,0" fill="#FFE600" opacity="0.05"/>'
      // diagonal accent lines from top-right
      + '<line x1="60" y1="0" x2="240" y2="180" stroke="#FFE600" stroke-width="1" opacity="0.1"/>'
      + '<line x1="100" y1="0" x2="240" y2="140" stroke="#FFE600" stroke-width="1" opacity="0.09"/>'
      + '<line x1="140" y1="0" x2="240" y2="100" stroke="#FFE600" stroke-width="1.5" opacity="0.12"/>'
      + '<line x1="180" y1="0" x2="240" y2="60" stroke="#FFE600" stroke-width="1.5" opacity="0.1"/>'
      + '<line x1="0" y1="0" x2="240" y2="240" stroke="#FFE600" stroke-width="0.75" opacity="0.07"/>'
      // circle accent
      + '<circle cx="195" cy="45" r="36" stroke="#FFE600" stroke-width="1.5" opacity="0.18" fill="none"/>'
      + '<circle cx="195" cy="45" r="5" fill="#FFE600" opacity="0.35"/>'
      // outer ring
      + '<circle cx="195" cy="45" r="52" stroke="#FFE600" stroke-width="0.75" opacity="0.08" fill="none"/>'
      // corner bracket lines
      + '<line x1="210" y1="0" x2="240" y2="0" stroke="#FFE600" stroke-width="3" opacity="0.35"/>'
      + '<line x1="240" y1="0" x2="240" y2="30" stroke="#FFE600" stroke-width="3" opacity="0.35"/>'
      + '</svg>';
    document.body.appendChild(el);

    // Also add a bottom-left corner accent
    if (!document.getElementById('theme-illustration-2')) {
      var el2 = document.createElement('div');
      el2.id = 'theme-illustration-2';
      el2.style.cssText = 'position:fixed;bottom:0;left:0;width:200px;height:200px;pointer-events:none;z-index:0;';
      el2.innerHTML = '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">'
        + '<polygon points="0,200 200,200 0,0" fill="#FFE600" opacity="0.04"/>'
        + '<line x1="0" y1="140" x2="60" y2="200" stroke="#FFE600" stroke-width="1.5" opacity="0.12"/>'
        + '<line x1="0" y1="100" x2="100" y2="200" stroke="#FFE600" stroke-width="1" opacity="0.1"/>'
        + '<line x1="0" y1="60" x2="140" y2="200" stroke="#FFE600" stroke-width="1" opacity="0.08"/>'
        // corner bracket
        + '<line x1="0" y1="170" x2="0" y2="200" stroke="#FFE600" stroke-width="3" opacity="0.35"/>'
        + '<line x1="0" y1="200" x2="30" y2="200" stroke="#FFE600" stroke-width="3" opacity="0.35"/>'
        + '</svg>';
      document.body.appendChild(el2);
    }
  }

  function removeAllIllustrations() {
    removeIllustrations();
    var el2 = document.getElementById('theme-illustration-2');
    if (el2) el2.remove();
  }

  function applyTheme(theme) {
    current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'playful') {
      loadCaveat();
      injectPlayfulIllustration();
    } else if (theme === 'loud') {
      injectLoudIllustration();
    } else {
      removeAllIllustrations();
    }
    document.querySelectorAll('.swatch').forEach(function (s) {
      s.classList.toggle('active', s.dataset.theme === theme);
    });
  }

  // Apply immediately to prevent FOUC
  document.documentElement.setAttribute('data-theme', current);
  if (current === 'playful') loadCaveat();

  document.addEventListener('DOMContentLoaded', function () {
    // Inject illustrations for current theme on load
    if (current === 'playful') injectPlayfulIllustration();
    else if (current === 'loud') injectLoudIllustration();

    var pickerEl = document.getElementById('themePicker');
    var tabEl    = document.getElementById('themeTab');

    document.querySelectorAll('.swatch').forEach(function (s) {
      s.classList.toggle('active', s.dataset.theme === current);
      s.addEventListener('click', function () {
        applyTheme(this.dataset.theme);
        if (pickerEl) pickerEl.classList.remove('open');
      });
    });

    if (tabEl) {
      tabEl.addEventListener('click', function (e) {
        e.stopPropagation();
        if (pickerEl) pickerEl.classList.toggle('open');
      });
    }

    document.addEventListener('click', function (e) {
      if (pickerEl && !pickerEl.contains(e.target)) {
        pickerEl.classList.remove('open');
      }
    });
  });
})();
