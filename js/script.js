document.querySelector('#btn-1').addEventListener('change', () => {
    document.querySelector('main').classList.toggle('fix_scroll') + document.querySelector('footer').classList.toggle('fix_scroll');
  });