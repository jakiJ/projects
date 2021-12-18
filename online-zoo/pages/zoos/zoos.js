//more information about animals on animals pages

const openSideBtn = document.querySelector(".open-side-btn");
const closeSideBtn = document.querySelector(".close-side-btn");
const moreSideBtn = document.querySelector(".more-side-btn");
const sideMenu = document.querySelector(".side-menu");
const sideMenuAdaptive = document.querySelector(".side-menu-adaptive");
const sideMenuWibe = document.querySelector(".side-menu-wibe");
const moreItemAnimal = document.querySelectorAll(".inside-item-more");
let width = document.querySelector(".side-menu").offsetWidth;
console.log(width);

const withDescription = document.querySelectorAll(".with-description");
const withoutDescription = document.querySelectorAll(".without-description");



openSideBtn.addEventListener("click", (e) => {
    sideMenu.style.width = 300 + "px";
    openSideBtn.style.display = "none";
    closeSideBtn.style.display = "block";
    withoutDescription.forEach(item => item.style.display = "none");
    withDescription.forEach(item => item.style.display = "flex");
});

closeSideBtn.addEventListener("click", (e) => {
    sideMenu.style.width = 220 + "px";
    closeSideBtn.style.display = "none";
    openSideBtn.style.display = "block";
    withDescription.forEach(item => item.style.display = "none");
    withoutDescription.forEach(item => item.style.display = "flex");
});

// const openMoreItemAnimal = (e) => {
//     sideMenu.style.height = (height * 2) + "px";
//     moreItemAnimal.forEach(item => item.style.display = "flex");
//     moreSideBtn.style.display = "none";
//     lessSideBtn.style.display = "block";
// }

// const closeMoreItemAnimal = (e) => {
//     sideMenu.style.height = height + "px";
//     moreItemAnimal.forEach(item => item.style.display = "none");
//     lessSideBtn.style.display = "none";
//     moreSideBtn.style.display = "block";
// }

// moreSideBtn.addEventListener("click", openMoreItemAnimal);
// lessSideBtn.addEventListener("click", closeMoreItemAnimal);

const animalItem = document.querySelectorAll(".main-aside-block");

let order = [];
animalItem.forEach(item => {
    order.push(Number(item.style.order));
});
console.log(order);

const changeOrder = (e) => {
    animalItem.forEach(item => {
        item.style.order = Number(item.style.order) - 1;

        if (Number(item.style.order) === -1) {
            item.style.order = 7;
        }
    })
}

moreSideBtn.addEventListener("click", changeOrder);


//movie slider

const btnForward = document.querySelector(".btn-forward");
const btnBack = document.querySelector(".btn-back-movie");
const movieConteiner = document.querySelectorAll(".movie-conteiner");

let orderMovie = [];
movieConteiner.forEach(item => {
    orderMovie.push(Number(item.style.order));
});
console.log(orderMovie);

const changeOrderForward = (e) => {
    console.log("back");
    movieConteiner.forEach(item => {
        item.style.order = Number(item.style.order) - 1;

        if (Number(item.style.order) === -1) {
            item.style.order = 5;
        }
    })
}

const changeOrderBack = (e) => {
    console.log("back");
    movieConteiner.forEach(item => {
        item.style.order = Number(item.style.order) + 1;

        if (Number(item.style.order) === 6) {
            item.style.order = 0;
        }
    })
}

btnForward.addEventListener("click", changeOrderForward);
btnBack.addEventListener("click", changeOrderBack);

//change main video

const mainVideo = document.querySelector(".main-iframe-video");
const sliderVideo = document.querySelectorAll(".slider-iframe-video");

// const changeVideo = (e) => {
//     let mainSrc = mainVideo.src;
//     mainVideo.src = event.target.previousElementSibling.src;
//     event.target.previousElementSibling.src = mainSrc;
// }

movieConteiner.forEach(item => {
    item.addEventListener("click", (e) => {
        let mainSrc = mainVideo.src;
        console.log(mainSrc);
        mainVideo.src = e.target.nextElementSibling.src;
        e.target.nextElementSibling.src = mainSrc;
    });
})