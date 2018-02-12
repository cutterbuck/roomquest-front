import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavBar extends React.Component {

  handleClick = e => {
    {this.props.currentUser.vacancy ? this.props.history.push("/app/roommates") : this.props.history.push("/app/add-vacancy")}
  }

  render() {
    return (

      <div className="ui inverted black menu fixed">
        <a className="item">
          <h2 className="ui header">
            <Link to="/home">
              <div className="content">Sherl<i id="logo" className={`violet search icon`}></i>ck Homes</div>
            </Link>
          </h2>
        </a>
        <div className="right menu">
          <a className="right aligned item">
            <div onClick={this.handleClick} className="content">Browse Roommates</div>
          </a>

          <a className="right aligned item">
            <Link to="/app/rooms">
              <div className="content">Browse Rooms</div>
            </Link>
          </a>

          <a className="right aligned item">
            <Link to="/home">
              <div className="content">Home</div>
            </Link>
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
