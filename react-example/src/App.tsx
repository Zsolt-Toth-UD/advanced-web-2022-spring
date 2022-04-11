import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./components/Greetings";
import GreetingsForm from "./components/GreetingsForm";
import CarDetailedList from "./components/CarDetailedList";

function App() {
  return (
    <div className="App">
      <CarDetailedList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingsForm/>
        <Greetings name={'React'}/>
        <Greetings name={'World'}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
