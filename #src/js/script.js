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




function camelize(str) {
   var arr = str.split('-');

   for (var i = 1; i < arr.length; i++) {
      // преобразовать: первый символ с большой буквы
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
   }

   return arr.join('');
}
console.log(camelize("list-style-image"));