let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score'); // show it to the page
const computerScore_span = document.getElementById('computer-score'); // show it to the page // underscore --> DOM variables: variables that store DOM elements. The word span is to tell it's in a a span tag. -->  --> both style of YT-tutor.
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3); // pick random item from an array
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub(); // sup = superscript. sub = subscript.
  const smallCompWord = "comp".fontsize(3).sub(); // sup = superscript. sub = subscript.
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  //console.log("WIN");
  //console.log(userScore);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥 `; // ES6 --> backticks
  // console.log(user);
  // console.log(computer);
  userChoice_div.classList.add('green-glow');
  // setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300); ES5
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300); //ES6
}

//setTimeout(function() {console.log("hello, this is the output of function setTimeout")}, 1000);

function lose(userChoice, computerChoice) {
  //console.log("LOST");
  const smallUserWord = "user".fontsize(3).sub(); // sup = superscript. sub = subscript.
  const smallCompWord = "comp".fontsize(3).sub(); // sup = superscript. sub = subscript.
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost.... 💩`; // ES6 --> backticks
  userChoice_div.classList.add('red-glow');
  // setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 300); ES5
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300); //ES6
}

function draw(userChoice, computerChoice) {
  //console.log("DRAW");
  const smallUserWord = "user".fontsize(3).sub(); // sup = superscript. sub = subscript.
  const smallCompWord = "comp".fontsize(3).sub(); // sup = superscript. sub = subscript.
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw. 🐪`; // ES6 --> backticks
  userChoice_div.classList.add('gray-glow');
  // setTimeout(function() { userChoice_div.classList.remove('gray-glow') }, 300); ES5
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300); //ES6
}

function game(userChoice) {
  //console.log("bladiebla " + userChoice);
  const computerChoice = getComputerChoice();
  //console.log("user choice: " + userChoice);
  //console.log("computer choice: " + computerChoice);
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      //console.log("USER WINS.");
      console.log("user choice: " + userChoice);
      console.log("computer choice: " + computerChoice);
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      //console.log("USER LOSES.");
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      // console.log("Its a draw.");
      draw(userChoice, computerChoice);
      break;
  }
}

//game();

// ES5
// function main() {
//   rock_div.addEventListener("click", function() { // The document.addEventListener() method attaches an event handler to the document.
//     //console.log("Hey you clicked on rock");
//     game("r");
//   });
//
//   paper_div.addEventListener("click", function() {
//     //console.log("Hey you clicked on paper");
//     game("p");
//   });
//
//   scissors_div.addEventListener("click", function() {
//     //console.log("Hey you clicked on scissors");
//     game("s");
//   });
// }


//ES6

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
