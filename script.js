
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
    document.getElementsByClassName("section_header")[elemValue].scrollIntoView();
}

const lastNameParent = document.getElementById("lastnameInput")

const firstNameParent = document.getElementById("firstnameInput")

const emailParent = document.getElementById("emailparentInput")


function FirstNameValidity(event){
    event.preventDefault();
    makeFirstNameErrorVisable();
}
function makeFirstNameErrorVisable(){
    const errorMessage = firstNameParent.querySelector(".error-message")

    errorMessage.style.display = 'block'
}

function LastNameValidity(event){
    event.preventDefault();
    makeLastNameErrorVisable();
}
function makeLastNameErrorVisable(){
    const errorMessage = lastNameParent.querySelector(".error-message");

    errorMessage.style.display = 'block';
}
function EmailValidity(event){
    event.preventDefault();
    makeEmailErrorVisable();
}
function makeEmailErrorVisable(){
    const errorMessage = emailParent.querySelector(".error-message");

    errorMessage.style.display = 'block';
}

function RemoveLastErrorStyle(){
    const errorMessage = lastNameParent.querySelector(".error-message");
    errorMessage.style.display = 'none'
}
function RemoveFirstErrorStyle(){
    const errorMessage = firstNameParent.querySelector(".error-message");
    errorMessage.style.display = 'none'
}
function RemoveEmailErrorStyle(){
    const errorMessage = emailParent.querySelector(".error-message");
    errorMessage.style.display = 'none'
}