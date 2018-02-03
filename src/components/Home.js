import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import RoomQuestContainer from './RoomQuestContainer'

class Home extends React.Component {
  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    return <RoomQuestContainer />
  }
}


export default connect(() => ({}), actions)(Home);
