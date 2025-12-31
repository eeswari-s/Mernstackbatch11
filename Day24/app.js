let score1 = 0;
let score2 = 0;

/* Dice dot positions */
const map = {
  1:[4],
  2:[0,8],
  3:[0,4,8],
  4:[0,2,6,8],
  5:[0,2,4,6,8],
  6:[0,2,3,5,6,8]
};

const d1 = document.getElementById("dice1");
const d2 = document.getElementById("dice2");
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const result = document.getElementById("result");

/* 🔊 Dice roll sound (Web Audio API) */
function playDiceSound(){
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    90,
    audioCtx.currentTime + 0.15
  );

  gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.01,
    audioCtx.currentTime + 0.15
  );

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.15);
}

/* Create dice dots */
function createDots(dice){
  dice.innerHTML = "";
  for(let i=0;i<9;i++){
    const dot = document.createElement("div");
    dot.className = "dot";
    dice.appendChild(dot);
  }
}

createDots(d1);
createDots(d2);

/* Show dice number */
function show(dice, num){
  map[num].forEach(i=>{
    dice.children[i].style.visibility = "visible";
  });
}

function rollDice(){
  if(score1 >= 20 || score2 >= 20) return;

  playDiceSound(); // 🔊 sound

  d1.classList.add("roll");
  d2.classList.add("roll");

  setTimeout(()=>{
    d1.classList.remove("roll");
    d2.classList.remove("roll");

    createDots(d1);
    createDots(d2);

    const a = Math.floor(Math.random()*6) + 1;
    const b = Math.floor(Math.random()*6) + 1;

    show(d1, a);
    show(d2, b);

    score1 += a;
    score2 += b;

    score1El.textContent = score1;
    score2El.textContent = score2;

    if(score1 >= 20 && score2 >= 20)
      result.textContent = "🤝 Draw Match!";
    else if(score1 >= 20)
      result.textContent = "🏆 Dice 1 Wins!";
    else if(score2 >= 20)
      result.textContent = "🏆 Dice 2 Wins!";
  }, 550);
}