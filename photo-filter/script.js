//FullScreen

const btnFullScreen = document.querySelector(".fullscreen");
btnFullScreen.addEventListener("click", (e) => {
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
})

//Filter to image

const filters = document.querySelectorAll(".filters input");
const output = document.querySelectorAll(".filters output");
const imageContainer = document.querySelector(".image-container");


function filtersRange() {
  const measurement = this.dataset.sizing || "";
  imageContainer.style.setProperty(`--${this.name}`, this.value + measurement);
  this.nextElementSibling.value = this.value;
}

filters.forEach(input => input.addEventListener("change", filtersRange));
filters.forEach(input => input.addEventListener("mousemove", filtersRange));

//Reset style

const btnReset = document.querySelector(".btn-reset");
const filterSaturate = document.querySelector(".saturate");

const resetFilters = () => {
    imageContainer.removeAttribute("style");
    filters.forEach(item => {
        item.value = 0;
        item.nextElementSibling.value = 0;
    });
    filterSaturate.value = 100;
    filterSaturate.nextElementSibling.value = 100;
}

btnReset.addEventListener("click", resetFilters)

//Load picture

const loadBtn = document.querySelector("input[type='file']");

loadBtn.addEventListener('change', function(e) {
    const file = loadBtn.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    imageContainer.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

//Next picture

const btnNext = document.querySelector(".btn-next");

//period of the day

const getPeriodDay = (hourNow) => {
    hourNow = new Date().getHours();
    let periodDay = '';
    if (hourNow >= 6 && hourNow < 12) {
        periodDay = 'morning'
    } else if (hourNow >= 12 && hourNow < 18) {
        periodDay = 'day';
    } else if (hourNow >= 18 && hourNow < 24) {
        periodDay = 'evening'
    } else if (hourNow < 6) {
        periodDay = 'night'
    }
    return periodDay;
}

const imgNumber = ['01.jpg', '02.jpg', '03.jpg','04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let index = 0;

const getLinkImage = () => {
    imageContainer.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getPeriodDay()}/${imgNumber[index]}`;
    index++;
    if (index > 19) {
        index = 0;
    }
}

btnNext.addEventListener ('click', getLinkImage);

//Save image

let arrValue = []; //array of value's filters
const getArrValue = () => {
    let arr = [];
    filters.forEach(item => {
        arr.push(item.value);
    })
    arrValue = [...arr];
}

filters.forEach(input => input.addEventListener("change", getArrValue));

const btnSave = document.querySelector(".btn-save");
const canvas = document.querySelector("canvas");



function drawImage() {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = imageContainer.src;
  img.onload = function() {
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
}
drawImage()

const saveImage = () => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = imageContainer.src;
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.filter = `blur(${arrValue[0]*(canvas.height/500)}px) invert(${arrValue[1]/100}) sepia(${arrValue[2]/100}) saturate(${arrValue[3]/100}) hue-rotate(${arrValue[4]}deg)`;
      ctx.drawImage(img, 0, 0);
      let link = document.createElement('a');
      link.download = 'picture.png';
      link.href = canvas.toDataURL("image/png");
      link.click();
      link.delete;
    };
}

btnSave.addEventListener("click", saveImage);
