'use strict';
// first question is what is your name?

var username = prompt ('Hi! Glad you are here, what is your name?');
alert('Hi ' + username + ', nice to meet you! I am going to ask you a few questions about me. Please answer with y/n or yes/no.');

var question1 = prompt('Do i like pets?').toLowerCase().trim();

if (question1 === 'yes' || question1 === 'y') {
    alert('Correct! I have a dog named Sidney!')
} else if (question1 === 'no' || question1 === 'n') {
    alert('Close ' + username + '! But that is not the right answer!')
} else {
    alert('Oh no ' + username + '! That is not a valid answer! Maybe you made a typo?');
}

var question2 = prompt ('Next question! Do you think i have a brother?').toLowerCase().trim();

if (question2 === 'yes' || question2 === 'y') {
    alert('That is right ' + username + '! I have two brothers, Eric and David')
}   else if (question2 === 'no' || question2 === 'n') {
    alert('Sorry ' + username + '! That is wrong.')
}   else {
    alert('That is not a valid answer ' + username + '!')
}

var question3 = prompt('Question 3, I play the bass guitar?').toLowerCase().trim();

if (question3 === 'yes' || question3 === 'y') {
    alert('Nope! I have never played bass befpre.')
}   else if (question3 === 'no' || question3 === 'n') {
    alert('Correct! I play the guitar, not the bass.')
}   else {
    alert('I am sorry, that is not a valid answer ' + username + ', maybe there was a typo?')
}

var question4 = prompt ('You are almost there ' + username + '! Next question, the game Overwatch gave me my love for computers?').toLowerCase().trim();

if (question4 === 'yes' || question4 === 'y' ) {
    alert('Wonderful! Overwatch has been my favorite game for awhile.')
}   else if (question4 === 'no' || question4 === 'no')  {
    alert( 'What?! ' + username + ' Overwatch is the best game ever!')
}   else {
        alert('That is not a valid responce. You should know this by now.')
}

var question5 = prompt('Last question, I am a fan of CSS?').toLowerCase().trim();

if ( question5 === 'yes' || question5 === 'y') {
    alert('Wrong, CSS have never appealed to me but i am still willing to learn it!')
}   else if (question5 === 'no' || question5 === 'n') {
    alert('That is right ' + username + '! I am a bigger fan of Javascript')
}   else {
    alert('This is a invalid responce, way to go')
}
    

