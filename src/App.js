import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
