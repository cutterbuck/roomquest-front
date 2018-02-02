import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import RoomQuestContainer from './RoomQuestContainer';

class Home extends React.Component {
  componentDidMount() {
   console.log('this is Homepage props', this.props)
  }

  render() {
    return <RoomQuestContainer />
  }
}

export default connect(() => ({}), actions)(Home);
