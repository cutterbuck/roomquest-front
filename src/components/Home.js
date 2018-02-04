import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    const loggedIn = !!this.props.currentUser.name
    console.log('logged in T/F:', loggedIn)
    return (
      <div className="ui grid container">
        <div className="ui two column stackable grid">
          {loggedIn ? (<div className="first header"><h1 className="welcome">Welcome to RoomQuest, {this.props.currentUser.name.split(" ")[0]}</h1></div>) : null}
          <div className="column">
            <Link to={`/vacancy-form`}>
              <div className="card">
                <div className="content">
                  <div className="header"><h2>Find a Room</h2></div>
                  <div className="description">Looking for a new place to live?<br></br>Moving to a new city?<br></br><br></br>See which friends and acquaintances have available rooms.</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to={`/search`}>
              <div className="card">
                <div className="content">
                  <div className="header"><h2>Find a Roommate</h2></div>
                  <div className="description">Is one of your roommates moving away?<br></br>Have an empty room?<br></br><br></br>Post a vacancy to see which friends and acquaintances might be interested.</div>
                </div>
              </div>
            </Link>
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

export default connect(mapStateToProps, actions)(Home);
