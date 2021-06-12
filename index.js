// Storing all the quiz questions, options, anwers, and extra info
const levelWiseQuiz = [
  {
    level: "beginner",
    noOfQues: 5,
    pointsPerQues: 1,
    quizQues: [
      {
        quesNo: 1,
        quesText: "Which among the above given options is the most famous Pokémon",
        options: ['Rhydon', 'Charizad', 'Squirtle', 'Pikachu'],
        answer: 'Pikachu',
        metaInfo: 'Pikachu is the face of the franchise, mostly due to its large role in the anime series. As the protagonist\'s primary Pokémon, Pikachu became the most recognizable Pokémon as the mascot.'

      }, 
      {
        quesNo: 2,
        quesText: "Which among the above given options is not one of the original 150(Gen 1) Pokémons",
        options: ['Axew', 'Ivysaur', 'Squirtle', 'Pidgeot'],
        answer: 'Axew',
        metaInfo: 'Axew is a Dragon-type Pokémon introduced in Generation 5.'
      }, 
      {
        quesNo: 3,
        quesText: "Which among the above given Gen 1 Pokémons doesn't have a middle stage evolution",
        options: ['Eevee', 'Charmander', 'Squirtle', 'Bulbasaur'],
        answer: 'Eevee',
        metaInfo: 'Eevee can evolve into 8 different types of elemental variants. However, all those evolutions(or, as one might call them Eeveelutions) are just the final stage. Hence, it does not have an intermediate evolution stage/s.'

      }, 
      {
        quesNo: 4,
        quesText: "Which among the above given options is a stage II evolution of one of the original 150(Gen 1) starter Pokémons",
        options: ['Mewtwo', 'Ivysaur', 'Miltank', 'Raichu'],
        answer: 'Ivysaur',
        metaInfo: 'Ivysaur is a Grass/Poison Pokémon introduced in Generation I. It evolves from Bulbasaur starting at level 16, and evolves into Venusaur starting at level 32.'
      }, 
      {
        quesNo: 5,
        quesText: "Which among the above given options is a man-made Pokémon",
        options: ['Mew', 'Arceus', 'Mewtwo', 'Blastoise'],
        answer: 'Mewtwo',
        metaInfo: 'According to the scientific logs found in the Pokémon Mansion of Cinnabar Island, Mewtwo was born from a pregnant Mew, found deep in the jungles of Guyana, whose embryo had been tampered with to alter its DNA. It was held and studied in the mansion where a scientist performed horrific gene-splicing experiments that made it vicious and extremely powerful.'
      }
    ]
  },
  {
    level: "intermediate",
    noOfQues: 5,
    pointsPerQues: 2,
    quizQues: [
      {
        quesNo: 1,
        quesText: "Which among the above given options is the fastest Pokémon",
        options: ['Ash-Greninja', 'Barraskewda', 'Mega Mewtwo Y', 'Ninjask'],
        answer: 'Ninjask',
        metaInfo: 'Ninjask\'s speed stat is an amazing 148, and can reach up to 460 at level 100. This means it outpaces Legendaries, Ultra Beasts, Mega Evolutions, and basically everything else, despite being a regular Pokémon that can be obtained very early in most games where it makes an appearance.'

      }, 
      {
        quesNo: 2,
        quesText: "Which among the above given options is the bulkiest(or, most defensive) Pokémon",
        options: ['Onix', 'Regirock', 'Steelix', 'Shuckle'],
        answer: 'Shuckle',
        metaInfo: 'While eating berries, Shuckle is chilling, because thanks to its hard shell it gets a Defense stat of 230. It has not only the highest Defense but Special Defense too of all the Pokémon currently obtainable.'

      }, 
      {
        quesNo: 3,
        quesText: "Which among the above given options is the most offensive(only, Physical Attack wise) Pokémon",
        options: ['Deoxys-A', 'Rayquaza', 'Kyurem-B', 'Zekrom'],
        answer: 'Deoxys-A',
        metaInfo: 'Deoxys-A or \'Deoxys Attack Forme\', predictably, is the strongest of all Deoxys forms. Deoxys in this form has 180 Attack, which can rise to 504 Attack once it reaches level 100.'
      }, 
      {
        quesNo: 4,
        quesText: "Which among the above given options is the most offensive(only, Special Attack wise) Pokémon",
        options: ['Porygon-Z', 'Kyogre', 'Darkrai', 'Deoxys-A'],
        answer: 'Deoxys-A',
        metaInfo: ' Attack Forme Deoxys has a nice 180 in special attack, meaning it\'s going to pulverize those pesky Fighting-types in its way.'
      }, 
      {
        quesNo: 5,
        quesText: "EVs or Effort Values of a Pokémon can be increased via which of the above given tactics",
        options: ['battle a lot of Pokémons', 'battling specific sets of Pokémon', 'using Vitamins', 'doing both 2 and 3'],
        answer: 'doing both 2 and 3',
        metaInfo: 'Vitamins, which are purchaseable from the big department store in each game (Veilstone/Lilycove/Golenrod/Celadon), give your Pokémon 10 EVs in the corresponding stat.\n\n\t Also, if you battle a Geodude your Pokémon will get one EV in the Defense stat, whereas fighting a Gengar, will get you three Special Attack EVs, and so on.'
      }
    ]
  },
  {
    level: "advanced",
    noOfQues: 5,
    pointsPerQues: 5,
    quizQues: [
      {
        quesNo: 1,
        quesText: "What is the supposed range for IVs or Individual Values of a Pokémon",
        options: ['0-10', '0-15', '0-31', '0-20'],
        answer: '0-31', 
        metaInfo: 'IVs consist of six numbers corresponding to HP, Attack, Defense, Special Attack, Special Defense and Speed. Each range from 0-31 and the higher the number, the better your Pokémon\'s stat will be.'
      }, 
      {
        quesNo: 2,
        quesText: "Which among the above given options is not a Pokémon nature",
        options: ['Adamant', 'Hasty', 'Happy', 'Lax'],
        answer: 'Happy',
        metaInfo : 'There is no such nature as \'Happy\'. The correct name for the nature that signifies happiness would be \'Jolly\''

      }, 
      {
        quesNo: 3,
        quesText: "Which among the above given Pokémons, does not have an alternate form",
        options: ['Deoxys', 'Greninja', 'Genesect', 'Ditto'],
        answer: 'Ditto',
        metaInfo: 'Ditto has no alternate forms, although it can transform into any animated/inanimated object in existence. Also many Pokémons, reproduce their alternate forms by breeding with Ditto.'
      }, 
      {
        quesNo: 4,
        quesText: "How many alternate forms in total does Unown have",
        options: ['20', '30', '36', '28'],
        answer: '28',
        metaInfo: 'Unown has many forms, each of them corresponding to a typographical character. It was the first Pokémon to have multiple forms in the games. From its debut in Generation II, there are 26 forms of Unown, each corresponding to each of the 26 letters of the Latin alphabet. Starting in the Generation III games, Unown has two additional forms, corresponding to the question mark and exclamation mark. These forms are not interchangeable.'
      }, 
      {
        quesNo: 5,
        quesText: "Which of the following legendaries can breed",
        options: ['Ho-Oh', 'Mewtwo', 'Manaphy', 'none of the above'],
        answer: 'Manaphy',
        metaInfo: 'Manaphy is a water-type Mythical Pokémon, which qualifies as a legendary, since it can\'t evolve, & on top of that, it can not breed exactly to reproduce; since it breeds to produce Phione which isn\'t able to evolve into Manaphy itself.'
      }
    ]
  }
  ];

