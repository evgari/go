const modalBtns = document.querySelectorAll('.call-btn');
const overlay = document.querySelector('.modal');

modalBtns.forEach(el => {
  el.addEventListener('click', () => {
    overlay.classList.add('modal_open');
  });
});

overlay.addEventListener('click', e => {
  const target = e.target;

  if (target === overlay ||
    target.closest('.modal__close')) {
      overlay.classList.remove('modal_open');
  }
});

