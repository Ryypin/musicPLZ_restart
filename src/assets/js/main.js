'use strict';

let spaceInput = 0;
let inputCount = 0;
let timer;
let video = document.querySelector(".main__video");
let logo = document.querySelector("#logo");
let mainMobile = document.querySelector(".main");


// <---------- SPACE BAR ANIMATION ---------->

document.body.onkeydown = function(e){
    if(e.keyCode != 32){
        video.pause();
    } else if(inputCount == 12){
        e.preventDefault();
        clearTimeout(timer);
        video.play();
        showEnd();
        logo.style.transform = `scale(0)`;
    } else if(e.keyCode == 32 && spaceInput < 2){
        spaceClick();
        e.preventDefault();
        spaceInput++;
        inputCount++;
    } else {
        e.preventDefault();
        spaceClick();
    }
}
mainMobile.addEventListener("touchend", (e) => {
    if(inputCount == 12){
        e.preventDefault();
        clearTimeout(timer);
        video.play();
        showEnd();
        logo.style.transform = `scale(0)`;
    } else if(spaceInput < 2){
        spaceClick();
        e.preventDefault();
        spaceInput++;
        inputCount++;
    } else {
        e.preventDefault();
        spaceClick();
    }
})

function Timer(){
    clearTimeout(timer);
    video.play();
    spaceInput = 0;
    timer = setTimeout(function stop(){
        show();
        spaceInput = 0;
        video.pause();
    }, 3000);
}

function spaceClick(){
    if(spaceInput == 2){
        Timer();
        animation();
        endOF();
        showEnd();
        spaceInput = 0;
    } else {
        animation();
    }
}

function animation(){
    logo.animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(10px)' }
      ], {
        // timing options
        duration: 100,
        iterations: 1
      });
}

function endOF(){
    let mainText = document.querySelector(".main__text");
    mainText.classList.add("hidden");
}

function show(){
    let mainShow = document.querySelector(".main__text--show");
    mainShow.classList.remove("hidden");
}

function showEnd(){
    let mainShow = document.querySelector(".main__text--show");
    mainShow.classList.add("hidden");
}

// <---------- BURGER MENU ---------->

let buttonBurger = document.querySelector(".nav__burger");
let change = document.querySelector(".header");

buttonBurger.addEventListener("click", () =>{
    change.classList.toggle("change");
})

// <---------- SLIDER ---------->

const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");

function next(){
    let elShow = document.querySelector(".slider__el--show");
    let elNext = elShow.nextElementSibling;

    elShow.classList.remove("slider__el--show");

    if(elNext){
        elNext.classList.add("slider__el--show");
    } else{
        let elFirst = elShow.parentNode.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }
}

function prev(){
    let elShow = document.querySelector(".slider__el--show");
    let elPrev = elShow.previousElementSibling;

    elShow.classList.remove("slider__el--show");

    if(elPrev){
        elPrev.classList.add("slider__el--show");
    } else{
        let elFirst = elShow.parentNode.lastElementChild;
        elFirst.classList.add("slider__el--show");
    }
}

btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);

const slider = document.querySelector(".slider");
const hammerSlider = new Hammer(slider);

hammerSlider.on("swipeleft", prev);
hammerSlider.on("swiperight", next);