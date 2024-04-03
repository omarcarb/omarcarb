
// for parallax scroll effect
let foreground = document.getElementsByClassName("wave")[0];
let foreground1 = document.getElementsByClassName("wave")[1];
let foreground2 = document.getElementsByClassName("wave")[2];


window.addEventListener("scroll", function(){
    let value = window.scrollY;

    foreground.style.bottom = value * .4 + 'px';
    foreground1.style.bottom = value * .125 + 'px';
    foreground2.style.bottom = value * 0 + 'px';
})

function LinkViewMove(button){
    var elemValue = button.getAttribute('data-value');
    console.log(elemValue)
    document.getElementsByClassName("section_header")[elemValue].scrollIntoView();
}

const lastNameParent = document.getElementById("lastnameInput")
const firstNameParent = document.getElementById("firstnameInput")
const emailParent = document.getElementById("emailparentInput")
const contactForm = document.getElementById("contact_form")


function ValidityCheck(event, parentElementId){
    event.preventDefault();
    const parentElement = document.getElementById(parentElementId);
    if (parentElement) {
        makeErrorVisible(parentElement);
    }
}

function makeErrorVisible(parentElement){
    const errorMessage = parentElement.querySelector(".error-message");
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
        console.log("it worked")

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
