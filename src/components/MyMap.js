import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Cards, Icons} from 'materialize-css';
// import { Grid, Row, Col } from 'react-flexbox-grid'; 
//import maps from google
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '90%',
  height: '50%',
  marginLeft: '50px'
};


export class MyMap extends Component {
  state={
  	showingInfoWindow: false, //hide or show Info Window
  	activeMarker: {}, // active marker upon click
  	selectedPlace: {} //show infoWindow
  };

  onMarkerClick = (props, marker, e) =>
  	this.setState({
  		selectedPlace: props,
  		activeMarker: marker,
  		showingInfoWindow: true
  	});
  	onClose = props => {
  		if (this.state.showingInfoWindow) {
  			this.setState({
  				showingInfoWindow: false,
  			  	activeMarker: null
  			});
  		}
  	}

  render(){    
      return(
        <div>
        	<Map
        		google={this.props.google}
        		zoom={14}
        		style={mapStyles}
        		initialCenter={{
        			lat: 40.674,
        			lng: -73.945
        		}}
        	 >
	        	 <Marker
	        	 	onClick={this.onMarkerClick}
	        	 	name={'Brooklyn'}
	        	 />
	        	 <InfoWindow
	        	 	marker={this.state.activeMarker}
	        	 	visible={this.state.showingInfoWindow}
	        	 	onClose={this.onClose}
	        	 >
	        	 	<div>
	        	 		<h4 className="">{this.state.selectedPlace.name}</h4>
	        	 	</div>
	        	 </InfoWindow>
        	</Map>
        </div>
        );
     }
}


export default GoogleApiWrapper({
	apiKey: 'AIzaSyAGT0miR5eQIqYeRk8PrUThza0OHUSI-ms'
})(MyMap);