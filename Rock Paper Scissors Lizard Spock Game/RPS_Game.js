var result = document.getElementById('result-message');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

function resultMessage(gameResult){
  let message;
  switch (gameResult) {
    case "sp":
    case "ps":
      message = "Scissors cuts paper. ";
      break;
    case "pr":
    case "rp":
      message = "Paper covers rock. ";
      break;
    case "rl":
    case "lr":
      message = "Rock crushes lizard. ";
      break;
    case "lk":
    case "kl":
      message = "Lizard poisons Spock. ";
      break;
    case "ks":
    case "sk":
      message = "Spock smashes scissors. ";
      break;
    case "sl":
    case "ls":
      message = "Scissors decapitates lizard. ";
      break;
    case "lp":
    case "pl":
      message = "Lizard eats paper. ";
      break;
    case "pk":
    case "kp":
      message = "Paper disproves Spock. ";
      break;
    case "kr":
    case "rk":
      message = "Spock vaporizes rock. ";
      break;
    default:
      message = "Rock crushes scissors. ";
      break;
    }
    
    return message;
}

function game(user) {
  let cChoice = computerChoice();
  let gameResult = user + cChoice;
  console.log(gameResult);
  switch(gameResult){
    case "sp":
    case "pr":
    case "rl":
    case "lk":
    case "ks":
    case "sl":
    case "lp":
    case "pk":
    case "kr":
    case "rs":
      result.innerHTML = resultMessage(gameResult) + "You Win!";
      break;
    case "rr":
    case "pp":
    case "ll":
    case "kk":
    case "ss":
      result.innerHTML = "It's a tie.";
      break;
    default:
      result.innerHTML = resultMessage(gameResult) + "You lose...";
  }
}

function computerChoice(){
  let choices = ["r","p","s","l","k"]; //k is for 'spock'
  let compChoice = choices[Math.floor(Math.random()*5)];
  return compChoice;
}



function main() {
  rock.addEventListener("click",function() {
    game("r");
  });
  paper.addEventListener("click",function() {
    game("p");
  });
  scissors.addEventListener("click",function() {
    game("s");
  });
  lizard.addEventListener("click",function() {
    game("l");
  });
  spock.addEventListener("click",function() {
    game("k");
  });
}

main ();
