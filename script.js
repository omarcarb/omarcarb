
// for parallax scroll effect
let foreground = document.getElementsByClassName("wave")[0];
let foreground1 = document.getElementsByClassName("wave")[1];
let foreground2 = document.getElementsByClassName("wave")[2];

const wavePages = ['index.html', 'about.html']

var path = window.location.pathname
var page = path.split("/").pop();


if(wavePages.includes(page)){
    window.addEventListener("scroll", function(){
        let value = window.scrollY;
        
        //as the user scrolls, change the top value of each element by a the scroll position times a set value in pixels
        if(foreground) foreground.style.bottom = value * .4 + 'px';
        if(foreground1) foreground1.style.bottom = value * .125 + 'px';
        if(foreground2) foreground2.style.bottom = value * 0 + 'px';
    })
}

const aniamtionSet = document.querySelectorAll(".fade_in_animation")

//find elements with an attribute of data-sequence
aniamtionSet.forEach(element =>{
    const sequenceSet = parseFloat(element.getAttribute('data-sequence'));

    //after finding the elements data-sequence value, multiply it by 300 and add this value to animationDuration in milliseconds
    element.style.animationDuration = (sequenceSet * 300) + 'ms';
})

const menuButton = document.querySelector('.mobile-toggle')
const menuBackground = document.querySelector('#primary_nav')

menuButton.addEventListener('click', function(){

    const menuVisibility = menuBackground.getAttribute('data-visible')

    if(menuVisibility=="false"){
        menuBackground.setAttribute('data-visible','true')
        document.body.style.overflow = 'hidden';
    }
    if(menuVisibility=="true"){
        menuBackground.setAttribute('data-visible','false')
        document.body.style.overflow = '';
    }
})
function LinkViewMove(button){
    const menuVisibility = menuBackground.getAttribute('data-visible');

    if (menuVisibility === 'true') {
       
       menuBackground.setAttribute('data-visible', 'false');
       document.body.style.overflow = '';
    }
   // get the buttons value
   var elemValue = button.getAttribute('data-value');

   //using the value, go to the section header matching the value
   var targetElement = document.getElementsByClassName("section_header")[elemValue];

   var scrollPosition = targetElement.offsetTop - 100; 

    
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
}


const lastNameParent = document.getElementById("lastnameInput")
const firstNameParent = document.getElementById("firstnameInput")
const emailParent = document.getElementById("emailparentInput")
const contactForm = document.getElementById("contact_form")


function ValidityCheck(event, parentElementId){
    //prevent the default html message from appearing
    event.preventDefault();

    //the element we are calling is the parent form
    const parentElement = document.getElementById(parentElementId);

    //if the parent element is invalid, call the makeErrorVisible function
    if (parentElement) {
        makeErrorVisible(parentElement);
    }
}

function makeErrorVisible(parentElement){
    //find the element which the error message must be shown to
    const errorMessage = parentElement.querySelector(".error-message");

    //if the error message is not visible, make it visible
    if (errorMessage) {
        errorMessage.style.display = 'block';
        parentElement.dataset.visible = 'true'
    }
}

function RemoveErrorStyle(parentElementId){
    const parentElement = document.getElementById(parentElementId);
    if (parentElement) {
        const errorMessage = parentElement.querySelector(".error-message");
        if (errorMessage) {
            errorMessage.style.display = 'none';
            parentElement.dataset.visible = 'false';
        }
    }
}

if(contactForm !== null){
    contactForm.addEventListener('submit', handleFormDelay)
}

function handleFormDelay(event){

        event.preventDefault()

        const submitButton = document.getElementById('submit_button');
        const loadingIcon = document.getElementById('loading_icon');

        loadingIcon.style.display = 'inline-block';
        submitButton.setAttribute('disabled', true);
        submitButton.setAttribute('value', "Sending....")

       
        setTimeout(function(){
            contactForm.submit();
        },2000)
}
function SendToAboutPage(){
    window.location.href = "about.html"
}

function LinkViewMoveBack(button){
    var elemValue = button.getAttribute('data-ids');
    var targetSection = "index.html#" + elemValue;

    console.log(targetSection)
    window.location.href = targetSection;
}
const animatedScreens = document.querySelectorAll(".screens_animated")

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    animatedScreens.forEach(screens_animated =>{
        screens_animated.setAttribute("data-animated", true);

        const screenCopy = screens_animated.querySelector("#animated_container");
        const containerChildren = Array.from(screenCopy.children);

        containerChildren.forEach(item =>{
            const duplicatedItem = item.cloneNode(true);

            screenCopy.appendChild(duplicatedItem);
        })

    })
}

function ProjectRedirect(button){
    const webpageName = button.getAttribute('data-text');

    setTimeout(function(){
        window.location.href = webpageName + ".html";
    }, 1500)
    
}

const Sections = document.querySelectorAll('.project_section');
const screenWidth = window.screen.width;
let thresholdValue = 0;

if(screenWidth < 480){
    thresholdValue = .15;
}
else{
    thresholdValue = .5;
}

const options = {
    root: null,
    threshold: thresholdValue,
    rootMargin: "",
};

let observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.setAttribute("data-animated", true)
        } 
    })
}, options)

Sections.forEach(section =>{
    observer.observe(section)
})

const indexSection = document.querySelectorAll('.project_container');

const options1 = {
    root: null,
    threshold: .9,
    rootMargin: "-100px 0px -100px 0px",
};

let indexObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        const screenWidth = window.screen.width;
        let sequenceSet
        
        if(screenWidth<480){
            sequenceSet = 0;
        }
        else{
            sequenceSet = parseFloat(entry.target.getAttribute('data-animation-sequence'))
        }
        
        console.log(sequenceSet)
        
        entry.target.style.animationDelay = (sequenceSet * 150)+ 'ms'
        
        if(entry.isIntersecting){
            entry.target.setAttribute("data-animated", true)
        }
    })
}, options1)

indexSection.forEach(section =>{
    indexObserver.observe(section)
})

const outsideLinks = document.querySelectorAll('.icon_background')

outsideLinks.forEach(function(object){
    object.addEventListener('click', function(){
        object.classList.add('bouncing');

        const linkID = object.id;
        
        setTimeout(function(){
            switch(linkID){
                case 
                'dribbble': window.location.href = ("https://dribbble.com/omarcarb34");
                break;
                case 'linkedin': window.location.href = ("https://www.linkedin.com/in/omar-carb03/");
                break;
                case 'github': window.location.href = ("https://github.com/omarcarb");
                break;
                default: console.log("Link not found")
            }
            object.classList.remove('bouncing');
        }, 2000)
    })
})
