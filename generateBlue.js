function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var art = require('./json-trivia/art-10.json');
var history = require('./json-trivia/history-20.json');
var geo = require('./json-trivia/geography-10.json');
var politics = require('./json-trivia/politics-10.json');

// console.log(f.results);
var questions = []

for(var q in art.results){
	aux = {};
	aux.question = art.results[q].question;
	aux.correct = art.results[q].correct_answer;
	aux.incorrect = art.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in history.results){
	aux = {};
	aux.question = history.results[q].question;
	aux.correct = history.results[q].correct_answer;
	aux.incorrect = history.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in politics.results){
	aux = {};
	aux.question = politics.results[q].question;
	aux.correct = politics.results[q].correct_answer;
	aux.incorrect = politics.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in geo.results){
	aux = {};
	aux.question = geo.results[q].question;
	aux.correct = geo.results[q].correct_answer;
	aux.incorrect = geo.results[q].incorrect_answers;
	questions.push(aux);
}

console.log(questions.length)

shuffleArray(questions);
var fs = require('fs');
for(var i = 0; i < 5; i++){
	var aux = [];
	extra = i * 10;
	for(var j = 0; j < 10; j++){
		aux.push(questions[extra+j])
	}
	var json = JSON.stringify(aux);
	var name = 'blue' + i + '.json'
	fs.writeFile(name, json, 'utf8');
}

// console.log(questions);