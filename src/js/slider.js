import Siema from 'siema';
const sliderHeroRef = document.querySelector('[data-slider-hero]');
const input = document.getElementsByName('slider-control');

const sliderHero = new Siema({
  selector: sliderHeroRef,
  duration: 2000,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: false,
  multipleDrag: false,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {
  },
    onChange: () => {
  },
});

const btn0 = document.querySelector('input[value="1"]');
const btn1 = document.querySelector('input[value="2"]');
const btn2 = document.querySelector('input[value="3"]');
const btn3 = document.querySelector('input[value="4"]');
const btn4 = document.querySelector('input[value="5"]');
const btn5 = document.querySelector('input[type="checkbox"]');

btn0.addEventListener('click', () => sliderHero.goTo(0));
btn1.addEventListener('click', () => sliderHero.goTo(1));
btn2.addEventListener('click', () => sliderHero.goTo(2));
btn3.addEventListener('click', () => sliderHero.goTo(3));
btn5.addEventListener('click', () => {
    if (btn5.checked === true) {
        clearInterval(idSetInterval)
    }
    if (btn5.checked === false) {
        
    }
})
console.dir(btn5.checked === true)


let idSetInterval =  setInterval(() => {
    sliderHero.next();
  }, 3000);