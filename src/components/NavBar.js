import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Logout from './Logout';

class NavBar extends React.Component {


  render() {
    return (
      <div className="ui inverted black menu fixed">
        <div className="right menu">
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
