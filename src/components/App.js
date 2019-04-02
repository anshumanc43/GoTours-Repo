//React
import React, { Component } from "react";
import ReactDOM from 'react-dom';
//Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, Switch } from 'react-router-dom';
//React-Flexbox-Grid
import { Grid, Row, Col } from 'react-flexbox-grid';

//Component
import Appbar from "./Appbar";
import Header from "./Layout/Header";
import Home from './Home';
import Travel from './Travel';
import SmartTravel from './SmartTravel';
import Login from "./Login";
import Register from "./Register";

import CssBaseline from '@material-ui/core/CssBaseline';

import {connect} from 'react-redux';
import * as actions from '../actions';
//maybenot
// import reducers from './reducers';

class App extends Component{

	componentDidMount() {
		this.props.fetchUser();
	}

	render(){
		return(
		    <Router>
		    <div>
		      <React.Fragment> 
		        <CssBaseline />
		          <Grid fluid>
		         
		                <Appbar/>                
		         
		            <Switch>        
		                <Route exact path="/" component={Home} />                                                           
		                <Route path="/Travel" component={Travel} />
		                <Route path="/SmartTravel" component={SmartTravel} /> 
		                <Route path="/login" exact component={Login} />
		                <Route path="/register" exact component={Register} />
		                        
		                {/*<Route render={ () => <h3>Error 404</h3> } />*/}
		          
		            </Switch>
		          </Grid>                                           
		      </React.Fragment>    
		    </div>
		    </Router>   
			)
	}

}

export default connect(null, actions)(App);