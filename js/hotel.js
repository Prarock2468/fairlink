document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('viewMore').addEventListener('click', function() {
        document.getElementById('imageGrid').classList.add('hidden');
        document.getElementById('slider').classList.remove('hidden');
        
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
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        document.getElementById('slider').classList.add('hidden');
        document.getElementById('imageGrid').classList.remove('hidden');
    });
});
