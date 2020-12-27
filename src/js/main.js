$(function(){

  const element = document.getElementById('phone');
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  const mask = IMask(element, maskOptions);

  $('.menu__btn').on('click', function(){
    this.classList.toggle('active')
    $('.menu__list').slideToggle();
  });

  AOS.init({
    delay: 300,
    duration: 1000,
    once: true
  });

});

const scroll = new SmoothScroll('a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});