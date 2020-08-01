 var header = document.getElementById('header');
 var x, i;
 x = document.querySelectorAll(".header__menu-list .menu-list-item .menu-list-link");
 window.onscroll = function() {
     if (window.pageYOffset > 80) {
         header.classList.add("scroll");
         document.querySelector('.header__menu .header__menu-logo a').classList.add("color");
         for (i = 0; i < x.length; i++) {
             x[i].classList.add("color");
         }
     } else {
         header.classList.remove("scroll");
         for (i = 0; i < x.length; i++) {
             x[i].classList.remove("color");
         }
         document.querySelector('.header__menu .header__menu-logo a').classList.remove("color");
     }
 };
 // fancybox
 $('[data-fancybox="images"]').fancybox({
     loop: true
 });
 // Menu reponsive
 var menuResponsive = {
     init: function() {
         this.toggleMenu()
     },
     toggleMenu: function() {
         var button = document.querySelector('.header__menu-button');
         var menu = document.querySelector('.header__menu-list');
         button.addEventListener('click', function() {
             menu.classList.toggle('show')
         })
     }
 }
 menuResponsive.init()
// Active menu
 function functionScroll() {
     var section = document.querySelectorAll(".section"),
         sections = {},
         i = 0;
     Array.prototype.forEach.call(section, function(e) {
         sections[e.id] = e.offsetTop;
     });
     for (i in sections) {
         if (window.scrollY > 100) {
             if (sections[i] <= window.pageYOffset + 100) {
                 if (document.querySelector('.active') !== null) {
                     document.querySelector('.active').classList.remove('active');
                 }
                 document.querySelector('a[href*=' + i + ']').classList.add('active');
             }
         } else {
             document.querySelector('a[href*=' + i + ']').classList.remove('active');
         }
     }
 }
 window.addEventListener('scroll', functionScroll);
 window.addEventListener('resize', functionScroll);