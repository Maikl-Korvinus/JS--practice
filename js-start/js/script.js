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







let someInput = document.getElementById('pass');
let someBtn = document.getElementById('button');

function clickBtn() {
   if (someInput.type == 'password') {
      someInput.type = 'text';
   } else if (someInput.type == 'text') {
      someInput.type = 'password';
   }
}

someBtn.addEventListener('mousedown', clickBtn);
someBtn.addEventListener('mouseup', clickBtn);


