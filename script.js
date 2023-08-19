const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
//Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing

const init = function(){
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
init();

// diceEl.classList.add("hidden");
const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("active--player");
}

btnRoll.addEventListener("click", function () {
  if(playing){
    //1. დამიგენერირე რენდომ კამათლის გაგორება
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. ეკრანზე გამომიტანე კამათელი;
    diceEl.classList.remove("hidden");
    console.log(diceEl);
    diceEl.src = `dice-${dice}.png`;
    // 3. შეამოწმოს 1 გაგორდა თუ არა, თუ გაგორდა თამაში გადავიდეს მეორეზე
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer()
    }
  }
});

btnHold.addEventListener("click", function () {
  if(playing){
      scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add("player-winner");
      document.querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    }
    switchPlayer()
  }
});

btnNew.addEventListener("click", init)