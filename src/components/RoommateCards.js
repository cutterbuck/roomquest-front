import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class RoommateCards extends React.Component {
  
  render() {
    return (
      <div class="ui fluid cards">
        {this.props.currentUser.associations_without_rooms.map((awr, i) => {
          return (
            <a className="ui fluid card" key={i} onClick={() => this.props.selectView(awr)}>
              <div className="content">
                <h3 className="ui header">{awr.name}</h3>
              </div>
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
