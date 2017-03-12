function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var computer = require('./json-trivia/science-computer-20.json');
var nature = require('./json-trivia/science-nature-20.json');
var math = require('./json-trivia/science-math-10.json');

// console.log(f.results);
var questions = []

for(var q in computer.results){
	aux = {};
	aux.question = computer.results[q].question;
	aux.correct = computer.results[q].correct_answer;
	aux.incorrect = computer.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in nature.results){
	aux = {};
	aux.question = nature.results[q].question;
	aux.correct = nature.results[q].correct_answer;
	aux.incorrect = nature.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in math.results){
	aux = {};
	aux.question = math.results[q].question;
	aux.correct = math.results[q].correct_answer;
	aux.incorrect = math.results[q].incorrect_answers;
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
	var name = 'green' + i + '.json'
	fs.writeFile(name, json, 'utf8');
}

// console.log(questions);