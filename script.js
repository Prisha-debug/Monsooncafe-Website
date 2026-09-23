// rain drops (cheap, generated once)
(function(){
  var el = document.getElementById('rain');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var n = window.innerWidth < 640 ? 22 : 40;
  for (var i=0;i<n;i++){
    var d = document.createElement('div');
    d.className = 'drop';
    d.style.left = (Math.random()*100)+'%';
    d.style.animationDuration = (0.7 + Math.random()*0.6)+'s';
    d.style.animationDelay = (Math.random()*2)+'s';
    d.style.height = (40 + Math.random()*50)+'px';
    d.style.opacity = (0.25 + Math.random()*0.35).toFixed(2);
    el.appendChild(d);
  }
})();
// nav solid on scroll
(function(){
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
})();