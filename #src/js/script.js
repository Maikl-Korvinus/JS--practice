'use strict'


function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

const menuBody = document.querySelector('.menu');

document.addEventListener('click', menu);
{
   function menu(event) {
      if (event.target.closest('.menu__button')) {
         menuBody.classList.toggle('_active');
      }
      if (!event.target.closest('.menu')) {
         menuBody.classList.remove('_active');
      }
   }
   document.addEventListener('keyup', function (event) {
      if (event.code === 'Escape') {
         menuBody.classList.remove('_active');
      }
   });

   const txtItem = document.querySelector('.textarea__item');
   const txtItemLimit = txtItem.getAttribute('maxlength');
   const txtCounter = document.querySelector('.textarea__counter span');

   txtCounter.innerHTML = txtItemLimit;

   txtItem.addEventListener('keyup', txtSetCounter);

   function txtSetCounter() {
      const txtCounterResult = txtItemLimit - txtItem.value.length;
      txtCounter.innerHTML = txtCounterResult;
   }
}


