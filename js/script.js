var swiper = new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination',
    },

});

var swiper = new Swiper('.swiper2', {
    slidesPerView: 1.7,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
});