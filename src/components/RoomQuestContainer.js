import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Home from './Home';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';

class RoomQuestContainer extends React.Component {
  render() {
    console.log('STATE -> CURRENT USER:', this.props.currentUser)
    console.log('STATE -> CURRENT LOCATION', this.props.currentPosition)
    console.log('------------------------');

    return (
      <div>
        <NavBar />
        <Home />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentPosition: state.currentPosition
  }
}

export default connect(mapStateToProps, actions)(RoomQuestContainer);
