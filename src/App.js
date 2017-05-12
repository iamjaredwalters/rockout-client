import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        /**
         * In prod, the server is going to serve the react app generated by CRA therefore DEV will not need an
         * explicit prefix
         */
        const authUrlPrefix = process.env.NODE_ENV === 'development'
            ? 'http://localhost:3001'
            : '';

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <a href={`${authUrlPrefix}/auth/spotify`}>Auth Link</a>
                </p>
            </div>
        );
    }
}

export default App;
