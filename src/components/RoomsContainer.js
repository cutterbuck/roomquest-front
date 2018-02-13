import React from 'react';
import Map from './Map';
import RoomCards from './RoomCards'
import RoomView from './RoomView'
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class RoomsContainer extends React.Component {
  
  state = {
    center: {lat: 40.731134, lng: -73.984099},
    zoom: 11
  }

  componentDidMount() {
    if (this.props.currentPosition.lat) {
      this.setState({ center: this.props.currentPosition })
    } else {
      this.props.getLocation();
    }
  }

  updateSearchCenter = (search) => {
    this.setState({
      center: {lat: search[0].geometry.viewport.f.f, lng: search[0].geometry.viewport.b.b},
      zoom: 9
    })
  }

  updateCenter = (room) => {
    this.setState({
      center: {lat: room.lat, lng: room.lng},
      zoom: 13
    })
  }

  resetCenter = e => {
    this.setState({center: this.state.currentLocation, zoom: 11})
  }

  handleMarkerClick = e => {
    const room = this.props.currentUser.vacant_rooms.find(x => x.address === e.currentTarget.attributes.name.textContent)
    const roomSlug = room.address.split(" ").join("-")
    this.props.history.push(`/app/rooms/${roomSlug}`);
    this.setState({
      center: {lat: parseFloat(room.lat), lng: parseFloat(room.lng)},
      zoom: 13
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
            <Switch>
              <Route exact path="/app/rooms" render={({match}) => {
                  return (<RoomCards updateCenter={this.updateCenter}
                                     zoom={this.state.zoom} />)
                }} />
              <Route path="/app/rooms/:slug" render={(args) =>  {
                const room = this.props.currentUser.vacant_rooms.find(x => x.address.split(" ").join("-") === args.match.params.slug)
                return <RoomView room={room} resetCenter={this.resetCenter} currentUser={this.props.currentUser}/>
                }} />
            </Switch>
          </div>
          <div className="ten wide column">
            <div class="ui sticky">
            <div style={{width: '100%', height: '500px'}}>
              <Map updateSearchCenter={this.updateSearchCenter}
                   center={this.state.center}
                   zoom={this.state.zoom}
                   handleMarkerClick={this.handleMarkerClick} />
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
    currentPosition: state.currentPosition,
    currentUser: state.currentUser
  }
}


export default withRouter(connect(mapStateToProps, actions)(RoomsContainer));
