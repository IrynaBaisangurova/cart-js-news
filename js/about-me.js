document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item, index) => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');

    if (index === 0) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      accordionItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-content').style.maxHeight = 0;
      });
      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
});

// import Swiper from 'swiper';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css/navigation';


// document.addEventListener('DOMContentLoaded', () => {
//   const swiper = new Swiper('.swiper-about', {
//     slidesPerView: 2,
//     modules: [Navigation, Pagination],
//     navigation: {
//       nextEl: '.swiper-button-next-2',
//     },
//     loop: true,
//     watchOverflow: false,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     mousewheel: true,

//     loopFillGroupWithBlank: true,
//     breakpoints: {
//       640: {
//         slidesPerView: 3,
//       },

//       768: {
//         slidesPerView: 3,
//       },

//       1440: {
//         slidesPerView: 4,
//       },
//     },
//   });



// });
document.addEventListener('DOMContentLoaded', () => {

  const prevButton = document.querySelector('.button-prev');
  const nextButton = document.querySelector('.button-next');

  let swiper

  function updateButtonsState() {
      
    if (!swiper) return;

    if (swiper.isBeginning) {
      prevButton.setAttribute('disabled', 'true');
    } else {
      prevButton.removeAttribute('disabled');
    }

    if (swiper.isEnd) {
      nextButton.setAttribute('disabled', 'true');
    } else {
      nextButton.removeAttribute('disabled');
    }
  }

  swiper = new Swiper('.swiper-about', {
    watchOverflow: false,
    loop: true,
    direction: 'horizontal',
    simulateTouch: true,
    grabCursor: true,
    slidesPerView: 2,
    speed: 1000,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next-2',
    
    },
    on: {
      slideChange: updateButtonsState,
      init: updateButtonsState,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
},
  });
});


