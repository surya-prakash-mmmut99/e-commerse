
     var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 500,
          stretch: 10,
          depth:3000,
          modifier: 1,
          slideShadows:true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    