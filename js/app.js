'use strict';


var answersRight = 0;

var username = prompt ('Hi! Glad you are here, what is your name?');
alert('Hi ' + username + ', nice to meet you! I am going to ask you a few questions about me. Please answer with y/n or yes/no.');
console.log('User has entered ' + username + ' for there username.');

var question1 = prompt('Do i like pets?').toLowerCase().trim();

if (question1 === 'yes' || question1 === 'y') {
  alert('Correct! I have a dog named Sidney!');
  answersRight++;
} else if (question1 === 'no' || question1 === 'n') {
  alert('Close ' + username + '! But that is not the right answer!');
} else {
  alert('Oh no ' + username + '! That is not a valid answer! Maybe you made a typo?');
}

console.log('User has entered ' + question1 + ' for question 1.');

var question2 = prompt ('Next question! Do you think i have a brother?').toLowerCase().trim();

if (question2 === 'yes' || question2 === 'y') {
  alert('That is right ' + username + '! I have two brothers, Eric and David');
  answersRight++;
} else if (question2 === 'no' || question2 === 'n') {
  alert('Sorry ' + username + '! That is wrong.');
} else {
  alert('That is not a valid answer ' + username + '!');
}

console.log('User has entered ' + question2 + ' for the 2nd question');

var question3 = prompt('Question 3, I play the bass guitar?').toLowerCase().trim();

if (question3 === 'yes' || question3 === 'y') {
  alert('Nope! I have never played bass befpre.');
} else if (question3 === 'no' || question3 === 'n') {
  alert('Correct! I play the guitar, not the bass.');
  answersRight++;
} else {
  alert('I am sorry, that is not a valid answer ' + username + ', maybe there was a typo?');
}

console.log('User has entered ' + question3 + ' for question 3.');

var question4 = prompt ('You are almost there ' + username + '! Next question, the game Overwatch gave me my love for computers?').toLowerCase().trim();

if (question4 === 'yes' || question4 === 'y' ) {
  alert('Wonderful! Overwatch has been my favorite game for awhile.');
  answersRight++;
} else if (question4 === 'no' || question4 === 'no') {
  alert( 'What?! ' + username + ' Overwatch is the best game ever!');
} else {
  alert('That is not a valid responce. You should know this by now.');
}

console.log('User has entered ' + question4 + 'for question 4.');

var question5 = prompt('Last question, I am a fan of CSS?').toLowerCase().trim();

if ( question5 === 'yes' || question5 === 'y') {
  alert('Wrong, CSS have never appealed to me but i am still willing to learn it!');
} else if (question5 === 'no' || question5 === 'n') {
  alert('That is right ' + username + '! I am a bigger fan of Javascript');
} else {
  alert('This is a invalid responce, way to go');
}

console.log('User has entered ' + question5 + ' for question 5');

var numberOfTries = 0;
var answer = false;

while(numberOfTries < 5 && answer === false) {

  var question6 = prompt('Bonus question!, i am thinking of a number between 40-50, what is it? by the way i am giving you 4 tries.').toLowerCase().trim();

  if (question6 === '44') {
    alert('That is correct! Nice job, ' + username);
    answersRight++;
    answer = true;
    break;
  }
  if (question6 < '44') {
    alert('That is not correct your number was too low, please try again!');
    numberOfTries++;
    answer = false;
  }
  if (question6 > '44') {
    alert('That is not correct, you number was too high!');
    numberOfTries++;
    answer = false;
  }
}


console.log ('User has entered ' + question6 + ' for there answer.');

var tries = 0;
var statesTraveled = ['california', 'texas', 'maine', 'idaho', 'washington'];
var stateanswer = false;

while (tries < 7 && stateanswer === false) {
  var question7 = prompt('Last bonus question, can you name one of the states i have been too?').toLowerCase().trim();

  for ( var i = 0; i < statesTraveled.length; i++ ) {

    if ( question7 === statesTraveled[i]) {
      stateanswer = true;
      answersRight++;
      alert('That is correct! i have been to many different states.');
      break;
    }
  }

  if (question7 !== statesTraveled[i]) {
    alert('Opps! that is not correct, please try again.');
    tries++;
    stateanswer = false;
  }
}

console.log('User has entered ' + question7 + ' for there answer');

var finalStatement = alert('Well done ' + username + ' you got ' + answersRight + ' out of 7!');

finalStatement;


