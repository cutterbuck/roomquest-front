import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import VacancyForm from './VacancyForm'
import RoomsContainer from './RoomsContainer'
import VacancyResults from './VacancyResults'
import * as actions from '../actions/index';
import { Route, Switch } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

class RoomQuestContainer extends React.Component {

  render() {

    console.log('vacancy?', !!this.props.currentUser.vacancy)
    return (

      <div>
        <NavBar />
        <div className="ui grid container">
          <Switch>
            <Route exact path="/app/add-vacancy" component={VacancyForm} />
            <Route exact path="/app/roommates-search" component={VacancyResults} />
            <Route exact path="/app/rooms-search" component={RoomsContainer} />
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

export default connect(mapStateToProps, actions)(withAuth(RoomQuestContainer));
