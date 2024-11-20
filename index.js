const menuBtn = document.querySelector(".menu");
const dropdown = document.querySelector(".menu-dropdown");

menuBtn.onclick = function (){
    dropdown.classList.toggle("show");    
}
