import React from 'react';

 class VacancyForm extends React.Component {

  render() {
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
                      <input type="text" name="address[address]" placeholder="Street Address"/>
                    </div>
                    <div className="four wide field">
                      <input type="text" name="address[address-2]" placeholder="Apt #"/>
                    </div>
                  </div>
              </div>

              <div className="two fields">
                <div className="field">
                  <label>State</label>
                  <select className="ui fluid dropdown">
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
              <div className="field">
                <label>Zip Code</label>
                <input type="text" name="address[zip-code]" placeholder="Zip Code"/>
              </div>
            </div>

              <div className="field">
                <label>Description</label>
                <textarea></textarea>
              </div>

              <div className="ui button" tabIndex="0">Submit Vacancy</div>
            </div>
          </div>


              <div className="column">
                <div className="second parent div">
                  <h4 className="ui dividing header">Contact Information</h4>
                  <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                      <div className="field">
                        <input type="text" name="first-name" placeholder="First Name"/>
                      </div>
                      <div className="field">
                        <input type="text" name="last-name" placeholder="Last Name"/>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label>Email</label>
                      <div className="field">
                        <input type="text" placeholder="Email"/>
                      </div>
                  </div>

                  <div className="field">
                    <label>Phone Number</label>
                      <div className="three fields">
                        <div className="field">
                          <input type="text" placeholder="(xxx)"/>
                        </div>
                        <div className="field">
                          <input type="text" placeholder="xxx"/>
                        </div>
                        <div className="field">
                          <input type="text" placeholder="xxxx"/>
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

export default VacancyForm;
