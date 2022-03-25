const header = document.querySelector(".header.container");
const goTopBtn = document.querySelector(".gotop_btn i");

document.addEventListener("scroll", ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#547B97";
        goTopBtn.style.display = "flex";
    } else {
        header.style.backgroundColor = "transparent";
        goTopBtn.style.display = "none";
    }
})

goTopBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

const toogleBtn = document.querySelector(".nav_hamburger");
const menu = document.querySelector(".navbar_menu");
const menu_item = document.querySelector(".nav_menu .navbar_menu li a");

toogleBtn.addEventListener("click" , ()=>{
    menu.classList.toggle("active");
})

menu_item.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle("active");
    })
})
