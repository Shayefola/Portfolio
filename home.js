   
   //Function to check if device is a tablet or phone
   function isMobileDevice() {
    return window.innerWidth < 1023;
}

//Check if device is mobile
if (isMobileDevice()) {
var nav = document.getElementById("navbar");

var carousel = document.getElementById("carousel");  

var ham = document.getElementById("ham");

var innerhead = document.getElementById("innerheader");

var close = document.getElementById("close");

innerhead.style.display = "flex";

ham.style.display = "flex";

nav.style.display = "none";

carousel.style.display = "none"

function togglemenu(){
    
    if(nav.style.display == "none")
    {
        nav.style.display = "flex"
        innerhead.style.background = "none"
        innerhead.style.border = "none"
        innerhead.replaceChild(close, ham)
        close.style.display = "block"
    }
    else
    {
       nav.style.display = "none"
       innerhead.style.border = "1px solid #46202579"
       innerhead.style.background = "#4620250c"
       innerhead.replaceChild(ham, close)
       close.style.display = "none"
    }
    
    if(carousel.style.display == "none"){
        carousel.style.display = "block"
    }
    else
    {
        carousel.style.display = "none"
    }
    
} 

function togglemenuoff(){
    if(close.style.display == "block"){
        carousel.style.display = "none"
        nav.style.display = "none"
       innerhead.style.border = "1px solid #46202579"
       innerhead.style.background = "#4620250c"
       innerhead.replaceChild(ham, close)
       close.style.display = "none"
    }
}
console.log("Running on tablet or phone");
}
else{
console.log("On Desktop");
}

//Delay animation for the blinking circle
window.onload = function() {
    setTimeout(() => {
        const showcircle = document.getElementById('blinking_circle');
        showcircle.classList.remove('hidden');
        //Trigger reflow to apply transition
        void showcircle.offsetWidth;
        showcircle.classList.add('show');
    }, 3000); // 3000 milliseconds = 3 seconds
};