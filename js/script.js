const scrollUp = document.querySelector("#scroll-up")

window.addEventListener("scroll", function(){
    if(window.scrollY==0){
        //user is at the top of the page; no need to show the back to top button
        scrollUp.classList.remove("up-arrow-show")
        scrollUp.classList.add("up-arrow-hide")
    } else {
        scrollUp.classList.remove("up-arrow-hide")
        scrollUp.classList.add("up-arrow-show")
    }
  });

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})


// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
)

const socials = document.querySelector("#socials");

socials.addEventListener("hover", () => {
    console.log("Hover")
    socials.classList.add("animate__animated");
    socials.classList.add("animate__bounce");
})