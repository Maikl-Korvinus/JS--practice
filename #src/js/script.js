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

let burgerButton = document.getElementById('bergerr');
let menu = document.getElementById('someMenu');



function simular() {
   if (menu.className == 'sidebar-menu') {
      menu.classList.add('active');
      burgerButton.src = 'https://img2.freepng.ru/20180422/bre/kisspng-computer-icons-cross-delete-button-desktop-wallpap-treasure-map-5adce4c8e8b284.6651471215244259289531.jpg';
   } else {
      menu.classList.remove('active');
      burgerButton.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png';
   }
}


burgerButton.addEventListener('click', simular);