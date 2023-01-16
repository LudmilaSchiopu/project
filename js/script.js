"use strict";

let number = 5;
const leftBorderWidth = 1;

number =10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 20;
console.log(obj);

const person = {
    name: "Iuliana",
    age: 3,
    school: false
};

console.log(person.name);

let arr = ['orange.jpg', 'image.bmp', 6, []];
console.log(arr[1]);

//alert ('Hello');

//const result = confirm ("Are you here?");
//console.log(result);

//const answer = prompt ("Are you 18?", "18");
//console.log(answer + 5);

//const answer = +prompt ("Are you 18?", "18");
//console.log(answer + 5);

//const answers = [];

//answers[0] = prompt('What is your name?', '');
//answers[1] = prompt('What is your surname?', '');
//answers[2] = prompt('How old are you?', '');

//document.write(answers);


const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Hello, ${user}`);


let incr = 10,      
    decr = 10;

//++incr;
//--decr;

console.log(++incr);
console.log(--decr);

console.log(2*4 == 8);

const isChecked = true,
       isClosed = true;

console.log(isChecked && isClosed);
console.log(isChecked || isClosed);
console.log(isChecked || !isClosed);


/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , ''); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;  
personalMovieDB.movies[c] = d;  

console.log(personalMovieDB);