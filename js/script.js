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
console.log(`Hello, ${user}`);


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

/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , ''); 

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

console.log(personalMovieDB);*/

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

if (4 == 4) {
    console.log('Ok!');
}

/*const num = 50;

if (num < 50) {
    console.log('Error');
} else if (num > 100) {
    console.log('More');
} else {
    console.log('Ok');
}

//тернарный оператор, 3 argumenta 
(num === 50) ? console.log('Ok') : console.log('Error');*/

const num1 = 50;
switch (num1) {
    case 49:
        console.log('incorect');
        break;
    case 100:
        console.log('incorect');
        break;
    case 50:
        console.log('corect');
        break;  
    default:
        console.log('nu');
        break;         
}

//if (true-false)
const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Not hungried');
}

console.log((hamburger && fries));

//if (number)
const hamburgerL = 3;
const friesL = 1;
const colaL = 0;

console.log(hamburgerL === 3 && colaL && friesL);

if (hamburgerL === 3 && colaL ===1 && friesL) {
    console.log('we are not hungried');
} else {
    console.log('we leave');
}

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'kjkjkjjku');

const hamburgerS = 0;
const friesS = null;
const colaS = 0;

//else
if (hamburgerS || colaS || friesS) {
    console.log('we are not hungried');
} else {
    console.log('we leave');
}

console.log (hamburgerS || colaS || friesS);


let johnReport, mariaReport, ruslanReport = 'done';
console.log(johnReport || mariaReport || ruslanReport);

const hamburgerR = 3;
const friesR = 3;
const colaR = 0;
const nuggetsR = 2;

if (hamburgerR === 3 && colaR === 2 || friesR === 3 && nuggetsR) {
    console.log('we eat');
} else {
    console.log('we leave');
}

//task
console.log(hamburgerR === 3 && colaR === 2 || friesR === 3 && nuggetsR);

console.log(!0);

console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);

//task
/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

//task
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

//task
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}*/

//cicluri
let num2 = 50;

/*while (num2 <= 55) {
    console.log(num2);
    num2++;
}*/

/*do {
    console.log(num2);
    num2++; 
}
while (num2 <= 55);*/

//i-iterator
for (let i = 1; i < 8; i++) {
    console.log(num2);
    num2++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5; ++i) {
    console.log(i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
}


let num;

do {
  num = prompt ("Введите число больше 100?", 0);
} while (num <= 100 && num);

//cicluri in cicluri
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
        
    }
}

//*
//** 
//*** 
//****
//*****
//******

let resultS = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        resultS += '*';
    }

    resultS += '\n';
}

console.log(resultS);

// "first:" este metca
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

//
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

//zadaci#1
for (let i=5; i <= 10; i++) {
    console.log(i);
}

//zadaci#2
for (let i=20; i>=10; i--) {
    if (i === 13) break;
    
    console.log(i);
}

//zadaci#3
for ( let i = 2; i <= 10; i++) {
    if (i % 2 == 0)
    console.log(i);
}

//zadaci#4  NEREZOLVATA!!!!!!!!!!!!!!!!!!!!!!!!
/*for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}*/

let iZ = 2;

while (iZ <= 16) {
    if (iZ % 2 === 0) {
     iZ++;
     continue;
    } else {
        console.log(iZ);
    }
    iZ++;
} 


//zadaci#5
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);


//zadacia
//     *
//    ***
//   *****
//  *******
// *********
//***********
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);


/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

/*const numberOfFilms2 = +prompt('Сколько фильмов вы уже посмотрели?' , ''); 

const personalMovieDB2 = {
    count: numberOfFilms2,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB2.movies[a] = b;  
        console.log('done');
    } else {
        console.log('error');
        i--;
    }


}

    if (personalMovieDB2.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB2.count >= 10 && personalMovieDB2.count < 30) {
        console.log("Вы классический зритель");
    } else if ( personalMovieDB2.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
console.log(personalMovieDB2);*/

//functii
function showFirstMessage () {
    console.log("Hello World");
}

showFirstMessage ();


function showFirstMessage (text) {
    console.log(text);
}

showFirstMessage ("Hello World");

let num4 = 20;

function showFirstMessage (text) {
    console.log(text);
    let num4 = 10;
    console.log(num4);
}

showFirstMessage ("Hello World");
console.log(num4);

function calc(a, b) {
    return(a + b);
}
console.log(calc(3, 4));
console.log(calc(5, 8));
console.log(calc(10, 4));

function ret() {
    let num = 50;

    //


    return(num);
}
const anotherNumber = ret();
console.log(anotherNumber);

const logger = function() {
    console.log("Hello");
};
logger();

//const calc = (a, b) => a + b;

//zamikanie
function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);


function convert(amount) {
    console.log(20 * amount);
}
convert(500);

const usdCurr1 = 18;
const eurCurr = 21;

function convert(amount, curr) {
    console.log(curr * amount);
}
convert(500, usdCurr1);
convert(500, eurCurr);

