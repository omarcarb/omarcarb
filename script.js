const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-toggle');
const homeLink = document.querySelector('.home-link');
const matchResults = window.matchMedia("(max-width: 480px)")
var thresholdValue = 1;

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );




const landingImage = document.querySelector(".landing-image");

window.onload = function(){
    if(page === "weatherlerts.html"){
        landingImage.src = "assests/png/weatherlerts-mockup.png"
    }
    else if(page === "shelter_finds.html"){
        landingImage.src = "assests/png/shelter-finds-mockup.png"
    }
    else if(page === "free_roam.html"){
        landingImage.src = "assests/png/shelter-finds-mockup.png"
    }
}
navToggle.onclick = function() {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
};
if(matchResults == true){
    thresholdValue = .01;
}
else{
    thresholdValue = .3;
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
                navIcon.setAttribute("id","white-menu");
            }
            else{
                header.classList.remove("header-scrolled");
                navIcon.removeAttribute("id","white-menu");
            }
        })
    }, sectionOneOptions)
sectionOneObserver.observe(sectionOne);


