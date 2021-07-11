// LINK TO JAVASCRIPT FROM HTML
const counterValue = document.querySelector('.counter-value');
const btnSub = document.querySelector('.sub');
const btnAdd = document.querySelector('.add');

let counter = 0;

btnSub.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    counterValue.innerHTML = counter;
  }
});

btnAdd.addEventListener('click', () => {
  if (counter < 50) {
    counter++;
    counterValue.innerHTML = counter;
  }
});