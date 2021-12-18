//burger menu
const btnBurger = document.querySelector('.burger-menu-btn');
const btnBurgerClose = document.querySelector('.burger-menu-btn-close');
const burgerMenu = document.querySelector(".burger-menu");

btnBurger.addEventListener('click', (e) => {
    burgerMenu.style.display = "block";
})

btnBurgerClose.addEventListener('click', (e) => {
    burgerMenu.style.display = "none";
})

//pop-up donate

const btnDonate = document.querySelectorAll(".btn-donate");
const mainPopUp = document.querySelector(".main-pop-up");
const cover = document.querySelector(".cover");
const btnPopUpClose = document.querySelector(".close-pop-up");
const firstSlidePopUp = document.querySelector(".pop-up-slide-first");
const secondSlidePopUp = document.querySelector(".pop-up-slide-second");
const thirdSlidePopUp = document.querySelector(".pop-up-slide-third");

const openPopUp = (e) => {
    document.body.classList.add('notScrollable');
    mainPopUp.classList.remove("hidden");
    cover.classList.remove("hidden");
}

btnDonate.forEach(item => item.addEventListener("click", openPopUp))

const closePopUp = (e) => {
    document.body.classList.remove('notScrollable');
    mainPopUp.classList.add("hidden");
    cover.classList.add("hidden");
    firstSlidePopUp.style.display = "none";
    secondSlidePopUp.style.display = "none";
    thirdSlidePopUp.style.display = "none";
}

cover.addEventListener("click", closePopUp);
btnPopUpClose.addEventListener("click", closePopUp);

const btnAmountMain = document.querySelectorAll(".btn-amount-main");
const btnAmountOther = document.querySelectorAll(".btn-amount-other");
const inputAmount = document.querySelector(".donation-amount");
const setAnimal = document.querySelector(".set-animal");
// console.log(btnAmountOther);
const btnFirstNext = document.querySelector(".first-next");
const btnSecondNext = document.querySelector(".second-next");
const btnFirstBack = document.querySelector(".first-back");
const btnSecondBack = document.querySelector(".second-back");
const btnCompleteDonate = document.querySelector(".complete-donate");

btnAmountMain.forEach(item => {
    item.addEventListener("click", (e) => {
        mainPopUp.classList.add("hidden");
        firstSlidePopUp.style.display = "flex";
        let amount = e.target.dataset.amount;
        console.log(typeof amount)
        inputAmount.value = amount;
        btnAmountOther.forEach(btn => {
            btn.removeAttribute("style");
        });
        btnAmountOther.forEach(item => {
            if (item.dataset.amount == amount) {
                item.style.backgroundColor = "#00A092";
            }
        })
    })
})

// btnAmountOther.forEach(item => {
//     item.addEventListener("mouseover", (e) => {
//         e.target.style.backgroundColor = "#05786E";
//     })
// })
// btnAmountOther.forEach(item => {
//     item.addEventListener("mouseout", (e) => {
//         e.target.removeAttribute("style");
//     })
// })


//FIRST PAGE

btnAmountOther.forEach(item => {
    item.addEventListener("click", (e) => {
        btnAmountOther.forEach(btn => {
            btn.removeAttribute("style");
        });
        e.target.style.backgroundColor = "#00A092";
        let amount = e.target.dataset.amount;
        inputAmount.value = amount;
    })
})

inputAmount.addEventListener("input", (e) => {
    if (e.target.value.length > 4) {
        e.target.value = e.target.value.slice(0, 4);
    }
});


btnFirstNext.addEventListener("click", (e) => {
    if (!inputAmount.value || !setAnimal.value) {
        alert("Необходимо заполнить все поля 8)")
        return false
    }
    firstSlidePopUp.style.display = "none";
    secondSlidePopUp.style.display = "flex";

})

//SECOND PAGE

btnFirstBack.addEventListener("click", (e) => {
    secondSlidePopUp.style.display = "none";
    firstSlidePopUp.style.display = "flex";
})

const personName = document.querySelector(".person-name");
const personEmail = document.querySelector(".person-email");

