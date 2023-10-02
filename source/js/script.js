document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    breakpoints: {
      375: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        centerSlides: 'true',
      },
      768: {
          slidesPerView: 1.5,
          spaceBetween: 5,
      },
      1110: {
        slidesPerView: 2.1,
        spaceBetween: 5,
    }, 
      1440: {
          slidesPerView: 2.8,
          spaceBetween: 5,
      }, 
      1600: {
        slidesPerView: 3,
        spaceBetween: 20,
    }, 
      

    },
    autoplay: {
      delay: 1000,
    },
    loop: true,
  });
});
console.log(333);


/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  */