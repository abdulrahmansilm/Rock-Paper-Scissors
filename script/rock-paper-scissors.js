let score = JSON.parse(localStorage.getItem("score")); // string -> objekt (lesen)

if (!score) {
  score = {
    Win: 0,
    Lose: 0,
    Tie: 0,
  };
}

const options = ["Rock", "Paper", "Scissors"];
let choose = "";

function pickComputerMove() {
  choose = options[Math.floor(Math.random() * options.length)];

  return choose;
}

let result = "";
let playerChoose = "";
function playGame(myChoose) {
  pickComputerMove();
  playerChoose = myChoose;
  if (myChoose === "Scissors") {
    if (choose === "Rock") {
      result = "Lose";
    } else if (choose === "Paper") {
      result = "Win";
    } else if (choose === "Scissors") {
      result = "Tie";
    }
  } else if (myChoose === "Rock") {
    if (choose === "Rock") {
      result = "Tie";
    } else if (choose === "Paper") {
      result = "Lose";
    } else if (choose === "Scissors") {
      result = "Win";
    }
  } else if (myChoose === "Paper") {
    if (choose === "Rock") {
      result = "Win";
    } else if (choose === "Paper") {
      result = "Tie";
    } else if (choose === "Scissors") {
      result = "Lose";
    }
  }

  if (result === "Win") {
    score.Win++;
  } else if (result === "Lose") {
    score.Lose++;
  } else {
    score.Tie++;
  }

  localStorage.setItem("score", JSON.stringify(score)); // objekt -> string (speichern)

  outputResult();
  outputChoose();
  outputScore();
}

function outputResult() {
  document.querySelector(".outputResult").innerHTML = `
         ${result}.`;
}

function outputChoose() {
  document.querySelector(".outputChoose").innerHTML = `
        You
        <img src="assets/${playerChoose}-emoji.png" class="move-icon">
        <img src="assets/${choose}-emoji.png" class="move-icon"> 
        Computer `;
}

function outputScore() {
  document.querySelector(".outputScore").innerHTML = `
          Wins: ${score.Win}, Losses: ${score.Lose}, Tie: ${score.Tie}`;
}
outputScore();