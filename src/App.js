import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import RoomQuestContainer from './components/RoomQuestContainer';


class App extends Component {

  render() {
    return (
      <div className="main">
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/app" component={RoomQuestContainer} />
      </div>
    );
  }
}

export default App;
