import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Logout from './Logout';
import { withRouter } from 'react-router';

class NavBar extends React.Component {

  handleBrowseRoommates = e => {
    this.props.currentUser.vacancy ? this.props.history.push("/app/roommates") : this.props.history.push("/app/add-vacancy")
  }

  handleBrowseRooms = e => {
    this.props.history.push("/app/rooms")
  }

  handleHome = e => {
    this.props.history.push("/home")
  }

  render() {
    return (

      <div className="ui inverted black menu fixed">
        <a className="item" onClick={this.handleHome} >
          <h2 className="ui header">
            <div className="content">Sherl<i id="logo" className={`violet search icon`}></i>ck Homes</div>
          </h2>
        </a>
        <div className="right menu">
          <a className="right aligned item" onClick={this.handleBrowseRoommates} >
            <div className="content">Browse Roommates</div>
          </a>

          <a className="right aligned item" onClick={this.handleBrowseRooms} >
            <div className="content">Browse Rooms</div>
          </a>

          <a className="right aligned item" onClick={this.handleHome} >
            <div className="content">Home</div>
          </a>
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

export default withRouter(connect(mapStateToProps, actions)(NavBar));
