'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores,currentscore ,activePlayer ,playing

// reset  values
let init=function()
{
    scores=0
    currentscore=0
    activePlayer=0
    playing=true

    diceEl.style.display='none'
    score0El.textContent=0
    score1El.textContent=0
    current0El.textContent=0
    current1El.textContent=0

}

init()

//roll dice functinality
function switchPlayer()
{
    document.getElementById(`current--${activePlayer}`).textContent=0
    currentscore=0
    
}