// npm packages
const readLine = require('readline-sync');
const chalk = require('chalk');
const fontColorGradient = require('gradient-string');
const cFonts = require('cfonts');
const progressBar = require('cli-progress');

// font styles
const pokeYellow = chalk.hex('ffcb05');
const pokeBlue = chalk.hex('3c5aa6');
const pokeRed = chalk.hex('cc0000');
const pokeYellowAndBlue = chalk.bgHex('ffcb05').hex('3c5aa6').bold;
// specifies pokeBlue as font color and pokeYellow as background color
const pokeYellowAndRed = chalk.bgHex('ffcb05').hex('cc0000').bold;
// specifies pokeRed as font color and pokeYellow as background color

// Stores the top scorers' name and score in JS objects
const topScorers = [{
  userName: 'Demo',
  score: '11'
}];

// Displaying the pixelated heading that says Pokemon Quiz
cFonts.say("Pokemon|Quiz", {
  font: 'block',
  align: 'center',
  gradient: '#3c5aa6,#ffcb05'
}) ;

// Accepting player's name.
let userName;
acceptName();
// Setting default level for new player.
let currLevel = 1;
// Setting default score for new player.
let score = 0;
// Setting initial maxScore for the quiz.
let maxScore = 0;
// By default, no player having 0 as total score, can be a top scorer.
let hasScoredHigh = false;

