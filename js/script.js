document.querySelector('#btn-1').addEventListener('change', () => {
    document.querySelector('main').classList.toggle('fix_scroll') + document.querySelector('footer').classList.toggle('fix_scroll');
  });

// function backToTop() {

//     let button1 = $('.back-to-top');
//     let button2 = $('.back-to-main');

//     $(window).on('scroll', () => {
//         if ($(this).scrollTop() >= 100) {
//             button1.fadeIn();
//         } else {
//             button1.fadeOut();
//         }
//         button2.fadeIn();
//     });

//     button1.on('click', (e) => {
//         e.preventDefault();
//         $('html').animate({scrollTop: 0}, 1000);
//     })
// }

// backToTop();

document.querySelector('#shopping_collection').addEventListener('click', () => {
  document.querySelector('.shopping_collection').classList.remove('is-not-showing') + 
  document.querySelector('.food_collection').classList.add('is-not-showing') +
  document.querySelector('.entertainment_collection').classList.add('is-not-showing') +
  document.querySelector('#location_li_shop').classList.add('location_li_shop') + 
  document.querySelector('#shopping_collection').classList.add('shopping_collection_a') +
  document.querySelector('#location_li_food').classList.remove('location_li_food') + 
  document.querySelector('#food_collection').classList.remove('food_collection_a') +
  document.querySelector('#location_li_entrtnmnt').classList.remove('location_li_entrtnmnt') + 
  document.querySelector('#entertainment_collection').classList.remove('entertainment_collection_a')
});

document.querySelector('#food_collection').addEventListener('click', () => {
  document.querySelector('.food_collection').classList.remove('is-not-showing') + 
  document.querySelector('.shopping_collection').classList.add('is-not-showing') +
  document.querySelector('.entertainment_collection').classList.add('is-not-showing') +
  document.querySelector('#location_li_shop').classList.remove('location_li_shop') + 
  document.querySelector('#shopping_collection').classList.remove('shopping_collection_a') +
  document.querySelector('#location_li_food').classList.add('location_li_food') + 
  document.querySelector('#food_collection').classList.add('food_collection_a') +
  document.querySelector('#location_li_entrtnmnt').classList.remove('location_li_entrtnmnt') + 
  document.querySelector('#entertainment_collection').classList.remove('entertainment_collection_a')
});

document.querySelector('#entertainment_collection').addEventListener('click', () => {
  document.querySelector('.entertainment_collection').classList.remove('is-not-showing') + 
  document.querySelector('.shopping_collection').classList.add('is-not-showing') +
  document.querySelector('.food_collection').classList.add('is-not-showing') +
  document.querySelector('#location_li_shop').classList.remove('location_li_shop') + 
  document.querySelector('#shopping_collection').classList.remove('shopping_collection_a') +
  document.querySelector('#location_li_food').classList.remove('location_li_food') + 
  document.querySelector('#food_collection').classList.remove('food_collection_a') +
  document.querySelector('#location_li_entrtnmnt').classList.add('location_li_entrtnmnt') + 
  document.querySelector('#entertainment_collection').classList.add('entertainment_collection_a')
});

///

document.querySelector('#first_floor_button').addEventListener('click', () => {
  document.querySelector('.first_floor').classList.remove('is-not-showing') + document.querySelector('.ground_floor').classList.remove('is-showing') +
  document.querySelector('.second_floor').classList.remove('is-showing') + document.querySelector('#first_floor_curr').classList.add('floor_curr') +
  document.querySelector('#second_floor_curr').classList.remove('floor_curr') + document.querySelector('#ground_floor_curr').classList.remove('floor_curr')
});

document.querySelector('#second_floor_button').addEventListener('click', () => {
  document.querySelector('.second_floor').classList.add('is-showing') + document.querySelector('.ground_floor').classList.remove('is-showing') +
  document.querySelector('.first_floor').classList.add('is-not-showing') + document.querySelector('#first_floor_curr').classList.remove('floor_curr') +
  document.querySelector('#second_floor_curr').classList.add('floor_curr') + document.querySelector('#ground_floor_curr').classList.remove('floor_curr')
});

document.querySelector('#ground_floor_button').addEventListener('click', () => {
  document.querySelector('.ground_floor').classList.add('is-showing') + document.querySelector('.second_floor').classList.remove('is-showing') +
  document.querySelector('.first_floor').classList.add('is-not-showing') + document.querySelector('#first_floor_curr').classList.remove('floor_curr') +
  document.querySelector('#second_floor_curr').classList.remove('floor_curr') + document.querySelector('#ground_floor_curr').classList.add('floor_curr')
});
