let icon = document.querySelector(".menu-icon")
let menu = document.querySelector(".main-menu")
let times = document.querySelector(".icon-times")

icon.addEventListener('click' , function () {
    if (icon.classList.contains("fa-bars")) {
        menu.style.left = 0;
        icon.classList = "";
    }
} )

times.addEventListener('click' , function (){
    if (times.classList.contains("fa-times")){
        menu.style.left = "-250px";
        icon.classList = "fa fa-bars menu-icon";
    }
})