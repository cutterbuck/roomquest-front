import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import * as actions from '../actions/index';

class RoomQuestContainer extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default connect(() => ({}), actions)(RoomQuestContainer);
