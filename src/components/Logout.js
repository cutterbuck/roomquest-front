import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Logout extends React.Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="ui floated button" onClick={this.handleLogout}>Log Out</div>
    )
  }
}

export default connect(() => ({}), actions)(Logout);
