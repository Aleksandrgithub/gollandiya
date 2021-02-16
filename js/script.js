document.querySelector('#btn-1').addEventListener('change', () => {
    document.querySelector('main').classList.toggle('fix_scroll') + document.querySelector('footer').classList.toggle('fix_scroll');
  });

function backToTop() {

    let button1 = $('.back-to-top');
    let button2 = $('.back-to-main');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 100) {
            button1.fadeIn();
        } else {
            button1.fadeOut();
        }
        button2.fadeIn();
    });

    button1.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();