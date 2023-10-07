document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper(".swiper",{
    spaceBetween: 30,
  
    centerSlides: 'true',
    fade: 'true',
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            centerSlides: 'true',
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 5,
        },
        1095: {
            slidesPerView: 2.5,
        },
        1290:{
          slidesPerView: 2.8,
        },
       
    },

    autoplay: {
      delay: 1000,
    },
    loop: true,
  });
  
  
  
  
  
  
  // const swiper = new Swiper('.swiper', {
  //   breakpoints: {
  //     375: {
  //       slidesPerView: 1.1,
  //       spaceBetween: 10,
  //       // centerSlides: 'true',
  //     },
  //     768: {
  //         slidesPerView: 1.5,
  //         spaceBetween: 5,
  //     },
  //     1110: {
  //       slidesPerView: 2.1,
  //       spaceBetween: 5,
  //   }, 
  //     1440: {
  //         slidesPerView: 2.8,
  //         spaceBetween: 35,
  //     }, 
  //     1600: {
  //       slidesPerView: 3,
  //       spaceBetween: 35,
  //   }, 
      

  //   },
  //   autoplay: {
  //     delay: 1000,
  //   },
  //   loop: true,
  // });
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