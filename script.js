const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-toggle');
const homeLink = document.querySelector('.home-link');
const matchResults = window.matchMedia("(max-width: 480px)");
var thresholdValue = 1;
const modal = document.querySelector('.pop-up');
const openModal = document.querySelector('.nav-button__filled');
const openContactForm = document.querySelector('.profile-button');
const closeModal = document.querySelector('.close-button');
const cancelButton = document.querySelector('#cancel');

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

var screenWidth = window.innerWidth;
console.log(screenWidth);


const landingImage = document.querySelector(".landing-image");

window.onload = function(){
    switch(page){
        case "weatherlerts.html":
            landingImage.src = "assests/png/weatherlerts/landing-image.png"; 
        break;
        case "free_roam.html":
            landingImage.src = "assests/png/mockup-images/free-roam-mockup.png";
        break;
        case "shelter_finds.html":
            landingImage.src = "assests/png/shelter-finds/landing-image.png";
        break;
    }
}
if(matchResults == true){
    thresholdValue = .2;
}
else{
    thresholdValue = .5;
}
console.log(thresholdValue);
const sectionOneOptions = {
    threshold: thresholdValue,
    rootMargin: '-25px 0px 20px 0px'
};
const header = document.querySelector("header");
const sectionOne = document.querySelector("#section-crossed")
const navIcon = document.querySelector(".mobile-toggle");

const faders = document.querySelectorAll(".section");

const appearOptions = {
    rootMargin: '0px 0px -100px 0px'
};
const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
    ){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('animation');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});
const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
                if(!entry.isIntersecting){
                    header.classList.add("header-scrolled");
                    navIcon.setAttribute('aria-expanded', true);
                    navIcon.setAttribute("id", "menu-icon");
                }
                else{
                    header.classList.remove("header-scrolled");
                    navIcon.setAttribute('aria-expanded',false);
                    navIcon.removeAttribute("id", "menu-icon");
                }
        })
    }, sectionOneOptions)
sectionOneObserver.observe(sectionOne);
navToggle.onclick = function() {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
        navIcon.setAttribute("id", "close-menu");
        disableScroll();
    }
    else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
        navIcon.removeAttribute("id", "close-menu")
        
        enableScroll();
    }
};
function disableScroll(){
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = function (){
        console.log(scrollLeft + scrollTop)
        window.scrollTo(scrollLeft, scrollTop);
    };
}
function enableScroll(){
    window.onscroll = function(){
    };
}
openModal.addEventListener('click', () => {
    modal.showModal();
})
openContactForm.addEventListener('click', () => {
    modal.showModal();
})
closeModal.addEventListener('click', () => {
    modal.close();
})
cancelButton.addEventListener('click', () => {
    modal.close();
})