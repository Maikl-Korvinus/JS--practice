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


/*
function changeValue(xname) {
   let name1 = document.getElementById('name1');
   name1.value = xname;
   let name2 = document.getElementById('name2');
   name2.value = xname;
   let name3 = document.getElementById('name3');
   name3.value = xname;
}

let name1 = document.getElementById('name1');
name1.className = 'error + name-first';
let name2 = document.getElementById('name2');
name2.className = 'error + name-first';
let name3 = document.getElementById('name3');
name3.className = 'error + name-first';

function timeoutError() {
   function setError(idElement) {
      let someElement = document.getElementById(idElement);
      someElement.className = 'error';
   }
   setError('name1');
}

function sayHello() {
   alert('Hello');
}
setTimeout(timeoutError, 3000);

function hideElement(dishka) {
   let value = document.getElementById(dishka);
   value.className = 'invis';
}


function showElement(dishka) {
   let value = document.getElementById(dishka);
   value.className = 'noinvis';
}

let a = 0;
function chasi() {
   let someInput = document.getElementById('name1');
   someInput.value = a;
   a++
}
setInterval(chasi, 1000);


function getSumm(a, b) {
   let result = +a + +b;
   console.log(result);
}
getSumm('7', '10');
*/

let plusEl = document.getElementById("buttonPlus");
let minusEl = document.getElementById("buttonMinus");
let multyPlyEl = document.getElementById("buttonMultyPly");
let devideEl = document.getElementById("buttonDevide");

let elemOfval1 = document.getElementById("first-input");
let elemOfval2 = document.getElementById("second-input");

function getNumber1() {
   return elemOfval1.value;
}
function getNumber2() {
   return elemOfval2.value;
}

function makeOperation(operatinCode) {
   if (operatinCode === '+') {
      var result = +getNumber1() + +getNumber2();
   } else if (operatinCode === '-') {
      var result = +getNumber1() - +getNumber2();
   } else if (operatinCode === '*') {
      var result = +getNumber1() * +getNumber2();
   } else {
      var result = +getNumber1() / +getNumber2();
   }
   alert(result);
}

function sumOfValues() {
   makeOperation('+');
}
function differenceOfValues() {
   makeOperation('-');
}
function multOfValues() {
   makeOperation('*');
}
function devideOfValues() {
   makeOperation('/');
}
plusEl.addEventListener('click', sumOfValues);
minusEl.addEventListener('click', differenceOfValues);
multyPlyEl.addEventListener('click', multOfValues);
devideEl.addEventListener('click', devideOfValues);