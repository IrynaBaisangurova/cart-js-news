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

  swiper = new Swiper('.swiper-buttons', {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    on: {
      slideChange: updateButtonsState,
      init: updateButtonsState,
    },
    breakpoints: {
      768: { slidesPerView: 1 },
      1200: { slidesPerView: 1 },
      1440: { slidesPerView: 1 },
    },
  });
});


