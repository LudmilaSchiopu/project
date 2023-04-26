import {Component} from 'react';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}*/

const Header = () =>{
  return <h2>Hello World!</h2>
}

/*const Field = () => {
  const holder = 'Enter here';
  const styleField = {
    width: '300px'
  };
  return <input 
     placeholder={holder} 
     type='text'
     style={styleField}/>
}*/

class Field extends Component {
  render () {
    const holder = 'Enter here';
    const styleField = {
      width: '300px'
    };

    return <input 
        placeholder={holder} 
        type='text'
        style={styleField}/>
  }
}

function Btn() {
  const text = 'Log in';
  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>
}

/*function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}*/

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1> My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className='App'>
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Smard" link="vk.com"/>
    </div>
  );
}

export default App;
