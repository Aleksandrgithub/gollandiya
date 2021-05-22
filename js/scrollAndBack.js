const scrollElem = document.querySelector('.back-to-top')
const backHomeElem = document.querySelector('.back-to-home')

window.onscroll = function () {
  if(window.pageYOffset < 300 ) {
    scrollElem.style.opacity = "0"
    backHomeElem.style.right = "20px"
  } else {
    scrollElem.style.opacity = "0.8"
    backHomeElem.style.right = "75px"
  };
}

scrollElem.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}