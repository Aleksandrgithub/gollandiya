document.querySelector('#btn-1').addEventListener('change', () => {
    document.querySelector('main').classList.toggle('fix_scroll') + document.querySelector('footer').classList.toggle('fix_scroll');
});

$('#menu_rent').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
})

$('#menu_advertising').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
})

$('#menu_contacts').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
})

$('#menu_shop').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.food_collection').classList.remove('is-showing');
  document.querySelector('.entertainment_collection').classList.remove('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
  document.querySelector('.home_screen').classList.add('is-not-showing');
  document.querySelector('.shopping_collection').classList.add('is-showing');
  document.getElementById("shopping_collection").checked = true;
})

$('#menu_food').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.shopping_collection').classList.remove('is-showing');
  document.querySelector('.entertainment_collection').classList.remove('is-showing');
  document.getElementById("shopping_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
  document.querySelector('.home_screen').classList.add('is-not-showing');
  document.querySelector('.food_collection').classList.add('is-showing');
  document.getElementById("food_collection").checked = true;
})

$('#menu_entertainment').on('click', function () {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.shopping_collection').classList.remove('is-showing');
  document.querySelector('.food_collection').classList.remove('is-showing');
  document.getElementById("shopping_collection").checked = false;
  document.getElementById("food_collection").checked = false;
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



 document.querySelector('#first_home_button').addEventListener('click', () => {
   document.querySelector('.first_home').classList.remove('is-not-showing') + document.querySelector('.ground_home').classList.remove('is-showing') +
   document.querySelector('.second_home').classList.remove('is-showing') + document.querySelector('#first_home_curr').classList.add('floor_curr') +
   document.querySelector('#second_home_curr').classList.remove('floor_curr') + document.querySelector('#ground_home_curr').classList.remove('floor_curr')
 });

 document.querySelector('#second_home_button').addEventListener('click', () => {
   document.querySelector('.second_home').classList.add('is-showing') + document.querySelector('.ground_home').classList.remove('is-showing') +
   document.querySelector('.first_home').classList.add('is-not-showing') + document.querySelector('#first_home_curr').classList.remove('floor_curr') +
   document.querySelector('#second_home_curr').classList.add('floor_curr') + document.querySelector('#ground_home_curr').classList.remove('floor_curr')
});

 document.querySelector('#ground_home_button').addEventListener('click', () => {
   document.querySelector('.ground_home').classList.add('is-showing') + document.querySelector('.second_home').classList.remove('is-showing') +
   document.querySelector('.first_home').classList.add('is-not-showing') + document.querySelector('#first_home_curr').classList.remove('floor_curr') +
   document.querySelector('#second_home_curr').classList.remove('floor_curr') + document.querySelector('#ground_home_curr').classList.add('floor_curr')
});





document.querySelector('#first_shop_button').addEventListener('click', () => {
  document.querySelector('.first_shop').classList.remove('is-not-showing') + document.querySelector('.ground_shop').classList.remove('is-showing') +
  document.querySelector('.second_shop').classList.remove('is-showing') + document.querySelector('#first_shop_curr').classList.add('floor_curr') +
  document.querySelector('#second_shop_curr').classList.remove('floor_curr') + document.querySelector('#ground_shop_curr').classList.remove('floor_curr')
});

document.querySelector('#second_shop_button').addEventListener('click', () => {
  document.querySelector('.second_shop').classList.add('is-showing') + document.querySelector('.ground_shop').classList.remove('is-showing') +
  document.querySelector('.first_shop').classList.add('is-not-showing') + document.querySelector('#first_shop_curr').classList.remove('floor_curr') +
  document.querySelector('#second_shop_curr').classList.add('floor_curr') + document.querySelector('#ground_shop_curr').classList.remove('floor_curr')
});

document.querySelector('#ground_shop_button').addEventListener('click', () => {
  document.querySelector('.ground_shop').classList.add('is-showing') + document.querySelector('.second_shop').classList.remove('is-showing') +
  document.querySelector('.first_shop').classList.add('is-not-showing') + document.querySelector('#first_shop_curr').classList.remove('floor_curr') +
  document.querySelector('#second_shop_curr').classList.remove('floor_curr') + document.querySelector('#ground_shop_curr').classList.add('floor_curr')
});



document.querySelector('#first_food_button').addEventListener('click', () => {
  document.querySelector('.first_food').classList.remove('is-not-showing') + document.querySelector('.ground_food').classList.remove('is-showing') +
  document.querySelector('.second_food').classList.remove('is-showing') + document.querySelector('#first_food_curr').classList.add('floor_curr') +
  document.querySelector('#second_food_curr').classList.remove('floor_curr') + document.querySelector('#ground_food_curr').classList.remove('floor_curr')
});

document.querySelector('#second_food_button').addEventListener('click', () => {
  document.querySelector('.second_food').classList.add('is-showing') + document.querySelector('.ground_food').classList.remove('is-showing') +
  document.querySelector('.first_food').classList.add('is-not-showing') + document.querySelector('#first_food_curr').classList.remove('floor_curr') +
  document.querySelector('#second_food_curr').classList.add('floor_curr') + document.querySelector('#ground_food_curr').classList.remove('floor_curr')
});

document.querySelector('#ground_food_button').addEventListener('click', () => {
  document.querySelector('.ground_food').classList.add('is-showing') + document.querySelector('.second_food').classList.remove('is-showing') +
  document.querySelector('.first_food').classList.add('is-not-showing') + document.querySelector('#first_food_curr').classList.remove('floor_curr') +
  document.querySelector('#second_food_curr').classList.remove('floor_curr') + document.querySelector('#ground_food_curr').classList.add('floor_curr')
});

document.querySelector('#first_entertainment_button').addEventListener('click', () => {
  document.querySelector('.first_entertainment').classList.remove('is-not-showing') + document.querySelector('.ground_entertainment').classList.remove('is-showing') +
  document.querySelector('.second_entertainment').classList.remove('is-showing') + document.querySelector('#first_entertainment_curr').classList.add('floor_curr') +
  document.querySelector('#second_entertainment_curr').classList.remove('floor_curr') + document.querySelector('#ground_entertainment_curr').classList.remove('floor_curr')
});

document.querySelector('#second_entertainment_button').addEventListener('click', () => {
  document.querySelector('.second_entertainment').classList.add('is-showing') + document.querySelector('.ground_entertainment').classList.remove('is-showing') +
  document.querySelector('.first_entertainment').classList.add('is-not-showing') + document.querySelector('#first_entertainment_curr').classList.remove('floor_curr') +
  document.querySelector('#second_entertainment_curr').classList.add('floor_curr') + document.querySelector('#ground_entertainment_curr').classList.remove('floor_curr')
});

document.querySelector('#ground_entertainment_button').addEventListener('click', () => {
  document.querySelector('.ground_entertainment').classList.add('is-showing') + document.querySelector('.second_entertainment').classList.remove('is-showing') +
  document.querySelector('.first_entertainment').classList.add('is-not-showing') + document.querySelector('#first_entertainment_curr').classList.remove('floor_curr') +
  document.querySelector('#second_entertainment_curr').classList.remove('floor_curr') + document.querySelector('#ground_entertainment_curr').classList.add('floor_curr')
});
