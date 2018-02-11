import React from 'react';
import Map from './Map';
import RoomCard from './RoomCard'
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class RoomsContainer extends React.Component {
  state = {
    center: this.props.currentPosition,
    zoom: 11
  }


  updateSearchCenter = (search) => {
    this.setState({
      center: {lat: search[0].geometry.viewport.f.f, lng: search[0].geometry.viewport.b.b},
      zoom: 9
    })
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui two column stackable grid">
          <div className="rooms first header">
            <h1 className="display rooms">Available Rooms</h1>
          </div>
          <div className="six wide column">
            <RoomCard />
          </div>

          <div className="ten wide column">
            <div class="ui sticky">
            <div style={{width: '100%', height: '600px'}}>
              <Map updateSearchCenter={this.updateSearchCenter} center={this.state.center} zoom={this.state.zoom}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition
  }
}


export default connect(mapStateToProps, actions)(RoomsContainer);
