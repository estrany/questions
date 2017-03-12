function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var tv = require('./json-trivia/entertainment-tv-10.json');
var film = require('./json-trivia/entertainment-film-10.json');
var books = require('./json-trivia/entertainment-books-10.json');
var vg = require('./json-trivia/entertainment-vg-10.json');
var music = require('./json-trivia/entertainment-music-10.json');

// console.log(f.results);
var questions = []

for(var q in tv.results){
	aux = {};
	aux.question = tv.results[q].question;
	aux.correct = tv.results[q].correct_answer;
	aux.incorrect = tv.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in film.results){
	aux = {};
	aux.question = film.results[q].question;
	aux.correct = film.results[q].correct_answer;
	aux.incorrect = film.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in vg.results){
	aux = {};
	aux.question = vg.results[q].question;
	aux.correct = vg.results[q].correct_answer;
	aux.incorrect = vg.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in books.results){
	aux = {};
	aux.question = books.results[q].question;
	aux.correct = books.results[q].correct_answer;
	aux.incorrect = books.results[q].incorrect_answers;
	questions.push(aux);
}
for(var q in music.results){
	aux = {};
	aux.question = music.results[q].question;
	aux.correct = music.results[q].correct_answer;
	aux.incorrect = music.results[q].incorrect_answers;
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
	var name = 'pink' + i + '.json'
	fs.writeFile(name, json, 'utf8');
}

// console.log(questions);