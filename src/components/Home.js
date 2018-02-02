import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
   console.log('this is UserAuth props', this.props)
  }

  render() {
    return <h2>Inside Homepage</h2>
  }
}

export default connect(() => ({}), actions)(Home);
