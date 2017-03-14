function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var sports = require('./json-trivia/sports-20.json');
var general = require('./json-trivia/general-knoweledge-20.json');
var celebs = require('./json-trivia/celebrities-10.json');

// console.log(f.results);
var questions = []

for(var q in sports.results){
	aux = {};
	aux.question = sports.results[q].question;
	aux.correct = sports.results[q].correct_answer;
	aux.incorrect = sports.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in general.results){
	aux = {};
	aux.question = general.results[q].question;
	aux.correct = general.results[q].correct_answer;
	aux.incorrect = general.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in celebs.results){
	aux = {};
	aux.question = celebs.results[q].question;
	aux.correct = celebs.results[q].correct_answer;
	aux.incorrect = celebs.results[q].incorrect_answers;
	questions.push(aux);
}

console.log(questions.length)

shuffleArray(questions);
var fs = require('fs');
for(var i = 0; i < 50; i++){
	var json = JSON.stringify(questions[i]);
	var name = 'sports' + i + '.json'
	fs.writeFile(name, json, 'utf8');
}
// console.log(questions);