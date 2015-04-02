      (function () {
        //Constructor function
        var Game = function(guess, answer, randomArrayVal) {
          this.guess = guess;
          this.answer = answer;
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
        var message, heroes, counter;
        counter = 5;

        var Superhero = function(name, hint) {
          this.name = name;
          this.hint = hint;
        };

        var batman = new Superhero ('Batman', 'Genius intellect and a martial artist.');
        var thor = new Superhero('Thor', 'He wields a mighty hammer');
        var hulk = new Superhero('Hulk', 'His fists smash.');


        //Array of DC heroes - these are possible answers.
        heroes = [batman, thor, hulk];

        //Chooses a random number and then assigns that value in the array to var answer.
        game1.randomArrayVal = Math.floor(Math.random() * heroes.length); // 0 to 2
        game1.answer = heroes[game1.randomArrayVal].name;
        game1.answerCAPS = game1.answer.toUpperCase();
        game1.ansSpaceDash();


        game1.guess = prompt('Which superhero am I thinking of?').toUpperCase();
        game1.removeSpaceDash();

        if (game1.guess === game1.answerCAPS) {
          message = 'You win! The correct answer is ' + game1.answer + '!';
        }
        else {
          //As long as counter > 0 and Game.guess is incorrect, this code will run and subtract 1 from var counter.
          do {
            game1.guess = prompt('Incorrect. You have ' + counter + ' tries left. \nHere\'s a hint: ' + heroes[game1.randomArrayVal].hint).toUpperCase();
            game1.removeSpaceDash();
            counter--;
          } while (game1.guess !== game1.answerCAPS && counter > 0);
          if (game1.guess == game1.answerCAPS) {
            message = 'You win! The correct answer is ' + game1.answer + '!';
          }
          else {
            message = 'You are out of tries. The correct answer was ' + game1.answer + '.';
          }
        }//end else
        alert(message);
      })();
