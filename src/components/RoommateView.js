import React from 'react';

class RoommateView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PROPS INSIDE ROOMMATE VIEW', this.props.currentAssociation)
    const association = this.props.currentAssociation
    return (
      <div className="roommate-view-parent">
        <div className="ui attached segment padded text">
          <h2 className="ui header rooms">{association.name}
            <div className="sub header">{association.email}</div>
          </h2>
          <br></br>
          <img className="ui centered small rounded image" src={association.profile_image_url} />
        </div>
        <div onClick={this.props.handleSelectDelete} className="ui bottom attached violet button" tabindex="0">Select Roommate</div>
      </div>
    )
  }
}

export default RoommateView;
