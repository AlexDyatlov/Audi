$(function(){

  var element = document.getElementById('phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
  };

  var mask = IMask(element, maskOptions);

  $('.menu__btn').on('click', function(){
    this.classList.toggle('active')
    $('.menu__list').slideToggle();
  });

  AOS.init({
    delay: 300,
    duration: 1000,
  });


});

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var home = document.querySelector('.home');
var header = document.querySelector('.header');

var specifications = document.querySelector('.specifications');
var description = document.querySelector('.description');

var form = document.querySelector('.form');
var purchase = document.querySelector('.purchase');

var contacts = document.querySelector('.contacts');
var footer = document.querySelector('.footer');


home.addEventListener('click', () => {
  scrollTo(header);
});

specifications.addEventListener('click', () => {
  scrollTo(description);
});

form.addEventListener('click', () => {
  scrollTo(purchase);
});

contacts.addEventListener('click', () => {
  scrollTo(footer);
});