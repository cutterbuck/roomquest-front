import React from 'react';
import Map from './Map'

class RoomsContainer extends React.Component {

  render() {
    return (
      <div className="ui grid container">
        <div className="ui two column stackable grid">
          <div className="rooms first header">
            <h1 className="display rooms">Available Rooms</h1>
          </div>
          <div className="column">
            <h1>Room cards here</h1>
          </div>

          <div className="column">
            <div style={{width: '100%', height: '450px'}}>
              <Map />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RoomsContainer;
