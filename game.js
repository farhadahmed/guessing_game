$(document).ready(function() {
    //Interactive button
    $('button').mouseenter(function() {
        $('button').fadeTo('fast', 0.5);
    })
    $('button').mouseleave(function() {
        $('button').fadeTo('fast', 1);
    })
    $('.images').fadeTo('slow', 1);

    //button click to run script
    $('button').click(function() {
      game();
    });
})

//THIS IS THE SCRIPT FOR THE GAME
var game = function() {
  var team, guess, answer, message, heroes, counter;
  counter = 5;

  //Array of heroes.  These are the possible answers to the question.
  heroes = ['CAPTAINAMERICA', 'IRONMAN', 'THOR', 'HULK', 'HAWKEYE'];

  //Removes all spaces and dashes from user's guess
  var removeSpaceDash = function() {
    guess = guess.replace(/\s/, '');
    guess = guess.replace('-', '');
  }

  //Chooses a random number and then assigns that value in the array to var answer.
  answer = Math.floor(Math.random() * heroes.length) //0 to 4
  answer = heroes[answer];

  //Converts users guess to caps and removes all spaces/dashes
  guess = prompt('Which superhero am I thinking of?').toUpperCase();
  removeSpaceDash();

  if (guess == answer) {
    message = 'You win! The correct answer is ' + answer + '!';
  }
  else {
    //As long as counter > 0 and guess is incorrect, this code will run and subtract 1 from var counter.
    do {
      guess = prompt('Incorrect. You have ' + counter + ' tries left. \nWhich hero am I thinking of?').toUpperCase();
      removeSpaceDash();
      counter--;
    } while (guess !== answer && counter > 0);

    if (guess == answer) {
      message = 'You win! The correct answer is ' + answer + '!';
    }
    else {
      message = 'You are out of tries. The correct answer was ' + answer + '.';
    }
  }//end else

  alert(message);

}//end function