import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Logout from './Logout';

class NavBar extends React.Component {


  render() {
    const loggedIn = !!this.props.currentUser.name
    console.log('logged in T/F:', loggedIn)
    return (
      <div className="ui inverted black menu fixed">
        <div className="right menu">
          {loggedIn ? (<div className="item">Welcome, {this.props.currentUser.name.split(" ")[0]}</div>) : null}
          <Logout />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, actions)(NavBar);
