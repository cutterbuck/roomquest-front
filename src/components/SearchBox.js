import React from 'react';
import ReactDOM from 'react-dom';
const google = window.google;


class SearchBox extends React.Component {
  
  render() {
    return <input ref="input" {...this.props} type="text" placeholder="Search For a New Home"/>;
  }

  onPlacesChanged = () => {
    this.props.updateSearchCenter(this.searchBox.getPlaces());
  }

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.searchBox);
  }
}


export default SearchBox;
