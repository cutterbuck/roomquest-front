import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import VacancyForm from './VacancyForm'
import ShowRoommates from './ShowRoommates'
import * as actions from '../actions/index';
import { Route, Switch } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

class RoomQuestContainer extends React.Component {
  render() {

    return (
      <div>
        <NavBar />
        <div className="ui grid container">
          <Switch>
            <Route exact path="/app/add-vacancy" component={VacancyForm} />
            <Route exact path="/app/roommates-list" component={ShowRoommates} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentPosition: state.currentPosition
  }
}

export default connect(mapStateToProps, actions)(withAuth(RoomQuestContainer));   //wrap withAuth(RoomQuestContainer) here eventually