//importanta "result"-ului
const usdCurr = 18;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}
function promotion (result) {
    console.log(result * discount);
}
/*promotion(convert(500, usdCurr));*/
const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return;
        }
    }
    console.log('Done');
}
test();

//undifaind
function doNothing() {};
console.log(doNothing() === undefined);





//ex.6,zadacia 1
function sayHello(nameV) {
    return `Hello, ${nameV}!`;
}

console.log(sayHello('Valera'));



//ex.6,zadacia 2
function returnNumber1 (num5) {
    return [num5 - 1, num5, num5 + 1];
}

console.log(returnNumber1(5));


//ex.6,zadacia 3
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));

//string
const str = "test";
console.log(str.toUpperCase());
console.log(str.length);
console.log(str);


const arr1 = [1, 2, 4];
console.log(arr1.length);

//poisk po straki
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11)); //pot folosi 'minus'
console.log(logg.substring(6, 11)); //nu pot folosi 'minus'
console.log(logg.substr(6, 5)); // '5' simboluri dupa a '6'-lea caracter

//aici ceva nu merge 'print'!!!!!!
var a = 'a';
var b = 'b';
if (a < b) { // true
     print(a + ' меньше чем ' + b);
} else if (a > b) {
     print(a + ' больше чем ' + b);
} else {
     print(a + ' и ' + b + ' равны.');
}
console.log();

var s1 = '2 + 2';             // создаёт строковый примитив
var s2 = new String('2 + 2'); // создаёт объект String
console.log(eval(s1));        // выведет число 4
console.log(eval(s2));        // выведет строку '2 + 2'
console.log(eval(s2.valueOf())); // выведет число 4

//`${..}`
function sum(a, b) {
    return a + b;
  }
  
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // список гостей, состоящий из нескольких строк


let str1 = "Hello\nWorld";

let str2 = `Hello
World`;

console.log(str1 == str2); // true

console.log( 'I\'m the Walrus!' ); // I'm the Walrus!
console.log( `I\'m the Walrus!` ); // I'm the Walrus!

for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

//number
const num6 = 12.2;
console.log(Math.round(num6));

const test2 = "12.2px";
console.log(parseInt(test2)); //12
console.log(parseFloat(test2)); //12.2

let num7 = 1.23456;

