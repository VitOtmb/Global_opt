
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




document.addEventListener('DOMContentLoaded', () => {
   const arrowUp = document.querySelector('.up');

   function showArrowUp() {
      arrowUp.classList.add('show');
      arrowUp.classList.remove('hide');
   }

   function hideArrowHide() {
      arrowUp.classList.add('hide');
      arrowUp.classList.remove('show');
   }

   function showArrowUpByScroll() {
      let scrolled = window.scrollY || document.documentElement.scrollTop;
      if(scrolled > 500) {
         showArrowUp();
      } else if (scrolled < 500) {
         hideArrowHide();
      }
   }

   window.addEventListener('scroll', showArrowUpByScroll);

   arrowUp.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, 0);
      console.log('куксики и ко');
   });

});