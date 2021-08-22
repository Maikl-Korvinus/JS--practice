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


// не забудьте установить для кнопки в html-е значение атрибута id='login'
/*let loginButton = document.getElementById('login');
loginButton.onclick = function () {

};



setTimeout(function () {
   let name = document.getElementById('first-name');
   name.value = 'Misha';

   let surname = document.getElementById('last-name');
   surname.value = 'Ne-Karas';

   document.getElementById('sex').checked = false;
   document.getElementById('sex2').checked = true;

   document.getElementById('checkbox1').checked = false;

   let avatar = document.getElementById('avatarImage');
   avatar.src = './img/USHI.png'

   let city = document.getElementById('cities');
   city.value = "Moscow";

   let about = document.getElementById('aboutMe');
   about.innerHTML = 'I love you';
}, 5000);
*/



change.onclick = function () {
   let now = document.getElementById('avatarImage');
   now.src = 'https://sun1.dataix-by-minsk.userapi.com/s/v1/if1/AEX7JGD6owhHdKn-WrKhMoxgjKEQd64R9xEd6OMQ6Gp5aGimZAXu8_RIGeV3-_8i9qR6oDwm.jpg?size=50x50&quality=96&crop=712,919,1232,1232&ava=1';
}