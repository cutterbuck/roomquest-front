import React from 'react';
import $ from "jquery";
window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic')


class RoommateView extends React.Component {

  modal = e => {
    $('.ui.modal')
      .modal({
        inverted: true
      })
      .modal('show')
    ;
  }

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
        <div className="ui bottom attached violet button" onClick={this.modal}>Select Roommate</div>
      </div>
      </div>

    )
  }
}

export default RoommateView;

// NEW MODAL Component GOES HERE // <modalComponent association={association}
//   <div class="ui modal">
//     <i class="close icon"></i>
//     <div class="header">
//       {association.name}
//     </div>
//     <div class="image content">
//       <div class="ui medium image">
//         <img src={association.profile_image_url} />
//       </div>
//       <div class="description">
//         <div class="ui header">Please confirm that {association.name} will be your new roommate!</div><br></br>
//         <p>Once you confirm, your vacancy will be deleted from our database. It will no longer be seen by friends and associations searching for a room.</p>
//       </div>
//     </div>
//     <div class="actions">
//       <div class="ui black deny button">
//         Back
//       </div>
//       <div class="ui positive right labeled icon button" onClick={this.props.handleSelectDelete} >
//         Confirm
//         <i class="checkmark icon"></i>
//       </div>
//     </div>
//   </div>
// </div>
