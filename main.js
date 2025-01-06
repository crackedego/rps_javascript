//create user choice function
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("What?");
  };
};

// generate computer selection. generate random number and assign value.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
  };
};

//create function to destermine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb')
  {
    return 'You have selected bomb and have become death. Welcome to the abyss!'
  }

  if (userChoice === computerChoice) {
    return 'This games is a tie!';
  };

  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer went with paper! You lose!!';
    } else {
      return 'Computer laid down scissors! You win!!';
    }
  };

  if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer went with scissors! You lose!!';
    } else {
      return 'Computer laid down rock! You win!!';
    }
  };

  if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer went with rock! You lose!!';
    } else {
      return 'Computer laid down paper! You win!!';
    }
  };

};

// create playGame function
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log(`You selected ${userChoice}.`);
  console.log(`The computer selected ${computerChoice}.`);
    
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();




