const letter = document.querySelector('.btn-letters');
const notes = document.querySelector('.btn-notes');
const pianoKey = document.querySelectorAll('.piano-key');
const piano = document.getElementById('piano');

//change Notes and Letters

letter.addEventListener('click', (e) => {
    letter.classList.add('btn-active');
    notes.classList.remove('btn-active');
    pianoKey.forEach(item => {
        item.classList.add('piano-key-letter');
    })
})


notes.addEventListener('click', (e) => {
    notes.classList.add('btn-active');
    letter.classList.remove('btn-active');
    pianoKey.forEach(item => {
        item.classList.remove('piano-key-letter');
    })
})

//fullscreen

const btnFS = document.querySelector('.fullscreen');

btnFS.addEventListener('click', (e) => {
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
})

//audio

//управление клавиатурой
function removeTransition(e) {
    e.target.classList.remove('piano-key-active');
    e.target.classList.remove('piano-key-active-pseudo');
  }

function startSoundKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
    audio.currentTime = 0;
    audio.play();
}

pianoKey.forEach(item => item.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', startSoundKey);


//МЫШЬ

const startSoundMouse = (event) => {
    let key = event.target;
    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
    let audio = document.getElementById(key.dataset.note);

    audio.currentTime = 0;
    audio.play();

    key.addEventListener('mouseup',() => {
        event.target.classList.remove('piano-key-active');
        event.target.classList.remove('piano-key-active-pseudo');
       });
}

pianoKey.forEach(item => {
    item.addEventListener('mousedown', startSoundMouse);
})


//2
const startSound = (event) => {
    let key = event.target;
    event.target.classList.add('piano-key-active');
    event.target.classList.add('piano-key-active-pseudo');
    let audio = document.getElementById(key.dataset.note);

    audio.currentTime = 0;
    audio.play();
}

const stopSound = (event) => {
    event.target.classList.remove('piano-key-active');
    event.target.classList.remove('piano-key-active-pseudo');
}

const startSoundPiano = (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.add("piano-key-active");
      }

    pianoKey.forEach((item) => {
        item.addEventListener("mouseover", startSound);
        item.addEventListener("mouseout", stopSound);
    })
};

const stopSoundPiano = () => {
    pianoKey.forEach(item => {
        item.removeEventListener("mouseover", startSound);
        item.removeEventListener("mouseout", stopSound);
    })
}

piano.addEventListener('mousedown', startSoundPiano);  //слушаю событие на верхнем контейнере
piano.addEventListener('mouseup', stopSoundPiano);