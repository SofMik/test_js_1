const trafficLightEl = document.querySelector('#box');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl1.style.background = ('red');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeRed);



