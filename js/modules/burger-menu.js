const burgerBtn = document.querySelector('.burger-btn');
const burgerOverlay = document.querySelector('.nav');


const durationOpacity = 400;
let startTime = NaN;


burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-btn_active');

  if (burgerBtn.classList.contains('burger-btn_active')) { 
    burgerOverlay.style.display = 'flex'; 
    requestAnimationFrame(showOverlay);
  } else {
    requestAnimationFrame(hideOverlay); 
  }
});

const showOverlay = (timestamp) => {
  startTime ||= timestamp;

  const progress = (timestamp - startTime) / durationOpacity;

  burgerOverlay.style.opacity = 0 + progress;

  if (progress < 1) {
    requestAnimationFrame(showOverlay);
  } else {
    startTime = NaN;
    burgerOverlay.style.opacity = 1;
  }
};

const hideOverlay = (timestamp) => {
  startTime ||= timestamp;

  const progress = (timestamp - startTime) / durationOpacity;

  burgerOverlay.style.opacity = 1 - progress;

  if (progress < 1) {
    requestAnimationFrame(hideOverlay);
  } else {
    startTime = NaN;
    burgerOverlay.style.opacity = 0;
    burgerOverlay.style.display = 'none';
  }
};



