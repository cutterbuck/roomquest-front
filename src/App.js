import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RoomQuestContainer from './components/RoomQuestContainer';


class App extends Component {

  render() {
    return (
      <div className="main">
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={RoomQuestContainer} />
      </div>
    );
  }
}

export default App;
