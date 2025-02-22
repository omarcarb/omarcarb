let projectData = []
fetch("projects.json")
    .then(response => response.json())
    .then(data => {
        projectData = data;
        ProjectGrid();
        ProejctHeader();
    })
    .catch(error => console.error("Error loading JSON:", error));
const Sections = document.querySelectorAll('.project_section');
const screenWidth = window.screen.width;
let thresholdValue;
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

const path = document.querySelector('#wave path');

if(path){
    let offset = 0;

    function animateWave() {
      offset += .0025; // change this value to change the speed of the wave
      const newPath = generateWavePath(offset);
      path.setAttribute('d', newPath);
      requestAnimationFrame(animateWave);
    }

    
    function generateWavePath(offset) {
      const width = 1440;
      const height = 320;
      const waveHeight = 80;
      const points = 10;

      let path = `M0,${height / 2} `;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * width;
        const y = height / 2 + Math.sin(i * 2 * Math.PI / points + offset) * waveHeight;
        path += `L${x},${y} `;
      }
      path += `L${width},${height} L0,${height} Z`;
      return path;
    }

    animateWave();
}
else{
    console.log("no wave animation found")
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

const revolvingWords = document.getElementById("revolving_words");
const wordsArray = ["Websites", "Apps", "Graphics", "Software Designs", "Mobile Apps"]

const revolveContainer = document.createElement('div')
revolveContainer.setAttribute("id", "word_container")
revolvingWords.appendChild(revolveContainer);

wordsArray.forEach( (wordArray, index) => {
    var wordFragment = document.createElement('h1')
    wordFragment.innerHTML = wordsArray[index];
    revolveContainer.appendChild(wordFragment)
})

const firstWord = document.createElement('h1');
firstWord.innerHTML = wordsArray[0];
revolveContainer.appendChild(firstWord)


function ProjectGrid(){
    let projectGrid = document.querySelector('#project_grid');
    if (!projectGrid) {
        console.error("Error: #project_grid not found in the DOM.");
        return;
    }

    projectData.forEach(project => {
        CreateProjectCard(projectGrid, project);
    });
}

function CreateProjectCard(grid, project){
    let projectCard = document.createElement('div');
    projectCard.classList.add('project_container');

    let content = document.createRange().createContextualFragment(`
        ${project.has_multiple_images
            ? `<div class="img_background_parallax" data-animated="false">
                    <img src="${project.thumbnail_background}" alt="" class="container_background_img">
                    <div class="img_set">
                        <img src="${project.thumbnail_images[0]}" alt="A mockup image of apps and web designs" class="img_left">
                        <img src="${project.thumbnail_images[1]}" alt="A mockup image of apps and web designs" class="img_center">
                        <img src="${project.thumbnail_images[2]}" alt="A mockup image of apps and web designs" class="img_right">
                    </div>
                </div>`
            :
            `<div class="img_background_parallax desktopapp" data-animated="false">
                    <img src="${project.thumbnail_background}" alt="" class="container_background_img">
                    <div class="img_set">
                        <img src="${project.thumbnail_images[0]}" alt="A mockup image of apps and web designs" class="img_center">
                    </div>
                </div>`
        }
        <div class="project_text">
            <h3>${project.title || "No Title"}</h3>
            <div class="project_tags">
                ${project.tags?.slice(0, 3).map(tag => `<p>${tag}</p>`).join("") || ""}
            </div>
            <p>${project.description || "No description available"}</p>
        </div>
`);

    console.log("Card Created for:", project.title);
    projectCard.appendChild(content);
    grid.appendChild(projectCard);

    projectCard.addEventListener("click", function(){
        window.location.href = project.page_url
    })

}