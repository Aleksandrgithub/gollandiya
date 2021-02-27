document.querySelector('#btn-1').addEventListener('change', () => {
    document.querySelector('main').classList.toggle('fix_scroll') + document.querySelector('footer').classList.toggle('fix_scroll');
});

$('#menu_shop').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.home_screen').classList.add('is-not-showing');
  document.querySelector('.shopping_collection').classList.add('is-showing');
  document.getElementById("shopping_collection").checked = true;
})

$('#menu_food').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.home_screen').classList.add('is-not-showing');
  document.querySelector('.food_collection').classList.add('is-showing');
  document.getElementById("food_collection").checked = true;
})

$('#menu_entertainment').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.home_screen').classList.add('is-not-showing');
  document.querySelector('.entertainment_collection').classList.add('is-showing');
  document.getElementById("entertainment_collection").checked = true;
})

document.querySelector('#shopping_collection').addEventListener('change', () => {
  document.querySelector('.food_collection').classList.remove('is-not-showing') +
  document.querySelector('.food_collection').classList.remove('is-showing') +
  document.querySelector('.entertainment_collection').classList.remove('is-not-showing') +
  document.querySelector('.entertainment_collection').classList.remove('is-showing') +
  document.querySelector('.shopping_collection').classList.toggle('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
})

document.querySelector('#food_collection').addEventListener('change', () => {
  document.querySelector('.shopping_collection').classList.remove('is-not-showing') +
  document.querySelector('.shopping_collection').classList.remove('is-showing') +
  document.querySelector('.entertainment_collection').classList.remove('is-not-showing') +
  document.querySelector('.entertainment_collection').classList.remove('is-showing') +
  document.querySelector('.food_collection').classList.toggle('is-showing');
  document.getElementById("shopping_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
})

document.querySelector('#entertainment_collection').addEventListener('change', () => {
  document.querySelector('.shopping_collection').classList.remove('is-not-showing') +
  document.querySelector('.shopping_collection').classList.remove('is-showing') +
  document.querySelector('.food_collection').classList.remove('is-not-showing') +
  document.querySelector('.food_collection').classList.remove('is-showing') +
  document.querySelector('.entertainment_collection').classList.toggle('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("shopping_collection").checked = false;
})

$('#food_collection').on('click', function () {
  if (($('#food_collection').is(':checked')) || ($('#shopping_collection').is(':checked')) || ($('#entertainment_collection').is(':checked')) ) {
    document.querySelector('.home_screen').classList.add('is-not-showing');
  } else {
    document.querySelector('.home_screen').classList.remove('is-not-showing');
  }
})

$('#shopping_collection').on('click', function () {
  if (($('#food_collection').is(':checked')) || ($('#shopping_collection').is(':checked')) || ($('#entertainment_collection').is(':checked')) ) {
    document.querySelector('.home_screen').classList.add('is-not-showing');
  } else {
    document.querySelector('.home_screen').classList.remove('is-not-showing');
  }
})

$('#entertainment_collection').on('click', function () {
  if (($('#food_collection').is(':checked')) || ($('#shopping_collection').is(':checked')) || ($('#entertainment_collection').is(':checked')) ) {
    document.querySelector('.home_screen').classList.add('is-not-showing');
  } else {
    document.querySelector('.home_screen').classList.remove('is-not-showing');
  }
})

// ///

// document.querySelector('#first_floor_button').addEventListener('click', () => {
//   document.querySelector('.first_floor').classList.remove('is-not-showing') + document.querySelector('.ground_floor').classList.remove('is-showing') +
//   document.querySelector('.second_floor').classList.remove('is-showing') + document.querySelector('#first_floor_curr').classList.add('floor_curr') +
//   document.querySelector('#second_floor_curr').classList.remove('floor_curr') + document.querySelector('#ground_floor_curr').classList.remove('floor_curr')
// });

// document.querySelector('#second_floor_button').addEventListener('click', () => {
//   document.querySelector('.second_floor').classList.add('is-showing') + document.querySelector('.ground_floor').classList.remove('is-showing') +
//   document.querySelector('.first_floor').classList.add('is-not-showing') + document.querySelector('#first_floor_curr').classList.remove('floor_curr') +
//   document.querySelector('#second_floor_curr').classList.add('floor_curr') + document.querySelector('#ground_floor_curr').classList.remove('floor_curr')
// });

// document.querySelector('#ground_floor_button').addEventListener('click', () => {
//   document.querySelector('.ground_floor').classList.add('is-showing') + document.querySelector('.second_floor').classList.remove('is-showing') +
//   document.querySelector('.first_floor').classList.add('is-not-showing') + document.querySelector('#first_floor_curr').classList.remove('floor_curr') +
//   document.querySelector('#second_floor_curr').classList.remove('floor_curr') + document.querySelector('#ground_floor_curr').classList.add('floor_curr')
// });
