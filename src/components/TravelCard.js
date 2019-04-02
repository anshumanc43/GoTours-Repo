import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import {CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutline from '@material-ui/icons/addCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/removeCircleOutline';

const orientation = {
  Layout:{
      display: 'inlineFlex',
      direction: 'row',  
      alignItems: 'centre',
      justifyContent: 'centre',
      margin: '10px 20px'              
    }
  }
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },  
});

export class TravelCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
      
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
      
    });
  };

  

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} style={orientation.Layout}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} >
              {this.props.initial}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.name}
          subheader={this.props.place}
        />
        <CardMedia
          className={classes.media}
          image="./Images/1.jpg"
          title="Amazing Outdoors"
        />

        <CardContent>
          <Typography component="p">
            {this.props.desc}
          </Typography>
        </CardContent>
        
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="remove_circle_outline" onClick={this.increment}>
            <RemoveCircleOutline />
          </IconButton>
          <IconButton aria-label="add_circle_outline" onClick={this.decrement}>
            <AddCircleOutline />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

TravelCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TravelCard);