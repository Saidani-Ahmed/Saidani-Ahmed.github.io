(function(){
  var root = document.documentElement, btn = document.getElementById('langBtn');
  function setLang(l){
    root.setAttribute('data-lang', l); root.setAttribute('lang', l);
    if (btn) btn.textContent = l === 'fr' ? 'EN' : 'FR';
    var t = root.getAttribute('data-title-' + l); if (t) document.title = t;
    try { localStorage.setItem('lang', l); } catch(e){}
    document.dispatchEvent(new CustomEvent('langchange', {detail: l}));
  }
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch(e){}
  setLang(saved || ((navigator.language || 'fr').slice(0,2) === 'fr' ? 'fr' : 'en'));
  if (btn) btn.addEventListener('click', function(){ setLang(root.getAttribute('data-lang') === 'fr' ? 'en' : 'fr'); });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
