import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
// import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';


class Login extends React.Component {

  responseFacebook = (response) => {
    console.log('TOTAL RESPONSE:', response);
    console.log('friends that use this app:', response.friends.data)
    const history = this.props.history
    this.props.loginUser(response, history);
    history.push("/home");
  }

  render () {
    return (
      <div>
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
    );
  }
}

export default connect(() => ({}), actions)(Login);
