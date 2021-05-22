const scrollElem = document.querySelector('.back-to-top')

window.onscroll = function () {
  if(window.pageYOffset < 300 ) {
    scrollElem.style.opacity = "0"
  } else {
    scrollElem.style.opacity = "0.8"
  };
}

scrollElem.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}