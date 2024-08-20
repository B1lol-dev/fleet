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


// Hero

const heroStays = document.getElementById('hero__stays');
const heroFlights = document.getElementById('hero__flights');
const heroCars = document.getElementById('hero__cars');
const heroThings = document.getElementById('hero__things');

const heroStaysBody = document.getElementById('hero__stays__body');
const heroFlightsBody = document.getElementById('hero__flights__body');
const heroCarsBody = document.getElementById('hero__cars__body');
const heroThingsBody = document.getElementById('hero__things__body');

function heroStaysSelect() {
    heroStays.classList.add('hero__selected');
    heroFlights.classList.remove('hero__selected');
    heroCars.classList.remove('hero__selected');
    heroThings.classList.remove('hero__selected');

    heroStaysBody.style.display='block'
    heroFlightsBody.style.display='none'
    heroCarsBody.style.display='none'
    heroThingsBody.style.display='none'
}

function heroFlightsSelect() {
    heroStays.classList.remove('hero__selected');
    heroFlights.classList.add('hero__selected');
    heroCars.classList.remove('hero__selected');
    heroThings.classList.remove('hero__selected');

    heroStaysBody.style.display='none'
    heroFlightsBody.style.display='block'
    heroCarsBody.style.display='none'
    heroThingsBody.style.display='none'
}

function heroCarsSelect() {
    heroStays.classList.remove('hero__selected');
    heroFlights.classList.remove('hero__selected');
    heroCars.classList.add('hero__selected');
    heroThings.classList.remove('hero__selected');
    
    heroStaysBody.style.display='none'
    heroFlightsBody.style.display='none'
    heroCarsBody.style.display='block'
    heroThingsBody.style.display='none'
}

function heroThingsSelect() {
    heroStays.classList.remove('hero__selected');
    heroFlights.classList.remove('hero__selected');
    heroCars.classList.remove('hero__selected');
    heroThings.classList.add('hero__selected');
    
    heroStaysBody.style.display='none'
    heroFlightsBody.style.display='none'
    heroCarsBody.style.display='none'
    heroThingsBody.style.display='block'
}

heroStays.addEventListener('click' , () => heroStaysSelect())
heroFlights.addEventListener('click' , () => heroFlightsSelect())
heroCars.addEventListener('click' , () => heroCarsSelect())
heroThings.addEventListener('click' , () => heroThingsSelect())
