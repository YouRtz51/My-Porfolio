// script for sticky navbar
var navmenu = document.querySelector('.navbar')
var sticky = navmenu.classList;
window.addEventListener('scroll', function () {
    sticky.toggle('sticky', scrollY > 20);
});

var navbtn = document.querySelector('.navbtn i');
var togglemenu = document.querySelector('.navmenu').classList;
var links = document.querySelectorAll('.navmenu.active li a');


function navtoggle() {
    togglemenu.toggle('on');
    navbtn.classList.toggle('active');
};
// script for sticky navbar
var arrow = document.querySelector('.scroll-arrow');
window.addEventListener('scroll', function () {
    arrow.classList.toggle('start', scrollY > 500);
    arrow.addEventListener('click', function () {
        window.scrollTo(0, 10);
    });
});
