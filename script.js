const hamburger = document.querySelector(".hamburger");
const left = document.querySelector(".left");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    left.classList.toggle("active");
})
document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    left.classList.remove("active");
}))




