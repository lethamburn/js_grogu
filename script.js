
const expressions = [
    document.querySelector('img').innerHTML = '<img src="img/one.gif" style="height: 200px; width: auto">',
    document.querySelector('img').innerHTML = '<img src="img/two.gif" style="height: 200px; width: auto">',
    document.querySelector('img').innerHTML = '<img src="img/three.gif" style="height: 200px; width: auto">',
    document.querySelector('img').innerHTML = '<img src="img/four.gif" style="height: 200px; width: auto">',
    document.querySelector('img').innerHTML = '<img src="img/food.gif" style="height: 200px; width: auto">',
    document.querySelector('img').innerHTML = '<img src="img/play.gif" style="height: 200px; width: auto">'
]

const creatureOutput = document.querySelector(".output .creature")

const hungerOutput = document.querySelector(".output .hunger")
const hungerValueText = hungerOutput.querySelector(".value")
const hungerProgressBar = hungerOutput.querySelector("progress")

const playContainer = document.querySelector(".output .play");
const playValueText = playContainer.querySelector(".value");
const playProgressBar = playContainer.querySelector("progress");

const happinessOutput = document.querySelector(".output .happiness");
const happinessValueText = happinessOutput.querySelector(".value");
const happinessProgressBar = happinessOutput.querySelector("progress");

const btnFeed = document.querySelector(".action-feed");
const btnPlay = document.querySelector(".action-play");


btnFeed.onclick = (e) => feed();
btnPlay.onclick = (e) => playWith();

const renderSpeed = 1000 / 60;

const decayRateHunger = 1 * 1000;
const decayRatePlay = .5 * 1000;

let scoreHunger = 100;
const scoreHungerMax = 100;
let scorePlay = 100;
const scorePlayMax = 100;

const actionFeedIncrement = 5;
const actionPlaysIncrement = 5;


const feed = (amt) => {
    amt = amt || actionFeedIncrement;
    const total = scoreHunger + amt;
    if (total >= scoreHungerMax) scoreHunger = scoreHungerMax;
    else if (total <= 0) scoreHunger = 0;
    else scoreHunger = total;
}

const playWith = (amt) => {
    amt = amt || actionPlaysIncrement;
    const total = scorePlay + amt;
    if (total >= scorePlayMax) scorePlay = scorePlayMax;
    else if (total <= 0) scorePlay = 0;
    else scorePlay = total;
}

const hungerLoop = setInterval(makeHungry, decayRateHunger)
function makeHungry() {
    if (scoreHunger)
        scoreHunger -= 1;
}

const boredomLoop = setInterval(makeBored, decayRatePlay)
function makeBored() {
    if (scorePlay)
        scorePlay -= 1;
}

const loop = setInterval(render, renderSpeed);



const isHover = e => e.parentElement.querySelector(':hover') === e;

const myDiv = document.querySelector('.btn-feed');
document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(myDiv);
    if (hovered !== checkHover.hovered) {
        checkHover.hovered = hovered;
    }
});


const isHover2 = e => e.parentElement.querySelector(':hover') === e;

const myDiv2 = document.querySelector('.btn-play');
document.addEventListener('mousemove', function checkHover2() {
    const hovered = isHover2(myDiv2);
    if (hovered !== checkHover2.hovered) {
        checkHover2.hovered = hovered;
    }
});



function render() {

    creatureOutput.innerHTML = expressions[0];

    const currentHappiness = (scoreHunger + scorePlay) / 2;


    if (currentHappiness >= 75 && currentHappiness <= 100 && !isHover(myDiv) && !isHover2(myDiv2)) {
        creatureOutput.innerHTML = expressions[0];
    } else if (currentHappiness >= 50 && currentHappiness < 75 && !isHover(myDiv) && !isHover2(myDiv2)) {
        creatureOutput.innerHTML = expressions[1];
    } else if (currentHappiness >= 25 && currentHappiness < 50 && !isHover(myDiv) && !isHover2(myDiv2)) {
        creatureOutput.innerHTML = expressions[2];
    } else if (currentHappiness >= 0 && currentHappiness < 25 && !isHover(myDiv) && !isHover2(myDiv2)) {
        creatureOutput.innerHTML = expressions[3];
    } else if (isHover(myDiv)) {
        creatureOutput.innerHTML = expressions[4];
    } else if (isHover2(myDiv2)) {
        creatureOutput.innerHTML = expressions[5];
    }



    hungerValueText.innerText = scoreHunger;
    hungerProgressBar.max = scoreHungerMax;
    hungerProgressBar.value = scoreHunger;

    playValueText.innerText = scorePlay;
    playProgressBar.max = scorePlayMax;
    playProgressBar.value = scorePlay;

    happinessValueText.innerText = currentHappiness;
    happinessProgressBar.value = currentHappiness;

}








