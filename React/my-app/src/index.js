import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//const elem = <h2>Hello World!</h2>;
//const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

//const text = 'Hello World!'
/*const elem = (
  <div>
    <h2 className='text'>Salut: {text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button>Click</button>
  </div>
)*/

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>,
);

