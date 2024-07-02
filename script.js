//An object for project headers
const projectHeaders= {
    title: "unknown",
    subheading: "unknown",
    tags: []
}

function DisplayProjectDetails(){
    //extract the title of the webpage the user is in
    const pageTitle = document.title;

    //based on the webpage, the object projectHeaders changes its property values.
    switch(pageTitle){
        case "Free Roam": 
            projectHeaders.title = "Free Roam"
            projectHeaders.subheading = "Movement for you at the tap of a button"
            projectHeaders.tags = ["Market Research", "Competitive Analysis", "User Survey", "Personas", "Wireframes", "Flow Diagrams", "High Fidelity Interfaces", "Prototype", "Mini Usability Study", "Accessibility Evaluation"];
        break
        case "Shelter Finds": 
            projectHeaders.title = "Shelter Finds"
            projectHeaders.subheading = "A Rental Search Website for Those With Specific Tastes"
            projectHeaders.tags = ["Market Research", "Competitive Analysis", "User Survey", "Personas", "Wireframes", "Flow Diagrams", "High Fidelity Interfaces", "Prototype", "Mini Usability Study"];
        break 
        case "Weatherlerts": 
            projectHeaders.title = "Weatherlerts"
            projectHeaders.subheading = "Reliable Weather Disaster Tracking and Forecasting App"
            projectHeaders.tags = ["Market Research", "Competitive Analysis", "User Survey", "Personas", "Wireframes", "Flow Diagrams", "High Fidelity Interfaces", "Prototype", "Mini Usability Study"];
        break 
        case "Omar's Portfolio Site": 
            projectHeaders.title = "Personal Portfolio Site"
            projectHeaders.subheading = "To Showcase My Latest Work"
            projectHeaders.tags = ["HTML 5", "CSS 3", "Javascript", "Wireframes", "High Fidelity Interfaces", "Prototype", "Github", "Figma"];
        break 
        default: return
    }

    //display the object values onto the page
    document.getElementById('title').innerHTML = projectHeaders.title;
    document.getElementById('subheader').innerHTML = projectHeaders.subheading;

    const tagElements = document.getElementById("p_tags_group");
    
    //take the tags array and display the indiviual tags based on the array size
    projectHeaders.tags.forEach(tag => {
        const div = document.createElement('div');
        div.className = "p_tags"
        div.innerText = tag;
        tagElements.appendChild(div);
    })
}


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

// Get the star element by its ID

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
        //only if the menu is not visible will the menu become visable when clicking on the menu button
        menuBackground.setAttribute('data-visible','true')
        menuButton.setAttribute('aria-expanded', 'true')
        document.body.style.overflow = 'hidden';
    }
    if(menuVisibility=="true"){
        //only if the menu is visible will the menu become go away when clicking on the close button
        menuBackground.setAttribute('data-visible','false')
        menuButton.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = '';
    }
})
function LinkViewMove(button){
    const menuVisibility = menuBackground.getAttribute('data-visible');

    if (menuVisibility === 'true') {
       //if the menu is in its mobile state, the menu will stop the user from being able to scroll
       menuBackground.setAttribute('data-visible', 'false');
       menuButton.setAttribute('aria-expanded', 'false')
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

const contactForm = document.getElementById("contact_form")

const lastNameParent = document.getElementById("lastnameInput")
const firstNameParent = document.getElementById("firstnameInput")
const emailParent = document.getElementById("emailparentInput")
const phoneInput = document.getElementById("phone_input")
const messageAreaInput = document.getElementById("message_area")



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
    //if there are no invalid inputs, continue to the submit and call the delay function
    contactForm.addEventListener('submit', handleFormDelay)
}

function handleFormDelay(event){

        event.preventDefault()

        const submitButton = document.getElementById('submit_button');
        //add a loading icon
        const loadingIcon = document.getElementById('loading_icon');

        //set the icons style and change the submit text
        loadingIcon.style.display = 'inline-block';
        submitButton.setAttribute('disabled', true);
        submitButton.setAttribute('value', "Sending....")

       //delay the submit by about 1.5 seconds
        setTimeout(function(){
            contactForm.submit();
        },1500)
}
function SendToAboutPage(){
    //send the user to the about page when called
    window.location.href = "about.html"
}

function LinkViewMoveBack(button){
    //if the user is in a project page, move back to the index page and go to the area selected on the menu
    var elemValue = button.getAttribute('data-ids');
    var targetSection = "index.html#" + elemValue;


    window.location.href = targetSection;
}
const animatedScreens = document.querySelectorAll(".screens_animated")

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    //only if the user has reduced motion turned off will this function be called
    addAnimation();
}

function addAnimation(){
    animatedScreens.forEach(screens_animated =>{
        //set all screens animtion attribute set to true
        screens_animated.setAttribute("data-animated", true);


        const screenCopy = screens_animated.querySelector("#animated_container");
        const containerChildren = Array.from(screenCopy.children);

        containerChildren.forEach(item =>{
            //duplicate all screens once
            const duplicatedItem = item.cloneNode(true);
            //add the duplicated item to the screen
            screenCopy.appendChild(duplicatedItem);
        })

    })
}

function ProjectRedirect(button){
    const webpageName = button.getAttribute('data-text');
    const parentElement = button.closest(".project_container");
    const animatedPage = parentElement.querySelector('.img_background_parallax')
    let delay;

    //check to see if the user is on mobile
    const screenWidth = window.screen.width;
    
    if(screenWidth < 480){
        //if the user is on a device less than 480px wide, play an animation on the project images and delay for 1.5 seconds
        animatedPage.setAttribute('data-animated',true)
        delay = 1500;
    }
    else{
        //if the user is on a device more than 480px wide, delay for 1 seconds
        delay = 1000;
    }

    

    setTimeout(function(){
        //set the animation attribute back to false
        animatedPage.setAttribute('data-animated',false)
        //send to project page after "delay" seconds
        window.location.href = webpageName + ".html";
    }, delay)
    
}
DisplayProjectDetails();



const Sections = document.querySelectorAll('.project_section');
const screenWidth = window.screen.width;
let thresholdValue = 0;

if(screenWidth < 480){
    thresholdValue = .01;
}
else{
    thresholdValue = .25;
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
    threshold: .3,
    rootMargin: "",
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
        }, 1500)
    })
})

window.addEventListener("load", function(){
    const loader = document.querySelector("#preloader");
    setTimeout(function(){
        loader.classList.add("hidden");
    }, 2000)
    
})

function EmailThis(){
    window.location.href = 'mailto:omarcarb34@gmail.com';
}

function WebsiteRedirect(button){
    const websiteName = button.getAttribute('data-site')

    window.location.href = websiteName;
}

// for contact form //

const fnameInput = document.getElementById('fname_input')
const lnameInput = document.getElementById('lname_input')
const emailInput = document.getElementById('email_input')

const serviceID = 'service_gpvqb7n';
const templeteID = 'template_6x11r8b'
const publicIDkey = 'D153c5R-mnvwvFCTI'

emailjs.init(publicIDkey);

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputData = {
        firstName: fnameInput.value,
        lastName: lnameInput.value,
        emailID: emailInput.value,
        phoneID: phoneInput.value,
        message: messageAreaInput.value
    };
    emailjs.send(serviceID, templeteID, inputData).then(()=>{
        fnameInput.value = '';
        lnameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        messageAreaInput.value = '';
        console.log("success")
    }, (error)=> {
        console.log(error);
    })
})






