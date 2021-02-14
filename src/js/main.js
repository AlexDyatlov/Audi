const $burger = document.querySelector('.menu__btn'),
      $menu = document.querySelector('.menu__list');

$burger.addEventListener('click', function(){
  $burger.classList.toggle('active');
  $menu.classList.toggle('active');
})

const element = document.getElementById('phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const mask = IMask(element, maskOptions);

AOS.init({
  delay: 300,
  duration: 1000,
  once: true
});

const scroll = new SmoothScroll('a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});