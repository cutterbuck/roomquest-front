import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class Thanks extends React.Component {

  handleClick = () => {
    this.props.history.push("/home")
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui one column grid">
          <div className="first header">
            <h1 className="thanks">Thank you for using to Sherlock Homes, {this.props.currentUser.name.split(" ")[0]}</h1>
            <p>We are thrilled that we could help you find your next roommate!</p>
            <div className="ui medium image">
              <img src="../images/sherlock-thanks-you.jpg" />
            </div>
            <div>
              <button className="ui violet button" onClick={this.handleClick} >Back to Home page</button>
            </div>
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


export default withRouter(connect(mapStateToProps, null)(Thanks));
