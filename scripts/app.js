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

//-----------------------------------------

$('.owl-carousel').owlCarousel({
    nav: true,
    loop:true,
    margin:80,
    // autoplay: true,
    responsiveClass:true,
    navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:1,
            nav:true
        },
        992:{
            items:2,
            nav:true
        },

    }
})