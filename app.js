const hamberger = document.querySelector(".hamberger_icon");
const cross_icon = document.querySelector(".cross_icon");
const navLinks = document.querySelector(".mobile_nav_link");
const links = document.querySelectorAll(".mobile_nav_link a");

hamberger.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("transform");
});


cross_icon.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("transform");
});

links.forEach((element)=>{
  element.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("transform");
  });
})
