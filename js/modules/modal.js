const modalBtn = document.querySelector('.call-btn');
const overlay = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  overlay.classList.add('modal_open');
});

overlay.addEventListener('click', e => {
  const target = e.target;

  if (target === overlay ||
    target.classList.contains('modal__close')) {
      overlay.classList.remove('modal_open');
  }
});

