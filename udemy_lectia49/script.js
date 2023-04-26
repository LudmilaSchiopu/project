// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel


window.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        console.log('Start');
    });
});