function acceptName() {
  userName = readLine.question(pokeYellow.bold("Please enter your name: "));
  /* By pressing any key except 'y', or 'Shift+y', the player can re-enter his/her name;
  whereas pressing either of them will allow the player to confirm his/her name and to continue further.*/
  if(!readLine.keyInYN(pokeBlue.bold("Are you sure you want to go with "+ pokeYellowAndBlue.bold(userName)+" as your name ?"))) {
    acceptName();
  }
}

// Utility function made to add an empty line while displaying the output.
function addNewLine() {
  console.log();
}

loadAnimation();

// Used to show the loading animation.
function loadAnimation() {
  // Creating the progress bar which loads for exactly 5 seconds, before displaying further content.
  let loadingAnimation = new progressBar.SingleBar({
      format: pokeBlue.bold("Loading") +" |"+ pokeBlue('{bar}') +'| '+ pokeYellow.bold('{percentage}%'),
      // Progress bar gets printed according to this format, wherein {percentage} would calculate and display percentage of progress done via the {bar} each iteration.
      barIncompleteChar: '\u2591',
      // \u2591 represents the unicode character of Light Shade i.e. ░, which displays the unprogressed section of the bar.
      barCompleteChar: '\u2588',
      // \u2588 represents the unicode character Full Block i.e. █, which displays the progressed section of the bar.
      hideCursor: true,
      // When running this animation, the cursor on shell prompt would be hidden.
    });
  
  // We start the loading animation as soon as 'y' or 'Shift + y' key/s is/are pressed by the player.
  const animStart = setImmediate(()=>{
    loadingAnimation.start(100, 0);
    // The maximum progress of the bar is set to 100 units, and the current progress is set as 0 units.
  });

  // Updates the current progress with 1/5th of the maximum progress after each second
  const unitProgress = 20;
  let currentProgress = 0;
  const animInterval = setInterval(()=> {
    currentProgress+=unitProgress;
    loadingAnimation.update(currentProgress);
  }, 1000);

  // Stopping the animation after approx. 5 seconds after it's start
   const animStop = setTimeout(()=>{
    loadingAnimation.stop();
    clearImmediate(animStart);
    clearInterval(animInterval);
    // After stopping the animation and clearing the timeouts and intervals to improve performance, we welcome the player.
    welcomeUser(animStop);
  }, 5250);
}

function welcomeUser(animStop) {
  // Clearing the last residual timeout.
  clearTimeout(animStop);
  let welcomeGreeting = pokeBlue("Welcome, "+pokeYellow.italic(userName)+" !");
  console.log(welcomeGreeting);
  // After welcoming the user, the current level is started.
  startLevel(currLevel, score);
}