btnSecondNext.addEventListener("click", (e) => {
    if (!personName.value || !personEmail.value) {
        alert("Необходимо заполнить все поля 8)")
        return false
    }
    secondSlidePopUp.style.display = "none";
    thirdSlidePopUp.style.display = "flex";

})

//THIRD PAGE

btnSecondBack.addEventListener("click", (e) => {
    thirdSlidePopUp.style.display = "none";
    secondSlidePopUp.style.display = "flex";
})

const cardNumber = document.querySelector(".card-number");
const cvvNumber = document.querySelector(".cvv-number");
const cardMonth = document.getElementById("date-month");
const cardYear = document.getElementById("date-year");

console.log(cardMonth.value);
console.log(cardYear.value);



cardNumber.addEventListener("input", (e) => {
    if (e.target.value.length > 16) {
        e.target.value = e.target.value.slice(0, 16);
    }
})

cvvNumber.addEventListener("input", (e) => {
    if (e.target.value.length > 3) {
        e.target.value = e.target.value.slice(0,3);
    }
})

btnCompleteDonate.addEventListener("click", (e) => {
    if (!cardNumber.value || !cvvNumber.value || (cardYear.value == "Year") || (cardMonth.value == "Month")) {
        alert("Необходимо заполнить все поля 8)")
        return false
    }
    alert("Thank you for your donation");
    closePopUp();
})

//QUICK DONATION

const inputDonation = document.querySelector(".input_donation");
const btnDonateSent = document.querySelector(".bnt_donation_sent");

inputDonation.addEventListener("input", (e) => {
    if (e.target.value.length > 4) {
        e.target.value = e.target.value.slice(0, 4);
    }
})

btnDonateSent.addEventListener("click", (e) => {
    let amount = inputDonation.value;
    document.body.classList.add('notScrollable');
    cover.classList.remove("hidden");
    firstSlidePopUp.style.display = "flex";
    if (amount.length == 0) {
        let ten = document.querySelector(".btn-amount-other-ten");
        inputAmount.value = ten.dataset.amount;
        ten.style.backgroundColor = "#00A092";
    } else {
        inputAmount.value = amount;
    }
})

// //more information about animals on animals pages

// const openSideBtn = document.querySelector(".open-side-btn");
// const closeSideBtn = document.querySelector(".close-side-btn");
// const moreSideBtn = document.querySelector(".more-side-btn");
// const sideMenu = document.querySelector(".side-menu");
// const sideMenuAdaptive = document.querySelector(".side-menu-adaptive");
// const sideMenuWibe = document.querySelector(".side-menu-wibe");
// const moreItemAnimal = document.querySelectorAll(".inside-item-more");
// let width = document.querySelector(".side-menu").offsetWidth;
// console.log(width);

// const withDescription = document.querySelectorAll(".with-description");
// const withoutDescription = document.querySelectorAll(".without-description");



// openSideBtn.addEventListener("click", (e) => {
//     sideMenu.style.width = 300 + "px";
//     openSideBtn.style.display = "none";
//     closeSideBtn.style.display = "block";
//     withoutDescription.forEach(item => item.style.display = "none");
//     withDescription.forEach(item => item.style.display = "flex");
// });

// closeSideBtn.addEventListener("click", (e) => {
//     sideMenu.style.width = 220 + "px";
//     closeSideBtn.style.display = "none";
//     openSideBtn.style.display = "block";
//     withDescription.forEach(item => item.style.display = "none");
//     withoutDescription.forEach(item => item.style.display = "flex");
// });

// // const openMoreItemAnimal = (e) => {
// //     sideMenu.style.height = (height * 2) + "px";
// //     moreItemAnimal.forEach(item => item.style.display = "flex");
// //     moreSideBtn.style.display = "none";
// //     lessSideBtn.style.display = "block";
// // }

// // const closeMoreItemAnimal = (e) => {
// //     sideMenu.style.height = height + "px";
// //     moreItemAnimal.forEach(item => item.style.display = "none");
// //     lessSideBtn.style.display = "none";
// //     moreSideBtn.style.display = "block";
// // }

// // moreSideBtn.addEventListener("click", openMoreItemAnimal);
// // lessSideBtn.addEventListener("click", closeMoreItemAnimal);

