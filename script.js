
// for parallax scroll effect
let foreground = document.getElementsByClassName("wave")[0];
let foreground1 = document.getElementsByClassName("wave")[1];
let foreground2 = document.getElementsByClassName("wave")[2];


window.addEventListener("scroll", function(){
    let value = window.scrollY;

    //as the user scrolls, change the top value of each element by a the scroll position times a set value in pixels
    foreground.style.bottom = value * .4 + 'px';
    foreground1.style.bottom = value * .125 + 'px';
    foreground2.style.bottom = value * 0 + 'px';
})

function LinkViewMove(button){
    // get the buttons value
    var elemValue = button.getAttribute('data-value');

    //using the value, go to the section header matching the value
    document.getElementsByClassName("section_header")[elemValue].scrollIntoView();
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

contactForm.addEventListener('submit', handleFormDelay)

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

function ProjectRedirect(button){
    const webpageName = button.getAttribute('data-text');
    
    window.location.href = webpageName + ".html";
}