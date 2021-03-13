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

document.querySelector('#btn-1').addEventListener('change', () => {
    document.querySelector('main').classList.toggle('fix_scroll') + document.querySelector('footer').classList.toggle('fix_scroll');
});

document.querySelector('#menu_rent').addEventListener('click', () => {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.food_collection').classList.remove('is-showing');
  document.querySelector('.entertainment_collection').classList.remove('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
  document.querySelector('.home_screen').classList.remove('is-not-showing');
  document.querySelector('.shopping_collection').classList.remove('is-showing');
  document.getElementById("shopping_collection").checked = false;
})

document.querySelector('#menu_advertising').addEventListener('click', () => {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.food_collection').classList.remove('is-showing');
  document.querySelector('.entertainment_collection').classList.remove('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
  document.querySelector('.home_screen').classList.remove('is-not-showing');
  document.querySelector('.shopping_collection').classList.remove('is-showing');
  document.getElementById("shopping_collection").checked = false;
})

document.querySelector('#menu_contacts').addEventListener('click', () => {
  document.getElementById("btn-1").checked = false;
  document.querySelector('main').classList.remove('fix_scroll') + document.querySelector('footer').classList.remove('fix_scroll');
  document.querySelector('.food_collection').classList.remove('is-showing');
  document.querySelector('.entertainment_collection').classList.remove('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
  document.querySelector('.home_screen').classList.remove('is-not-showing');
  document.querySelector('.shopping_collection').classList.remove('is-showing');
  document.getElementById("shopping_collection").checked = false;
})

document.querySelector('#to_rent').addEventListener('click', () => {
  document.querySelector('.food_collection').classList.remove('is-showing');
  document.querySelector('.entertainment_collection').classList.remove('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
  document.querySelector('.home_screen').classList.remove('is-not-showing');
  document.querySelector('.shopping_collection').classList.remove('is-showing');
  document.getElementById("shopping_collection").checked = false;
})

document.querySelector('#to_ad').addEventListener('click', () => {
  document.querySelector('.food_collection').classList.remove('is-showing');
  document.querySelector('.entertainment_collection').classList.remove('is-showing');
  document.getElementById("food_collection").checked = false;
  document.getElementById("entertainment_collection").checked = false;
  document.querySelector('.home_screen').classList.remove('is-not-showing');
  document.querySelector('.shopping_collection').classList.remove('is-showing');
  document.getElementById("shopping_collection").checked = false;
})

var btns = document.querySelectorAll('#map')
btns.forEach(function(btn) {
  btn.addEventListener('click', () => {
    document.querySelector('.food_collection').classList.remove('is-showing');
    document.querySelector('.entertainment_collection').classList.remove('is-showing');
    document.getElementById("food_collection").checked = false;
    document.getElementById("entertainment_collection").checked = false;
    document.querySelector('.home_screen').classList.remove('is-not-showing');
    document.querySelector('.shopping_collection').classList.remove('is-showing');
    document.getElementById("shopping_collection").checked = false;
  })
})

document.querySelector('#menu_shop').addEventListener('click', () => {
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

document.querySelector('#menu_food').addEventListener('click', () => {
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

document.querySelector('#menu_entertainment').addEventListener('click', () => {
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


// этажи

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

function validate(){
  var shop = document.querySelector('#shopping_collection');
  var food = document.querySelector('#food_collection');
  var entertainment = document.querySelector('#entertainment_collection');
  if ((food.checked) || (shop.checked) || (entertainment.checked)){
    document.querySelector('.home_screen').classList.add('is-not-showing');
  }else{
    document.querySelector('.home_screen').classList.remove('is-not-showing');
  }
}