// const animalItem = document.querySelectorAll(".main-aside-block");

// let order = [];
// animalItem.forEach(item => {
//     order.push(Number(item.style.order));
// });
// console.log(order);

// const changeOrder = (e) => {
//     animalItem.forEach(item => {
//         item.style.order = Number(item.style.order) - 1;

//         if (Number(item.style.order) === -1) {
//             item.style.order = 7;
//         }
//     })
// }

// moreSideBtn.addEventListener("click", changeOrder);


// //movie slider

// const btnForward = document.querySelector(".btn-forward");
// const btnBack = document.querySelector(".btn-back");
// const movieConteiner = document.querySelectorAll(".movie-conteiner");

// let orderMovie = [];
// movieConteiner.forEach(item => {
//     orderMovie.push(Number(item.style.order));
// });
// console.log(orderMovie);

// const changeOrderForward = (e) => {
//     movieConteiner.forEach(item => {
//         item.style.order = Number(item.style.order) - 1;

//         if (Number(item.style.order) === -1) {
//             item.style.order = 5;
//         }
//     })
// }

// const changeOrderBack = (e) => {
//     movieConteiner.forEach(item => {
//         item.style.order = Number(item.style.order) + 1;

//         if (Number(item.style.order) === 6) {
//             item.style.order = 0;
//         }
//     })
// }

// btnForward.addEventListener("click", changeOrderForward);
// btnBack.addEventListener("click", changeOrderBack);

// //change main video

// const mainVideo = document.querySelector(".main-iframe-video");
// const sliderVideo = document.querySelectorAll(".slider-iframe-video");

// // const changeVideo = (e) => {
// //     let mainSrc = mainVideo.src;
// //     mainVideo.src = event.target.previousElementSibling.src;
// //     event.target.previousElementSibling.src = mainSrc;
// // }

// movieConteiner.forEach(item => {
//     item.addEventListener("click", (e) => {
//         let mainSrc = mainVideo.src;
//         console.log(mainSrc);
//         mainVideo.src = e.target.nextElementSibling.src;
//         e.target.nextElementSibling.src = mainSrc;
//     });
// })


//SLIDER IN BLOCK MEET SOME OUR PETS ON LENDING PAGE

const animalCardsItem = document.querySelectorAll(".card-of-item");
const sliderBtnBack = document.getElementById("btn-back");
const sliderBtnNext = document.getElementById("btn-next");

console.log()

sliderBtnNext.addEventListener("click", (e) => {
    console.log("fjkd")
    animalCardsItem.forEach(item => {
        item.style.order = Number(item.style.order) - 1;
        if (Number(item.style.order) === -1) {
            item.style.order = 7;
        }
    })
});

sliderBtnBack.addEventListener("click", (e) => {
    console.log("fuck")
    animalCardsItem.forEach(item => {
        item.style.order = Number(item.style.order) + 1;
        if (Number(item.style.order) === 8) {
            item.style.order = 0;
        }
    })
})

//SLIDER IN BLOCK WHAT OUR USERS THINK

const userThink = document.querySelectorAll(".user-think__item");
const userBtnBack = document.querySelector(".user-think__btn-back");
const userBtnNext = document.querySelector(".user-think__btn-next");

const userThinkBack = (e) => {
    userThink.forEach(item => {
        item.style.order = Number(item.style.order) + 1;
        if (Number(item.style.order) === 4) {
            item.style.order = 0;
        }
    })
}

const userThinkNext = (e) => {
    userThink.forEach(item => {
        item.style.order = Number(item.style.order) - 1;
        if (Number(item.style.order) === -1) {
            item.style.order = 3;
        }
    })
}

userBtnBack.addEventListener("click", userThinkBack);

userBtnNext.addEventListener("click", userThinkNext);

let timeInterval = 15000;

setInterval(userThinkNext, timeInterval);

// userThink.forEach(item => {
//     item.addEventListener("mouseover", e => {
//         timeInterval = 0;
//     });
// })

// userThink.forEach(item => {
//     item.addEventListener("mouseout", e => {
//         timeInterval = 15000;
//     });
// })

