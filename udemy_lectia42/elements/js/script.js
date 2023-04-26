'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles[2]);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

const firstheart = document.querySelector('.heart');
console.log(firstheart);

var object = {0: 'a', 1: 'b', 2: 'c', length: 3}
// Создаём массив из значений псевдомассива
object = Array.prototype.map.call(object, v => 'Буква: ' + v); // Или сокращённо: [].map.call(object, v => 'Буква: ' + v)

console.log(object); // ['Буква: a', 'Буква: b', 'Буква: c']


var object = {0: 1, 1: 2, 2: 3, length: 3}
// Преобразуем псевдомассив в массив
var array = Array.from(object);

console.log( array ); // [1, 2, 3]


const box2 = document.getElementById('box'),
      btns2 = document.getElementsByTagName('button'),
      circles2 = document.getElementsByClassName('circle'),
      hearts2 = document.querySelectorAll('.heart'),
      firsthear2 = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
//console.dir(box2);    
//box.style.backgroundColor = 'blue';  
//box.style.width = '500px';
box.style.cssText = 'background-color:blue; width:500px';
btns2[1].style.borderRadius = '100%';
circles2[0].style.backgroundColor = 'red';    

hearts2.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
div.classList.add('black');
//document.body.append(div);   //adaugam element in body, la sfirsit
wrapper.append(div);
//wrapper.prepend(div);  //adaugam element la inceput
//hearts2[0].before(div);
//hearts2[0].after(div);
//circles2[1].remove();
//hearts2[0].replaceWith(circles2[0]);
div.innerHTML = "<h1>Hello world</h1>"; //lucru cu structura HTML
//div.textContent = "Hello"; //lucru cu info de la polizavateli
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); //beforebegin,beforeend,afterbegin,afterend