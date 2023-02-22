const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const closeIcon = document.getElementById("close-icon");


hamburger.addEventListener("click", ()=> {
    navLinks.classList.toggle("active");
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
})

closeIcon.addEventListener("click", ()=> {
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
    if (navLinks.classList.contains("active")){
        navLinks.classList.remove("active");
    }
})