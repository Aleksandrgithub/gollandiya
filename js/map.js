document.querySelector('#first_map_button').addEventListener('click', () => {
    document.querySelector('.first_map').classList.remove('is-not-showing') + document.querySelector('.ground_map').classList.remove('is-showing') +
    document.querySelector('.second_map').classList.remove('is-showing') + document.querySelector('#first_map_curr').classList.add('map_curr') +
    document.querySelector('#second_map_curr').classList.remove('map_curr') + document.querySelector('#ground_map_curr').classList.remove('map_curr')
  });
  
  document.querySelector('#second_map_button').addEventListener('click', () => {
    document.querySelector('.second_map').classList.add('is-showing') + document.querySelector('.ground_map').classList.remove('is-showing') +
    document.querySelector('.first_map').classList.add('is-not-showing') + document.querySelector('#first_map_curr').classList.remove('map_curr') +
    document.querySelector('#second_map_curr').classList.add('map_curr') + document.querySelector('#ground_map_curr').classList.remove('map_curr')
  });
  
  document.querySelector('#ground_map_button').addEventListener('click', () => {
    document.querySelector('.ground_map').classList.add('is-showing') + document.querySelector('.second_map').classList.remove('is-showing') +
    document.querySelector('.first_map').classList.add('is-not-showing') + document.querySelector('#first_map_curr').classList.remove('map_curr') +
    document.querySelector('#second_map_curr').classList.remove('map_curr') + document.querySelector('#ground_map_curr').classList.add('map_curr')
  });