import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';


class Login extends React.Component {

  responseFacebook = (response) => {
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
                <h1>Sherl<i id="logo" className={`violet search icon`}></i>ck Homes</h1>
                <div className="title">
                  Find your new home!<br></br>
                  Search for your next roommate!
                </div>
                <FacebookLogin socialId={process.env.REACT_APP_FACEBOOK_APP_ID}
                               className="facebook-login-button"
                               language="en_US"
                               scope="public_profile,email,user_friends"
                               responseHandler={this.responseFacebook}
                               xfbml={true}
                               fields="id,email,name,picture.height(480),friends"
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
