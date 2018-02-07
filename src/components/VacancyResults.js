import React from 'react';

class VacancyResults extends React.Component {

  render() {
    return (
      <div className="ui grid container">
          <div className="ui two column stackable grid">
            <div className="column">
              <div>
                <h1>List user cards</h1>
              </div>
            </div>

            <div className="column">
              <div>
                <h1>Details of card go here</h1>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default VacancyResults;
