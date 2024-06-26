var swiperding = new Swiper('.dining_swiper_container', {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-dining-prev",
        prevEl: ".swiper-dining-next",
      },
      parallax:true,
    breakpoints: {
        1920: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        769:{
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});



var swiperoffer = new Swiper('.offer_swiper_container', {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-dining-next",
        prevEl: ".swiper-dining-prev",
      },
    breakpoints: {
        1920: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1028: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});