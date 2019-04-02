import React, { Component } from "react";
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';
// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// const styles = {
//     Layout:{
//       width: '100%',
//       flexGrow: 1,    
//       // position: 'fixed',      
//       padding: 5
//     }   
//   }
const cart = <FontAwesomeIcon icon={faShoppingCart} />
  
class Appbar extends Component {
  renderContent(){
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button color="inherit" href="/auth/google" >Login</Button>
          );
      default:
        return (
          <Button color="inherit" href="/api/logout" >Logout</Button>
          );
    }
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" component={Link} to="/">
              GoTours
            </Typography>
            {cart}
            {this.renderContent()}
            <Button color="inherit" component={Link} to="/SmartTravel" >Smart Travel</Button>


            

          </Toolbar>
        </AppBar>
      </div>
      )
  }
}

function mapStateToProps({ auth }) {
  return {
    auth: auth
  };
}

export default connect(mapStateToProps)(Appbar);


