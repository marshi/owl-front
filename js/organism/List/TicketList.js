import React from "react";

import PropTypes from 'prop-types';
import {createStyleSheet, withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import TicketBackyardItem from '../../molecule/TicketBackyardItem/TicketBackyardItem';

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
          <TicketBackyardItem primary="Trash"/>
          <TicketBackyardItem primary="Item"/>
        </List>
      </div>
    );
  }
}

TicketList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TicketList);
