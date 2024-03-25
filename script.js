
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