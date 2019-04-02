//React
import React, { Component } from "react";
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import {connect} from 'react-redux';

//App.js
import App from './components/App';

//MaterialUI
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

import {blue, blueGrey} from '@material-ui/core/colors'


// import particlesOptions from './components/particlesOptions';
import Particles from 'react-particles-js';

//Reducer

// import * as actions from '../actions';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const styles = {
  particles:{
    position: 'fixed',
    top: '0',
    bottom: '0',
    left:'0',
    right: '0',
    zIndex: '-1'
  }
}
  
const particlesOptions = {
      "particles": {
          "number": {
              "value": 90
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }    
  } 

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main:'#000',
        contrastText: '#fff',
      },
      secondary: {
        main: '#fff',

      }
    },
   typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
    useNextVariants: true,
  }   
  })




ReactDOM.render(
  <MuiThemeProvider theme={theme} >    
    <div>            
        <Provider store={store}>
          <App />
        </Provider>
        <Particles params={particlesOptions} style={styles.particles}/>               
    </div>

  </MuiThemeProvider>
  ,
  document.getElementById('app')
);


module.hot.accept();