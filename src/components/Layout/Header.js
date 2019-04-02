import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, withStyles, AppBar, Toolbar } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const styles = {
	  Layout:{
	    height: '100%',
	    width: '100%',
	    display: 'flex',
	    // position: 'fixed',
	    flexDirection: 'row',
	    justifyContent: 'space-around',
	    flexWrap: 'wrap',
	    padding: 5
	  }		
	}

export default class Header extends Component {

	render()
	{
		return(
		<Router>
		<div>
			<header>		
			<div style={styles.Layout} >      
		      <Button color="primary" size="medium" eventKey={1} componentClass={Link} href="/" to="/" >
		        Home
		      </Button>
		      <Button color="primary" size="medium" eventKey={1} componentClass={Link} href="/about" to="/about" >
		        About Us
		      </Button>
		      <Button color="primary" size="medium" eventKey={1} componentClass={Link} href="/packs" to="/packs" >
		        Packs
		      </Button>
		      <Button color="primary" size="medium" eventKey={1} componentClass={Link} href="/contacts" to="/contacts" >
		        Contact Us
		      </Button>	
			</div>
			</header>
		</div>
		</Router>	      	 	      			      
		);
	}
}


	
