// change html
document.querySelector(".title").innerHTML +=  "Frontend Simplified"

// change css
document.querySelector(".title").style.fontsize = '10px'

function toggleButtonColor() {
    console.log("clicked");
   const button = document.querySelector(".btn");

    button.classList.toggle("is-red"); 
}




