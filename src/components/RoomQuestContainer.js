import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import * as actions from '../actions/index';

class RoomQuestContainer extends React.Component {
  render() {
    console.log('STATE -> CURRENT USER:', this.props.currentUser)
    console.log('STATE -> CURRENT LOCATION', this.props.currentPosition)
    console.log('------------------------');
    return (
      <div>
        <NavBar />
        <div className="ui grid container">
          <div className="ui two column stackable grid">
            <div className="column">
              <h1>Search for a Roommate</h1>
            </div>
            <div className="column">
              <h1>Search for a Room</h1>
            </div>
          </div>
        </div>
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
