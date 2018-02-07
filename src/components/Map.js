import React from "react";
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 43.587332, lng: -110.829230},
    zoom: 11
  };

  render() {
    console.log('currentLocation inside Map', this.props.currentPosition)
    return (
      <GoogleMap
        apiKey={'AIzaSyDTbREAL0OVjYJ7OHRFSM0ng1CBc2jC7Pk'}
        center={this.props.currentPosition}
        zoom={11}
        >
      </GoogleMap>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
  }
}

export default connect(mapStateToProps, actions)(Map);
