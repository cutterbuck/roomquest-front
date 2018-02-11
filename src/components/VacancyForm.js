import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class VacancyForm extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       address: '',
       aptNum: '',
       city: '',
       state: '',
       zipcode: '',
       description: '',
       phone: '',
       lat: null,
       lng: null,
       email: props.currentUser.email
     }
   }

   handleSubmit = e => {
      const data = this.state
      const address = `${this.state.address.split(' ').join('+')}+${this.state.city.split(' ').join('+')}+${this.state.state}+${this.state.zipcode}`

      this.props.getVacancyGeoLocation(address).then(resp => {
        const lat = resp.results[0].geometry.location.lat;
        const lng = resp.results[0].geometry.location.lng;
        const coords = {lat: lat, lng: lng};
        return coords
      }).then(coords => {
        data.lat = coords.lat
        data.lng = coords.lng
        return data
      }).then(data => {
        this.props.postVacancy(data);
        this.props.history.push("/roommates-search")
      })
  }

   handleChange = e => {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

  render() {
    console.log(this.props.currentUser)
    return (
      <form className="ui form">
        <div className="ui grid container">
          <div className="ui two column stackable grid">
            <h1>Post a Vacancy</h1>
                <div className="column">
                  <div className="parent div">
                    <h4 className="ui dividing header">Apartment Information</h4>
                    <div className="field">
                      <label>Address</label>
                        <div className="fields">
                          <div className="twelve wide field">
                            <input onChange={this.handleChange} type="text" name="address" placeholder="Street Address"/>
                          </div>
                          <div className="four wide field">
                            <input onChange={this.handleChange} type="text" name="aptNum" placeholder="Apt #"/>
                          </div>
                        </div>
                    </div>

                    <div className="two fields">
                      <div className="field">
                        <label>City</label>
                        <input onChange={this.handleChange} type="text" name="city" placeholder="City"/>
                      </div>
                      <div className="field">
                        <label>State</label>
                        <select onChange={this.handleChange} name="state" className="ui fluid dropdown">
                          <option value="">State</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                      </div>
                    </div>

                    <div className="field">
                      <label>Zip Code</label>
                      <input onChange={this.handleChange} type="text" name="zipcode" placeholder="Zip Code"/>
                    </div>

                    <div className="field">
                      <label>Description</label>
                      <textarea name="description" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="ui button" onClick={this.handleSubmit} tabIndex="0">Submit Vacancy</div>
                  </div>
                </div>


              <div className="column">
                <div className="second parent div">
                  <h4 className="ui dividing header">Contact Information</h4>
                  <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                      <div className="field">
                        <p>{this.props.currentUser.name.split(" ")[0]}</p>
                      </div>
                      <div className="field">
                        <p>{this.props.currentUser.name.split(" ")[1]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label>Email</label>
                      <div className="field">
                        <p>{this.props.currentUser.email}</p>
                      </div>
                  </div>

                  <div className="field">
                    <label>Phone Number</label>
                      <div className="field">

                          <div className="field">
                            <input name="phone" onChange={this.handleChange} type="text" placeholder="(xxx) xxx-xxxx"/>
                          </div>

                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, actions)(VacancyForm);
