import * as React from "react";

import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
}));

class TicketList extends React.Component {

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root} style={this.props.style}>
        <List>
          <ListItem button>
            <ListItemText primary="Trash"/>
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam"/>
          </ListItem>
        </List>
      </div>
    );
  }
}

TicketList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TicketList);
