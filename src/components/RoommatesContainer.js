import React from 'react';
import RoommateCards from './RoommateCards';
import RoommateView from './RoommateView';

class RoommatesContainer extends React.Component {

  render() {
    return (
      <div className="ui grid container">
        <div className="ui two column stackable grid">
          <div className="rooms first header">
            <h1 className="display rooms">Potential Roommates</h1>
          </div>
          <div className="six wide column">
            <RoommateCards />
          </div>

          <div className="ten wide column">
            <RoommateView />
          </div>
        </div>
      </div>
    )
  }
}

export default RoommatesContainer;
