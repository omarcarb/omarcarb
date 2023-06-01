const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-toggle');
const homeLink = document.querySelector('.home-link');
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

const sectionOneOptions = {
    rootMargin: '-100px 0px 20px 0px'
};
const header = document.querySelector("header");
const sectionOne = document.querySelector(".landing-image")

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                header.classList.add("header-scrolled");
            }
            else{
                header.classList.remove("header-scrolled");
            }
        })
    }, sectionOneOptions)

sectionOneObserver.observe(sectionOne);


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

