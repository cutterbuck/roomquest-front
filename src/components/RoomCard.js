import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


class RoomCard extends React.Component {

  render() {
    console.log("ROOMCARD CURRENT USER", this.props.currentUser.vacant_rooms)
    return (
      <div class="ui special cards">
        {this.props.currentUser.vacant_rooms.map((vr, i) => {
          const user = this.props.currentUser.associations_with_rooms.find(user => user.id === vr.user_id);
          const ts = new Date(vr.created_at);
          const postedDate = ts.toDateString();
          return (
            <a className="room card" key={i}>
              <div className="room content">
                <h3 className="ui header rooms">{user.name}</h3>
                <div className="roomcards ui grid container">
                  <div className="ui two column stackable grid roomcards">
                    <div className="column">
                      <img className="ui centered image" src={user.profile_image_url} />
                    </div>
                    <div className="column">
                      <h4 className="ui header">
                        Address:
                        <div className="sub header">{vr.address}<br></br>{vr.city}, {vr.state}<br></br>{vr.zipcode}</div>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, actions)(RoomCard);

// onClick={() => props.updateCenter({lat: act.lat, lng: act.long})}
