
let slider = tns({
   container: '.reviews__slider',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   nav: false,
   navPosition: 'bottom',
   controls: false,
   speed: 900
});

const prev = document.querySelector('.reviews__slider_left'),
      next = document.querySelector('.reviews__slider_right');

   prev.addEventListener('click',function() {
   console.log(prev);
   slider.goTo('prev');
});

next.addEventListener('click',function() {
   slider.goTo('next');
});