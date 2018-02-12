import React from 'react';
import { Link } from 'react-router-dom';

class RoomView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const room = this.props.room
    const user = this.props.currentUser.associations_with_rooms.find(user => user.id === room.user_id);
    const ts = new Date(room.created_at);
    const postedDate = ts.toDateString();
    console.log('THESE ARE RV PROPS', this.props)
    return (
    <div class="parent">
      <div class="ui card">
        <div class="image">
          <img src={user.profile_image_url} />
        </div>
        <div class="content">
          <div class="header">{user.name}</div>
          <div class="meta">{user.email}</div>
          <h4 className="ui header">
            Address:
            <div className="sub header">{room.address}<br></br>{room.city}, {room.state}<br></br>{room.zipcode}</div>
          </h4>
          <h4 className="ui header">
            Room Details:
            <div class="sub header">
              <p>{room.description}</p>
            </div>
          </h4>
        </div>
        <div class="extra content">
          Posted on {postedDate}
        </div>
      </div>

      <div class="back-button" onClick={this.props.resetCenter}>
        <Link to="/app/rooms">
          <button className="ui button">Back</button>
        </Link>
      </div>
    </div>
    )
  }
}



export default RoomView;
