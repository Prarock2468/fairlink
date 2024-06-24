$(document).ready(function() {
    $('.img_grid_wrap').on('click', function() {
        $('#imageGrid').addClass('hidden');
        $('#slider').removeClass('hidden');
        
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
        });
    });

    $('#closeButton').on('click', function() {
        $('#slider').addClass('hidden');
        $('#imageGrid').removeClass('hidden');
    });
});