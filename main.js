import './js/hero.js';
import './js/counter.js';
import './js/mod.js';
import './js/about-me.js';
import './js/reviews.js';
import './js/buttons.js';



document.getElementById('scrollToTop')?.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('year').textContent = new Date().getFullYear();



