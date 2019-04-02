import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import Particles from 'react-particles-js';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils/helpers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  Layout:{
    display: 'flex',
    height: '100%',
    width: '100%',    
    position: 'fixed',    
    alignItems: 'center',
    justifyContent: 'center',    
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection:'column'
  },  

}



export default class Home extends Component {  
	render()
	{
		return(
    <div>     
       <main >          
        <div style={styles.Layout}>
          <Typography component="h2" variant="h1" color='secondary' >
            GoTours
          </Typography>
          <div style={{order:'1'}}>
            <Button color="secondary" component={Link} to="/travel" size="medium">
              Travel 
            </Button>
            <Button color="secondary" component={Link} to="/login" size="medium">
              About Us
            </Button>           
          </div>
        </div>                                             
      </main>  
    </div>
    
                
		);
	}
}