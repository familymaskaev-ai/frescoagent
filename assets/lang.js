(function(){var q=new URLSearchParams(location.search).get('lang');var l=q||localStorage.getItem('lang')||((navigator.language||'en').startsWith('ru')?'ru':'en');
function set(x){document.documentElement.lang=x;localStorage.setItem('lang',x);document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===x)})}
document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){set(b.dataset.l)}});set(l)});set(l)})();
