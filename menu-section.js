let show = true; 

const container = document.querySelector(".container")
const menuSection = document.querySelector(".menu-section")
const menuToggleClose = menuSection.querySelector(".menu-toggle-close")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuSection.classList.toggle("off", show)

menuToggle.addEventListener("click", () => {
    container.classList.toggle("on", show)
    menuSection.classList.toggle("on", show)
    menuToggleClose.classList.toggle("on", show)
    
    show = !show;
})