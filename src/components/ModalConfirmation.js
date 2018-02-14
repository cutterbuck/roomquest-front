import React from 'react';
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { withRouter } from 'react-router';


class ModalConfirmation extends React.Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => {
    this.setState({ open: false })
  }
  handleConfirm = () => {
    const id = this.props.currentUser.vacancy.id;
    this.props.deleteVacancy(id);
    this.props.history.push("/app/thanks")
  }

  render() {
    console.log('PROPS INSIDE MODAL', this.props.association)
    const { open, dimmer } = this.state

    return (
      <div>
        <Button color="violet" onClick={this.show('inverted')}>Select Roommate</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{this.props.association.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.association.profile_image_url} />
            <Modal.Description>
              <Header>Please confirm that {this.props.association.name} is your new roommate!</Header>
              <p>Once you confirm, your vacancy will be deleted from our database. It will no longer be seen by friends and associations searching for a room.</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Back
            </Button>
            <Button icon='checkmark' color='violet' labelPosition='right' content="Confirm" onClick={this.handleConfirm} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, actions)(ModalConfirmation));