function startLevel(currLevel, score) {
  // High scores are displayed at the beginning of each round
  displayHighScores();

  // Displaying level info
  
  console.log(pokeBlue.bold.underline("LEVEL " + currLevel));
  addNewLine();

  console.log(pokeBlue.italic("* This level consists a total of "+levelWiseQuiz[currLevel-1].noOfQues+" questions"));
  
  console.log(pokeBlue.italic("* Each question is of "+levelWiseQuiz[currLevel-1].pointsPerQues+" point/s"));

  // Iterating through each quiz level
  while(currLevel <= levelWiseQuiz.length) {
    let currentQuiz = levelWiseQuiz[currLevel-1];
  
    // Calculating maximum score a player can get in the current quiz level
    maxScore = 0;
    for(let quiz = 1; quiz <= currLevel; quiz++)
      maxScore+= levelWiseQuiz[quiz-1].noOfQues*levelWiseQuiz[quiz-1].pointsPerQues; 
  
    /* Asking questions from the current quiz level to the player.
     Thereafter, updating and displaying the score side by side after each question is asked.
    */
    for(let qNo = 0; qNo < currentQuiz.quizQues.length; qNo++) {
      let currentQues = currentQuiz.quizQues[qNo];
      score += askQuestion(currentQues.quesNo, currentQues.quesText, currentQues.options, currentQues.answer, currentQuiz.pointsPerQues, currentQues.metaInfo, currLevel, score);
      showScore(score);
    }

    // If player answered all the questions correctly in the current quiz level, and hasn't completed all the levels, then he is given a choice to move to the next level or end the quiz.
    if(score === maxScore && currLevel < levelWiseQuiz.length) {
      let userOptions = ['Go to next level', 'Quit'];
      let userChoice = readLine.keyInSelect(userOptions, pokeYellow("Congratulations "+pokeYellowAndBlue(userName)+"! You have completed this level of the quiz. Would like to move on to the next level ?"));
      addNewLine();
      // If player chooses to quit
      if(userChoice === 1)
        endQuiz(false, currLevel, score);
      // If player chooses to move to the next level
      else {
        currLevel = currLevel + 1;
        startLevel(currLevel, score);
      }
    }
    // If player has completed the last level of the quiz, he is congratulated and the quiz ends
    else if (score === maxScore && currLevel === levelWiseQuiz.length) {
      console.log(pokeYellow("Congratulations "+pokeYellowAndBlue(userName)+"! You have completed all the levels of the Pokémon quiz. What an exemplary performance !"));
      endQuiz(true, currLevel, score);
    }
    // Otherwise, if he hasn't answered all the questions in the current quiz level correctly, the quiz ends with giving him the option to Quit or Retry as well.
    else endQuiz(false, currLevel, score);
  }
}
// Used to ask each quiz question
function askQuestion(qNo, quesText, options, answer, pointsAwarded, metaInfo, currLevel, score) {
  // Asking the question to player, along with giving him/her four appropriate options, as well as recording the player's answer
  let ans = readLine.keyInSelect(options, pokeYellow("Q"+qNo+". "+quesText+" ?"));
  addNewLine();
  
  // Checking if selected answer is the correct one or not 
  if(options[ans] === answer) {
    console.log(pokeBlue(pokeYellowAndBlue("Gotcha!"), "That's correct !"));
    addNewLine();
    console.log(pokeYellow.bold.italic(metaInfo));
    // If player's answer is correct, he gets full points that are specified for that question 
    return pointsAwarded;
  }
  // If player's selected options is not the correct answer
  else {
    // If player selected '0' in order to cancel, his quiz is aborted at the same time
    if(ans === -1) {
      endQuizInMid(currLevel, score);
    }
    // Otherwise he just chose an incorrect option
    console.log(pokeRed(pokeYellowAndRed("Oops!") ,"That doesn't sound right."));
    // If player fails to answer the question correctly, he gets 1/4 th of the points specified for that question, deducted from his total score.
    return -(pointsAwarded / 4);
  }
}

// Executes if player quits in the beginning of the quiz, without even answering a single question
function endQuizInBeginning() {
  addNewLine();
  console.log(pokeBlue("Guess we'll see you around "+userName+"!"));
  addNewLine();
  process.exit();
}

// Executes if player quits in the middle of a quiz level
function endQuizInMid(currLevel, score) {
  console.log(pokeBlue("Ending the challenge, so soon :("));
  showGameOver(score);
  console.log(pokeBlue("Guess we'll see you around "+userName+"!"));
  // Player is given the option to quit the quiz or retry the current level.
  acceptUserChoice('Quit', 'Retry', currLevel);
}
// Executes after each level completion, when player denies to move to the next level(if given the choice to, in case if there is a next level)
function endQuiz(isCompleted, currLevel, score) {
  showGameOver(score); 
  // Checking if the player has completed all the levels of quiz or not
  if(!isCompleted) {
    // If he has not completed all the levels, he is given a chance to quit the quiz or retry that level
    acceptUserChoice('Quit', 'Retry', currLevel);
  }
  // If he has completed all the levels, he is automatically exited from the quiz
  else process.exit();
}

