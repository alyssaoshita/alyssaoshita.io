// When the user scrolls the page, execute myFunction
window.onscroll = function(){myFunction()};

// Get navbar
var navbar = document.getElementById("navbar");

// Get the offset Position of the navbar
var sticky = navbar.offsetTop;

// Add the stick class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll postion

function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}
