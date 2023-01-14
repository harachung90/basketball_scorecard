let home_score = 0
let guest_score = 0

let home_EL = document.getElementById('home_score')
let guest_EL = document.getElementById('guest_score')

home_EL.textContent = home_score;
guest_EL.textContent = guest_score;

function addOneHome () {
    home_score += 1;
    home_EL.textContent = home_score;
    highlight();
}

function addTwoHome () {
    home_score += 2;
    home_EL.textContent = home_score;
    highlight();
}
function addThreeHome () {
    home_score += 3;
    home_EL.textContent = home_score;
    highlight();
}

function addOneGuest () {
    guest_score += 1;
    guest_EL.textContent = guest_score;
    highlight();
}

function addTwoGuest () {
    guest_score += 2;
    guest_EL.textContent = guest_score;
    highlight();
}

function addThreeGuest () {
    guest_score += 3;
    guest_EL.textContent = guest_score;
    highlight();
}

function newGameStart() {
    home_score = 0
    guest_score = 0
    home_EL.textContent = home_score;
    guest_EL.textContent = guest_score;
}

function highlight() {
    let winner = (home_score > guest_score) ? home_EL : guest_EL;
    let loser = (home_score > guest_score) ? guest_EL : home_EL;

    winner.style.color = "#10B981";
    loser.style.color = "#F94F6D";

    if (home_score === guest_score) {
        home_EL.style.color = "#FCD34D";
        guest_EL.style.color = "#FCD34D";
    }
}