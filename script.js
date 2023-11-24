// nav bar elements for mobile devices //
const menuButton = document.querySelector(".mobile-toggle")
const navigationElements = document.querySelector(".primary-navigation")

menuButton.onclick = function() {
    const visibility = navigationElements.getAttribute('data-visible');
    
    if(visibility === "false"){
        navigationElements.setAttribute("data-visible", true);
        menuButton.setAttribute('aria-expanded', true);
        disableScroll();
    }
    else if(visibility === "true"){
        navigationElements.setAttribute("data-visible", false);
        menuButton.setAttribute('aria-expanded', false);
        enableScroll();
    }
};

// for closing menu when clicking on contact button on mobile  //

const contactButton = document.querySelector(".button__contact")

contactButton.onclick = function(){
    const visibility = navigationElements.getAttribute('data-visible');

    if(visibility == "true"){
        navigationElements.setAttribute("data-visible", false);
        menuButton.setAttribute('aria-expanded', false);
    }
    else{
        return;
    }
    console.log(visibility);
}

// for parallax scroll effect
let background = document.getElementById("background");
let foreground = document.getElementById("foreground");
let foreground1 = document.getElementById("foreground1");
let foreground2 = document.getElementById("foreground2");


window.addEventListener("scroll", function(){
    let value = window.scrollY;

    foreground.style.top = value * .3 + 'px';
    foreground1.style.top = value * .2 + 'px';
    foreground2.style.top = value * .1 + 'px';
    background.style.top = value * .08 + 'px';
})

console.log(window.innerWidth);

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
