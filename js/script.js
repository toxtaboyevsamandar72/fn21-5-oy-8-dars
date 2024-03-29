const h3El = document.querySelector("h3");
let answerbtns = document.querySelectorAll(".btn");
let restartbtn = document.getElementById("restart");


function genertaeNumber(to) {
  return Math.ceil(Math.random() * to);
}

let isGameOver;

function startGame() {
  isGameOver = false;
  let num1 = genertaeNumber(100);
  let num2 = genertaeNumber(100);
  const result = num1 + num2;
  h3El.textContent = `${num1} + ${num2} = ?`;

  const answers = [result - 2, result + 2, result + 1];
  answers[genertaeNumber(3) - 1] = result;

  answerbtns.forEach((btn, index) => {
    btn.textContent = answers[index];
    btn.addEventListener("click", () => {
      if (!isGameOver) {
        if (+btn.textContent === result) {
          alert("to'g'ri");
          new Audio("./music/togri.mp3").play();
        } else {
          alert("noto'g'ri");
          new Audio("./music/notogri.mp3").play();
        }
        isGameOver = true;
      }
    });
  });
}

startGame();

restartbtn.addEventListener("click", startGame);

restartbtn.addEventListener("click", () => {
  new Audio("./music/restart.mp3").play();
});

answerbtns.addEventListener("click", () => {
  new Audio("./music/tap-notification-180637 (1).mp3").play();
});
