import React from "react";
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import MarkerComp from './MarkerComp';
import SearchBox from './SearchBox';

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 40.731134, lng: -73.984099},
    zoom: 11
  };


  render() {
    console.log('props inside map', this.props)
    console.log('this.props.currentPosition', this.props.currentPosition)

    return (
      <GoogleMap
        apiKey={'AIzaSyDTbREAL0OVjYJ7OHRFSM0ng1CBc2jC7Pk'}
        center={this.props.center}
        zoom={this.props.zoom}
        >

        <SearchBox className="searchBar" updateSearchCenter={this.props.updateSearchCenter}/>

        {this.props.currentUser.vacant_rooms.map((marker, i) => {
          return <MarkerComp className="existingMarker" key={i} lat={parseFloat(marker.lat)} lng={parseFloat(marker.lng)} color={"black"}/>
        })}

        </GoogleMap>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, actions)(Map);
