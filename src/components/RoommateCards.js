import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';

class RoommateCards extends React.Component {
  render() {
    return (
      <div class="ui cards">
        {this.props.currentUser.associations_without_rooms.map((awr, i) => {
          const userSlug = awr.name.split(" ").join("-")
          return (
            <a className="card">
              <Link to={`/app/roommates/${userSlug}`}>
                <div className="content">
                  <h3 className="ui header">{awr.name}</h3>
                  <div className="meta">{awr.email}</div>
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

export default connect(mapStateToProps, actions)(RoommateCards);
