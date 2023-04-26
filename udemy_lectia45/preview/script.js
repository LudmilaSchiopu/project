const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    //e.target.remove();
    //console.log('Hover');
});

//otmena standartnovo povedeia brauzera
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});