const navBurger = document.getElementById('nav__burger');
const navClose = document.getElementById('nav__close');
const navCollection = document.getElementById('nav__collection');

let if_nav_open = false;

navBurger.addEventListener('click' , () =>{
    if (!if_nav_open) {
        navCollection.style.transform='translateX(0px)';
        if_nav_open = true;
    } else{
        navCollection.style.transform='';
        if_nav_open = false;
    }
});

navClose.addEventListener('click' , () =>{
    if (!if_nav_open) {
        navCollection.style.transform='translateX(0px)';
        if_nav_open = true;
    } else{
        navCollection.style.transform='';
        if_nav_open = false;
    }
});