// Accepts player's choice for quitting or retrying
function acceptUserChoice(quitChoice, retryChoice, currLevel) {
  // Giving the appropriate choices to the player, as well as recording the player's choice
  let userChoice = readLine.keyInSelect([quitChoice, retryChoice], pokeYellow('What do you want to do ?'));
  // If player has chosen to retry, and the level completed immediately is not the last one, he can retry the current level.
  if(userChoice === 1 && currLevel !== levelWiseQuiz.length) {
    // Restarting current level
    let score = 0;
    for(let level = 1; level < currLevel; level++)
      score+=levelWiseQuiz[level-1].noOfQues*levelWiseQuiz[level-1].pointsPerQues;

    startLevel(currLevel, score);
  }
  // Otherwise if player has chosen to retry, and the level completed by him is indeed the last one, he can retry the whole quiz starting from level 1
  else if(userChoice === 1 && currLevel === levelWiseQuiz.length) {
    // Restarting whole quiz
    startLevel(1, 0);
  }
  // Or, if he has chosen to quit, then the quiz ends.
  else process.exit();
}

// Used to display the score to the player, after each question
function showScore(points) {
  addNewLine();
  console.log(pokeYellowAndBlue("Score ==> " + points));
  // Everytime player's score is to be displayed, we check if he has made a record score.
  checkHighScore(points);
  addNewLine();
}

// Used to check if a player had made record-breaking score
function checkHighScore(score) {
  // It is checked if the player has made a record score by either matching scores with that of the top scorer's or even surpassing him/her.
  if(score >= topScorers[0].score) {
    // show high score
    hasScoredHigh = true;
    // gradient-string package is used here to create the special rainbow-gradient colored font to display if the player has made a high score
    let highScoreText = fontColorGradient.rainbow('**HIGH SCORE**');
    addNewLine();
    console.log(highScoreText);
  }
  // Eventually if player's score decreases and sinks down the current High Score, his cumulative score will not be considered as a high score.
  else hasScoredHigh = false;
}

// Used to display the top scorers
function displayHighScores() {
  addNewLine();
  console.log(pokeYellowAndBlue.underline.bold("HIGH SCORES"));
  // Iterating through each top scorer's entry in the topScorers array, and displaying his/her name alongside the score he/she scored.
  for(let player = 0; player < topScorers.length; player++) {
    console.log(pokeBlue((player+1)+'.) '+pokeYellow.italic(topScorers[player].userName)+"\t------->\t")+pokeYellow.italic(topScorers[player].score));
  }
  addNewLine();
}

// Executes when the quiz is over, i.e. either the player chooses to quit the quiz or a level gets completed with player answering atleast one question wrong
function showGameOver(points) {
  console.log(pokeYellowAndBlue.bold.underline("Game Over !"));
  addNewLine();
  console.log(pokeBlue("Thank You, "+pokeYellowAndBlue(userName) +" for attending this quiz"));
  addNewLine();
  console.log(pokeBlue("We owe you, your time"));
  addNewLine();
  // If the player has made a record score, he/she is congratulated as well as given an opportunity to get his/her name and score to shine in the top scorers list.
  if(hasScoredHigh) {
    console.log(pokeBlue('Congratulations '+pokeYellowAndBlue(userName)+", you have scored "+ pokeYellow(points+" points")+", which is a new HighScore."));
    addNewLine();
    console.log(pokeBlue("You can now become a top scorer."));
    addNewLine();
    console.log(pokeBlue("All you need to do is just take screenshot of this console message, and mail me at -"));
    addNewLine();
    // Providing my email to the player in order to contact me in case he/she wanted his/her name in topScorers list
    console.log(pokeYellowAndBlue.bold.underline("shivam_tewari@hotmail.com"));
    addNewLine();
    console.log(pokeBlue.italic("And I shall update your name in top scorers list, in a few days."));
   }
  //  If player is not a top scorer, then just his/her latest score is shown.
  else console.log(pokeBlue('Your final score is ') + pokeYellow(points+" points"));
  addNewLine();
}
