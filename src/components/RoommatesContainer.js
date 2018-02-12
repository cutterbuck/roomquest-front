import React from 'react';
import RoommateCards from './RoommateCards';
import RoommateView from './RoommateView';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class RoommatesContainer extends React.Component {
  state = {
    currentAssociation: this.props.currentUser.associations_without_rooms[0]
  }

  selectView = (association) => {
    this.setState({currentAssociation: association})
  }

  handleSelectDelete = e => {
    const id = this.props.currentUser.vacancy.id;
    this.props.deleteVacancy(id);
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui two column stackable grid">
          <div className="rooms first header">
            <h1 className="display rooms">Potential Roommates</h1>
          </div>
          <div className="seven wide column">
            <RoommateCards selectView={this.selectView} />
          </div>
          <div className="one wide column">
          </div>
          <div className="eight wide column">
            <RoommateView currentAssociation={this.state.currentAssociation} handleSelectDelete={this.handleSelectDelete} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, actions)(RoommatesContainer);
