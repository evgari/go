const anchors = document.querySelectorAll('.js-scroll-to');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
      event.target.focus()
  }
});