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
function Superhero(name, hint) {
    this.name = name;
    this.hint = hint;
}

//Superhero objects
var captainAmerica = new Superhero('Captain America', 'When he wields his shield, all who oppose his shield must yield!');
var ironMan = new Superhero('Iron-Man', 'He wears a suit of armor.');
var thor = new Superhero('Thor', 'A wields a mighty hammer');
var hulk = new Superhero('Hulk', 'His fists smash.');
var hawkeye = new Superhero('Hawkeye', 'He fights with a bow and arrow.');
var batman = new Superhero ('Batman', 'Genius intellect and a martial artist.');
var spiderMan = new Superhero ('Spider-Man', 'Spinning a web of any size, he catches thieves just like flies.');
var flash = new Superhero('Flash', 'He goes by in a _____.');
var greenLantern = new Superhero ('Green Lantern', '"In brightest day, in blackest night, no evil shall escape my sight."');

//Array of heroes.  Their names are the possible answers to the question.
var heroObjects = [captainAmerica, ironMan, thor, hulk, hawkeye, batman, spiderMan, flash, greenLantern];

//THIS IS THE SCRIPT FOR THE GAME
var game = function() {
  var team, guess, answer, message, heroes, counter, answerCAPS;
  counter = 5;

  //Removes all spaces and dashes from user's guess or the answer
  var removeSpaceDash = function(name) {
    name = name.replace(/\s/, '');
    name = name.replace('-', '');
    return name;
  }

  //Chooses a random number and then assigns that value in the array to var answer.
  var randomArrayVal = Math.floor(Math.random() * heroObjects.length); //0 to 4
  answer = heroObjects[randomArrayVal].name;
  answerCAPS = answer.toUpperCase();
  answerCAPS = removeSpaceDash(answerCAPS);

  //Converts users guess to caps and removes all spaces/dashes
  guess = prompt('Which superhero am I thinking of?').toUpperCase();
  guess = removeSpaceDash(guess);

  if (guess === answerCAPS) {
    message = 'You win! The correct answer is ' + answer + '!';
  }
  else {
    //As long as counter > 0 and guess is incorrect, this code will run and subtract 1 from var counter.
    do {
      guess = prompt('Incorrect. You have ' + counter + ' tries left.' +
        '\nHere\'s a hint: ' + heroObjects[randomArrayVal].hint).toUpperCase();
      guess = removeSpaceDash(guess);
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
