import React from 'react';
import ModalConfirmation from './ModalConfirmation'


class RoommateView extends React.Component {

  render() {
    const association = this.props.currentAssociation
    return (
    <div>
      <div className="roommate-view-parent">
        <div className="ui attached segment padded text">
          <h2 className="ui header rooms">{association.name}
            <div className="sub header">{association.email}</div>
          </h2>
          <br></br>
          <img className="ui centered large rounded image" alt={association.name} src={association.profile_image_url} />
        </div>
        <ModalConfirmation association={association} />
      </div>
    </div>
    )
  }
}

export default RoommateView;
