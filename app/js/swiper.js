const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  
  
   
    slidesPerView : 5,
    autoplay: {
      delay: 0
    },
    speed: 5000,
    allowTouchMove: false,
    loop: true,
    breakpoints:{
      900: {
        height: 0,
      }
    }
  
  });

