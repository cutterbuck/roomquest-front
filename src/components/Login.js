import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
// import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';


class Login extends React.Component {

  responseFacebook = (response) => {
    console.log('------------------------------------');
    console.log('TOTAL RESPONSE:', response);
    console.log('friends that use this app:', response.friends.data)
    const history = this.props.history
    this.props.loginUser(response, history);
    history.push("/home");
  }

  render () {
    return (
      <div>
        <div className="background">
        </div>
        <div className="login-style">
          <div className="ui middle aligned center aligned grid">
            <div id="login-column" className="column">
              <div className="ui gray image header">
                <h1>RoomQuest</h1>
                <div className="title">
                  Find your new home!<br></br>
                  Search for your next roommate!
                </div>
                <FacebookLogin socialId='1824814727815715'    //{ENV["FACEBOOK_APP_ID"]}
                               className="facebook-login-button"
                               language="en_US"
                               scope="public_profile,email,user_friends"
                               responseHandler={this.responseFacebook}
                               xfbml={true}
                               fields="id,email,name,picture,friends"
                               version="v2.12"
                               buttonText="Login With Facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), actions)(Login);
