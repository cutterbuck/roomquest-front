import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';

class RoomCards extends React.Component {

  render() {
    return (
      <div className="ui special cards">
        {this.props.currentUser.vacant_rooms.map((vr, i) => {
          const addressSlug = vr.address.split(" ").join("-")
          const user = this.props.currentUser.associations_with_rooms.find(user => user.id === vr.user_id);
          return (
            <a className="room card" key={i} onClick={() => this.props.updateCenter({lat: parseFloat(vr.lat), lng: parseFloat(vr.lng)})}>
              <Link to={`/app/rooms/${addressSlug}`}>
                <div className="room content">
                  <h3 className="ui header rooms">{user.name}</h3>
                  <div className="roomcards ui grid container">
                    <div className="ui two column stackable grid roomcards">
                      <div className="column">
                        <img className="ui centered image" src={user.profile_image_url} alt={user.id} />
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
              </Link>
            </a>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, actions)(RoomCards);
