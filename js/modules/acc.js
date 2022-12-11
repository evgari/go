const accordionItems = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.accordion__control');
const accordionWrappers = document.querySelectorAll('.accordion__wrapper');

let heightWrapper = 0;

accordionWrappers.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

if (accordionButtons) {
  accordionButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < accordionItems.length; i += 1) {
        if (index === i) {
          accordionWrappers[i].style.height =
            accordionItems[i].classList.contains('accordion_active') ?
            '' : `${heightWrapper}px`;
          accordionItems[i].classList.toggle('accordion_active');
        } else {
          accordionItems[i].classList.remove('accordion_active');
          accordionWrappers[i].style.height = '';
        }
      }  
    });
  });
}

document.body.addEventListener('click', e => {                
  const target = e.target;
  if (!target.closest('.accordion')) {
    accordionItems.forEach(elem => {
      elem.classList.remove('accordion_active');
      elem.children[1].style.height = '';
    });
  }
});

