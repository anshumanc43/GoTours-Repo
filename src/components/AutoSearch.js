import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
// import MyMap from './MyMap';
// import { Typography } from '@material-ui/core';
// import {Cards, Icons} from 'materialize-css';
// import { Grid, Row, Col } from 'react-flexbox-grid'; 
//import maps from google
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '50%'
};


class SmartTravel extends Component {
 // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }

  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }
  
  handlePlaceSelect() {

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGT0miR5eQIqYeRk8PrUThza0OHUSI-ms&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar id="autocomplete" placeholder="" hintText="Search City" value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </div>
    );
  }
}

export default SmartTravel;
// export default GoogleApiWrapper({
//  apiKey: 'AIzaSyAGT0miR5eQIqYeRk8PrUThza0OHUSI-ms'
// })(Travel);