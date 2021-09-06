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



let Elem1 = document.getElementById('first');
let Elem2 = document.getElementById('second');
let Elem3 = document.getElementById('third');
let Elem4 = document.getElementById('fours');

let arr1 = [Elem1, Elem2, Elem3, Elem4];

function chooseAnswer(someElem) {
   if (someElem.className == 'hey') {
      return true;
   } else {
      return false;
   }
}

function removeElementIfConditionsTrue(arr, predicate) {
   for (let i = 0; i < arr.length; i++) {
      let biggy = predicate(arr[i]);
      if (biggy === true) {
         arr[i].remove();
      }
   }
}

removeElementIfConditionsTrue(arr1, chooseAnswer);