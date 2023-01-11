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

const isChecked = true;
    isClosed = true;

console.log(isChecked && isClosed);
console.log(isChecked || isClosed);
console.log(isChecked || !isClosed);

