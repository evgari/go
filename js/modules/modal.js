const modalBtns = document.querySelectorAll('.call-btn');
const overlay = document.querySelector('.modal');
const inputTel = document.querySelector('.modal__phone');

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

const telMask = new Inputmask('+7 (999)-999-99-99');
telMask.mask(inputTel);

const justVaidate = new JustValidate('.call-form');
justVaidate
  .addField('.modal__name', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваше имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Не короче 2 символов'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком длинное имя'
    },
  ])
  .addField('.modal__phone', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон'
    },
    {
      validator(value) {
        const phone = inputTel.inputmask.unmaskedvalue();
        return !!(Number(phone) && phone.length === 10);
      },
      errorMessage: 'телефон не корректный'
    }
  ]);

