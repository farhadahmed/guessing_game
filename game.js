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

//Class of superhero
function Superhero(name, power) {
    this.name = name;
    this.power = power;
}

//Superhero objects
var captainAmerica = new Superhero("Captain America", "When he wields his shield, all who oppose his shield must yield!");
var ironMan = new Superhero("Iron-Man", "A suit of armor");
var thor = new Superhero("Thor", "A mighty hammer");
var hulk = new Superhero("Hulk", "His fists smash.");
var hawkeye = new Superhero("Hawkeye", "A bow and arrow");

//Array of heroes.  Their names are the possible answers to the question.
var heroObjects = [captainAmerica, ironMan, thor, hulk, hawkeye];

//THIS IS THE SCRIPT FOR THE GAME
var game = function() {
  var team, guess, answer, message, heroes, counter, answerCAPS;
  counter = 5;

  //Removes all spaces and dashes from user's guess or the answer
  var removeSpaceDash = function(name) {
    name = name.replace(/\s/, '');
    name = name.replace('-', '');
  }

  //Chooses a random number and then assigns that value in the array to var answer.
  answer = Math.floor(Math.random() * heroObjects.length); //0 to 4
  answer = heroObjects[answer].name;
  answerCAPS = answer.toUpperCase();
  removeSpaceDash(answerCAPS);

  //Converts users guess to caps and removes all spaces/dashes
  guess = prompt('Which superhero am I thinking of?').toUpperCase();
  removeSpaceDash(guess);

  if (guess === answerCAPS) {
    message = 'You win! The correct answer is ' + answer + '!';
  }
  else {
    //As long as counter > 0 and guess is incorrect, this code will run and subtract 1 from var counter.
    do {
      guess = prompt('Incorrect. You have ' + counter + ' tries left. \nWhich hero am I thinking of?').toUpperCase();
      removeSpaceDash(guess);
      counter--;
    } while (guess !== answerCAPS && counter > 0);

    if (guess == answerCAPS) {
      message = 'You win! The correct answer is ' + answer + '!';
    }
    else {
      message = 'You are out of tries. The correct answer was ' + answer + '.';
    }
  }//end else

  alert(message);

}//end function
