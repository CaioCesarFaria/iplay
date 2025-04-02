let swiperInstance;

function handleSwiper() {
    if (window.innerWidth <= 768 && !swiperInstance) {
        swiperInstance = new Swiper('.swiper_produtos', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000, // ⏱️ 2 segundos
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (window.innerWidth > 768 && swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = undefined;
    }
}

window.addEventListener('load', handleSwiper);
window.addEventListener('resize', handleSwiper);

let swiperDepoimentos;

function initDepoimentosSwiper() {
    if (window.innerWidth <= 768 && !swiperDepoimentos) {
        swiperDepoimentos = new Swiper('.swiper_clientes', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 3000, // ⏱️ 2 segundos
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (window.innerWidth > 768 && swiperDepoimentos) {
        swiperDepoimentos.destroy(true, true);
        swiperDepoimentos = undefined;
    }
}

window.addEventListener('load', initDepoimentosSwiper);
window.addEventListener('resize', initDepoimentosSwiper);