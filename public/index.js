var firstClick = document.getElementById("firstClick");
var secondClick = document.getElementById("secondClick");
var navLinks = document.getElementById("navLinks");

firstClick.addEventListener("click", function(){
    navLinks.style.right = "0"
    navLinks.style.display ="block"
});

secondClick.addEventListener("click", function(){
    navLinks.style.right = "-200px"
    navLinks.style.display = "none";
})

