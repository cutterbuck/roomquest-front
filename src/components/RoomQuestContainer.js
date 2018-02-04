import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import * as actions from '../actions/index';

class RoomQuestContainer extends React.Component {
  render() {
    console.log('STATE -> CURRENT USER:', this.props.currentUser)
    console.log('STATE -> CURRENT LOCATION', this.props.currentPosition)
    console.log('------------------------');
    const loggedIn = !!this.props.currentUser.name
    console.log('logged in T/F:', loggedIn)
    return (
      <div>
        <NavBar />
        <div className="ui grid container">
          <div className="ui two column stackable grid">
            {loggedIn ? (<div className="first header"><h1 className="welcome">Welcome to RoomQuest, {this.props.currentUser.name.split(" ")[0]}</h1></div>) : null}
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="header"><h2>Find a Room</h2></div>
                  <div className="description">Looking for a new place to live?<br></br>Moving to a new city?<br></br><br></br>See which friends and acquaintances have available rooms.</div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="header"><h2>Find a Roommate</h2></div>
                  <div className="description">Is one of your roommates moving away?<br></br>Have an empty room?<br></br><br></br>Post a vacancy to see which friends and acquaintances might be interested.</div>
                </div>
              </div>
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








// <div className="description">{act.description}</div>
