'use strict';

let spaceInput = 0;
let inputCount = 0;
let timer;
let video = document.querySelector(".header__video");
let logo = document.querySelector("#logo");


// <---------- SPACE BAR ANIMATION ---------->

document.body.onkeydown = function(e){
    if(e.keyCode != 32){
        video.pause();
    } else if(e.keyCode == 32 && spaceInput < 2){
        spaceClick();
        e.preventDefault();
        spaceInput++;
        inputCount++;
    } else if(inputCount == 12){
        e.preventDefault();
        clearTimeout(timer);
        video.play();
        logo.style.transform = `scale(0)`;
    } else {
        e.preventDefault();
        spaceClick();
    }
}

function Timer(){
    clearTimeout(timer);
    video.play();
    spaceInput = 0;
    timer = setTimeout(function stop(){
        spaceInput = 0;
        video.pause();
    }, 3000);
}

function spaceClick(){
    if(spaceInput == 2){
        Timer();
        animation();
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

// <---------- BURGER MENU ---------->

let buttonBurger = document.querySelector(".nav__burger");
let change = document.querySelector(".header");

buttonBurger.addEventListener("click", () =>{
    change.classList.toggle("change");
})