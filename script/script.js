// Search
const searchButton = document.getElementById("search-button");
const closeSearchButton = document.getElementById("close-search-button");
const overlay = document.getElementById("overlay");

searchButton.addEventListener("click", function() {
    overlay.style.top = "0";
});

closeSearchButton.addEventListener("click", function() {
    overlay.style.top = "-100vh";
});


// Menu
const openModalMenuButton = document.getElementById("open-modal-menu");
const closeModalMenuButton = document.getElementById("close-modal-menu");
const overlayMenu = document.getElementById("overlay-menu");

openModalMenuButton.addEventListener('click', function () {
    overlayMenu.style.top = "0px";
})
closeModalMenuButton.addEventListener('click', function () {
    overlayMenu.style.top = "-100vh";
})

// Swiper
var swiper = new Swiper(".swiper-feedback", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});
