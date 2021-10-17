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