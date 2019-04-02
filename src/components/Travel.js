import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core';
// import {Cards, Icons} from 'materialize-css';
import TravelCard from './TravelCard'; 
import { Grid, Row, Col } from 'react-flexbox-grid'; 


// const travel = {
//   name:
// }

export default class Travel extends Component {

  render(){    
      return(
        <div>
        <Row xs={2} md={3} xl={4}>

              <TravelCard name='Amazing Outdoors' initial='A' place= 'West Virginia' desc= "Roadtrips, Barbecues and The Ocean. Our wide range of activites and hotels to pick from offers a choice for every person!" />
              <TravelCard name='Tropical Sunshine' initial='T' place= 'Chicago' desc= "Beaches, Lakes and Resorts. Eat like a King and sleep like a log, a must for your burned out self!" />
              <TravelCard name='Coldest Winter Chill' initial='C' place= 'Minnesota' desc= "Let it snow, Let it snow, Let it snow! Nothing beats a winter vacation" />
              <TravelCard name='Magical Wonders' initial='M' place= 'East Coast' desc= "Sights too mystical to believe and experiences too mesmerizing to be real." />
              <TravelCard name='Outdoor Adventures' initial='O' place= 'Vancouver' desc= "Adrenaline packed action! Treks, Water Sports, Paragliding and more!" />

        </Row>
        </div>
        )
  }
}


