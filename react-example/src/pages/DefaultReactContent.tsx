import React from 'react';
import logo from "../logo.svg";
import GreetingsForm from "../components/GreetingsForm";
import Greetings from "../components/Greetings";

const DefaultReactContent: React.FunctionComponent = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
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
    );
}

export default DefaultReactContent;
