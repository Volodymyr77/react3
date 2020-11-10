import './App.css';
import React, {Component} from 'react';
import Form1 from "./Form1";
import Form2 from "./Form2";

export class App extends Component {

    render() {
        return (<div>
            App
            <Form1/>
            <Form2/>
        </div>)
    }
}

export default App;
