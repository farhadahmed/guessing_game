
function startGame() {
  //Constructor function
  var Game = function(guess, answer, randomArrayVal, wrong) {
    this.guess = guess;
    this.answer = answer;
    this.wrong = wrong;
    this.randomArrayVal = randomArrayVal;
    //This method removes all spaces and dashes from user's guess
    this.removeSpaceDash = function() {
      this.guess = this.guess.replace(/\s/, '');
      this.guess = this.guess.replace('-', '');
    };
    this.ansSpaceDash = function() {
      this.answerCAPS = this.answerCAPS.replace(/\s/, '');
      this.answerCAPS = this.answerCAPS.replace('-', '');
    };
  };

  var game1 = new Game();
  var message, heroes, output;
  output = document.getElementById('output');

  var Superhero = function(name) {
    this.name = name;
  };

  var batman = new Superhero ('Batman');
  var thor = new Superhero('Thor');
  var ironMan = new Superhero('Iron-Man')


  //Array of DC heroes - these are possible answers.
  heroes = [batman, thor, ironMan];

  //Chooses a random number and then assigns that value in the array to var answer.
  game1.randomArrayVal = Math.floor(Math.random() * heroes.length); // 0 to 2
  game1.answer = heroes[game1.randomArrayVal].name;
  game1.answerCAPS = game1.answer.toUpperCase();
  game1.ansSpaceDash();

  //Grabbing the value of the input textbox
  game1.guess = document.getElementById('guess').value.toUpperCase();
  game1.removeSpaceDash();

  if (game1.guess === game1.answerCAPS) {
    message = 'You win! The correct answer is ' + game1.answer + '!';
  }
  else {
    message = 'Incorrect. The correct answer was ' + game1.answer + '.';
  }//end else
  //alert(message);
  output.appendChild(document.createTextNode(message));
};
