import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import withAuth from '../hocs/withAuth';



class Home extends React.Component {
  componentDidMount() {
    this.props.getLocation();
  }

  handleClick = e => {
    {this.props.currentUser.vacancy ? this.props.history.push("/app/roommates") : this.props.history.push("/app/add-vacancy")}
  }

  render() {
    console.log('STATE -> CURRENT USER:', this.props.currentUser)
    console.log('STATE -> CURRENT LOCATION', this.props.currentPosition)
    console.log('------------------------');
    const loggedIn = !!this.props.currentUser.name

    return (
      <div>
        <NavBar />
        <div className="ui grid container">
          <div className="ui two column stackable grid">
            {loggedIn ? (<div className="first header"><h1 className="welcome">Welcome to Sherlock Homes, {this.props.currentUser.name.split(" ")[0]}</h1></div>) : null}
            <div className="column">
                <div onClick={this.handleClick} className="welcome-button">
                  <div className="welcome content">
                    <div className="header"><h2 className="welcome headers">Find a Roommate</h2></div>
                    <div className="description">Is your roommate moving away?<br></br>Need to fill an empty room?<br></br><br></br>Post a vacancy to see which friends and acquaintances might be interested.</div>
                  </div>
                </div>
            </div>
            <div className="column">
              <Link to={'/app/rooms'}>
                <div className="welcome-button">
                  <div className="welcome content">
                    <div className="header"><h2 className="welcome headers">Find a Room</h2></div>
                      <div className="description">Looking for a place to live?<br></br>Moving to a new city?<br></br><br></br>See which friends and acquaintances have available rooms.</div>
                  </div>
                </div>
              </Link>
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

export default withAuth(connect(mapStateToProps, actions)(Home));