console.log( Math.floor(num7 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

/*let numberOfFilms3;

function start () {
    numberOfFilms3 = +prompt('Сколько фильмов вы уже посмотрели?' , '');

    while (numberOfFilms3 == '' || numberOfFilms3 == null || isNaN (numberOfFilms3)) {
        numberOfFilms3 = +prompt('Сколько фильмов вы уже посмотрели?' , '');
    }
}
start();

const personalMovieDB3 = {
    count: numberOfFilms3,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt ('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB3.movies[a] = b;  
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    
    }
    
}
rememberMyFilms ();


function detectPersonalLevel () {
    if (personalMovieDB3.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB3.count >= 10 && personalMovieDB3.count < 30) {
        console.log("Вы классический зритель");
    } else if ( personalMovieDB3.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}
//detectPersonalLevel ();



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB3);
    }
}
showMyDB (personalMovieDB3.privat);


function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB3.genres[i - 1] = genre;
    }
}
writeYourGenres ();*/


//zadacia 7
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(33));

//zadacia 8
function getTimeFromMinutes(minutes) {
    if (typeof (minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    } 

    const hours = Math.floor(minutes / 60);
    const minute = minutes % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;        
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';    
    }

    return `Это ${hours} ${hoursStr} и ${minute} минут`;
}
console.log(getTimeFromMinutes(150));


function findMaxNumber (a, b, c, d) {
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}
console.log(findMaxNumber (4, 5.2, 88.5, 10));
console.log(findMaxNumber (4, '8', 10, 99));

//zadacia 9
function fib(numberFib) {
    if (typeof (numberFib) !== 'number' || numberFib < 0 || !Number.isInteger(numberFib)) {
        return "";
    }

    let a = 0;
    let b = 1;
    let totalFib = '';

    for (let i = 0; i < numberFib; i++) {
        if (i + 1 === numberFib) {
            totalFib += `${a}`;
        } else {
            totalFib += `${a} `;
        }
        let c = a + b;
        a = b;
        b = c;

    }
    
    return totalFib;
}

console.log(fib(7));


//callback
function learnJS (lang, callback) {
    console.log(`Invat : ${lang}`);
    callback();
}
function done() {
    console.log('Lesson done');
}
learnJS('JavaScript', done);

//obiecti
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();
const {border, bg} = options.color; //destructurizare
console.log(border);
//console.log(Object.keys(options).length);
//console.log(options.name);
//delete options.name;
//console.log(options);
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Svoistva ${i} imeet znacenia ${options[key][i]}`);
        }
    } else {
    console.log(`Svoistva ${key} imeet znacenia ${options[key]}`);
    }
}

//masivi i psevdomasivi
const arr2 = [1, 3 , 5, 8, 9];
arr2.forEach(function(item, i, arr2) {
    console.log(`${i}: ${item} este in masivul ${arr2}`);
});
//arr2.pop();
//arr2.push(9);
//console.log(arr2);
/*for (let i = 0; i < arr2.length; i++ ) {
    console.log(arr2[i]);
}*/
for (let value of arr2) {
    console.log(value);
}

//metodi masiva
const str3 = prompt ("", "");
const products = str3.split(", ");
//products.sort();
console.log(products.join('; '));

//spread operatot
const video = ['v1', 'v2', 'v3'],
      blogs = ['b1', 'b2', 'b3', 'b4'],
      internet = [...video, ...blogs, 'fb', 'instagram'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num8 = [4, 11, 88];
log(...num8);   //pretoperator


//zadacia 10 
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};
//const {languages, programmingLangs, exp} = personalPlanPeter.skills; //destructurizare
//console.log(exp);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
   
    for (let key in programmingLangs) {
        console.log(`Язык ${key} изучен на ${programmingLangs[key]}\n`);
    }
    
    return programmingLangs;
}
console.log(showProgrammingLangs(personalPlanPeter));
//nu prea am inteles zadacia!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
function showAgeAndLangs(plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function(lang) {
        str += `${lang.toUpperCase()} `;
    });

    return str;
}
console.log(showAgeAndLangs(personalPlanPeter));

//zadacia 11
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    
    if (arr.length === 0) {
        console.log('Семья пуста');
    } else {
        console.log(`Семья состоит из: ${arr}`);
    }
    
}
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}
console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';
function reverse(str) {
    
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    } 
    return str.split('').reverse().join('');
}
console.log(reverse(someString));






const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        console.log('Нет доступных валют');
    } 
    
    
    let result = 'Доступные валюты:\n';
    arr.forEach(function (money) {
     if (money !== missingCurr) {
         
        result += `${money}\n`;
     }
    });
    return result;
    }

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


//prototipi
const soldier = {
    health: 400,
    power: 500,
    sayHello: function() {
        console.log('Hello');
    }
};
const john = Object.create(soldier);
//Object.setPrototypeOf(soldier);
john.sayHello();

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



const personalMovieDB4 = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB4.count = +prompt('Сколько фильмов вы уже посмотрели?' , '');
    
        while (personalMovieDB4.count == '' || personalMovieDB4.count == null || isNaN (personalMovieDB4.count)) {
            personalMovieDB4.count = +prompt('Сколько фильмов вы уже посмотрели?' , '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt ('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt ('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB4.movies[a] = b;  
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB4.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB4.count >= 10 && personalMovieDB4.count < 30) {
            console.log("Вы классический зритель");
        } else if ( personalMovieDB4.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB4);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB4.privat) {
            personalMovieDB4.privat = false;
        } else {
            personalMovieDB4.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt (`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre === 'null') {
                console.log('Vi ne vveli daniie');
                i--;
            } else {
                personalMovieDB4.genres[i - 1] = genre;
            }
            
        }
        personalMovieDB4.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }
};


//exercise 13
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = '';
    let volume = '';

    data.shops.forEach (shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
console.log(isBudgetEnough(shoppingMallData));


//dinamiciskaia tipizatia
//to string
//1)....se foloseste rar
console.log(typeof(String(null)));
console.log(String(null));
console.log(String(4));

//2)konkodinatia
console.log(typeof(5 + ''));

const num9 = 5;
console.log("https://vk.com/catalog/" + num9);

//to Number
//1)....se foloseste rar
console.log(typeof(Number('4')));

//2)unarnii +
console.log(typeof(Number(+'5')));


//to Boolean
// 0, '', null, undefined, NaN;
let switcher = null;
if (switcher) {
    console.log('Working');
}
switcher = 1;
if (switcher) {
    console.log('Working');
}

//leksiceskoe ocrujenie
let number2 = 5;
function logNumber() {
    let number2 = 4; 
    console.log(number2);
}
number2 = 6;
logNumber(); 

//interviu
//let x = 5; alert( x++ );  //5
//let x = 5; alert( ++x );  //6

//[ ] + false - null + true //[]-string
console.log([ ] + false - null + true ); //NaN

//let y = 1; 
//let x2 = y = 2; 
//alert(x2); //2

console.log([ ] + 1 + 2); //12

//alert( "1"[0] );//1

console.log(2 && 1 && null && 0 && undefined ); //null

//console.log(!!( 1 && 2 ) === (1 && 2)); //false

alert( null || 2 && 3 || 4 ); //3

//const a = [1, 2, 3]; 
//const b = [1, 2, 3]; 
//console.log(a == b); //false

alert( +"Infinity" ); //Infinity ('+' tip danix number)

console.log("Ёжик" > "яблоко"); //false

console.log(0 || "" || 2 || undefined || true || false ); //2

//cod.ex.15
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));