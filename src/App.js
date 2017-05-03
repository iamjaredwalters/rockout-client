import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        // console.log('did mount');
    }

    redirect() {
        console.log('redirect, son');
        axios.get('/auth/spotify').then(res => {
            console.log('axios response', res);
        });
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <a href="/auth/spotify">Auth Link</a>
                    <button onClick={this.redirect}>Login</button>
                </p>
            </div>
        );
    }
}

export default App;
