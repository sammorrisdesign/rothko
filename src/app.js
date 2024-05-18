// Handle block transitions
const numOfColors = 30;
const numOfBlocks = 4;
const blockEls = document.querySelectorAll('.js-block');
const bodyEl = document.querySelector('body');

const randomiser = (total) => {
  return Math.floor(Math.random() * total) + 1;
}

const changeBlock = (el) => {
  el.className = `block block--color-${randomiser(numOfColors)} block--size-${randomiser(numOfColors)} block--spacing-${randomiser(numOfColors)} js-block`;
}

blockEls.forEach(blockEl => {
  blockEl.addEventListener('click', () => {
    changeBlock(blockEl);
  })
});

// Change block every 5 seconds
window.setInterval(() => {
  const blockEl = blockEls[randomiser(numOfBlocks) - 1];
  changeBlock(blockEl);
}, 5000);

// Change background every 8 seconds
window.setInterval(() => {
  let bodyClasses = bodyEl.className;
  bodyClasses = bodyClasses.replace(/(^|\s)body--color-\S+/g, `body--color-${randomiser(numOfColors)}`);
  bodyEl.className = bodyClasses;
}, 8000);

// Handle About toggle
document.querySelector('.js-about-open').addEventListener('click', () => {
  bodyEl.classList.add('is-abouting');
});

document.querySelector('.js-about-close').addEventListener('click', () => {
  bodyEl.classList.remove('is-abouting');
});
