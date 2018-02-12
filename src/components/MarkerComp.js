import React from 'react';


class MarkerComp extends React.Component {
  render() {
    return (
      <i className={`big violet basic home icon`} name={this.props.marker.address} onClick={this.props.handleMarkerClick}/>
    );
  }
}


export default MarkerComp;
