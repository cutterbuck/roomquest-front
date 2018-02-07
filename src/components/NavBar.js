import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Logout from './Logout';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {




  render() {
    return (
      <div className="ui inverted black menu fixed">
        <div className="right menu">
          <div className="right aligned item">
            <Link to="/app/roommates-search">
              <div className="content">Find Roommates</div>
            </Link>
          </div>

          <div className="right aligned item">
            <Link to="/app/rooms-search">
              <div className="content">Find Rooms</div>
            </Link>
          </div>

          <div className="right aligned item">
            <Link to="/home">
              <div className="content">Home</div>
            </Link>
          </div>
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
