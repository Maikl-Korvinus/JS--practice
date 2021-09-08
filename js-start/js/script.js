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




let someBlock = document.getElementById('block');
let someValue = document.getElementById('spanchik');
let value1 = someValue.innerHTML;

function hideSpan() {
   someBlock.innerHTML = `<input id='first' value='${value1}' type='text'> <button id='button'>Save</button>`;
   let idButton = document.getElementById('button');
   let idInput = document.getElementById('first');
   function qwe() {
      someBlock.innerHTML = `<span id='lvlup'>${idInput.value}</span>`
      let repit = document.getElementById('lvlup');
      repit.addEventListener('click', hideSpan);
   }
   idButton.addEventListener('click', qwe);
};



someValue.addEventListener('click', hideSpan);

