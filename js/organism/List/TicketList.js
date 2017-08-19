import React from "react";

import PropTypes from 'prop-types';
import {createStyleSheet, withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import TicketBackyardItem, {ItemTypes} from '../../molecule/TicketBackyardItem/TicketBackyardItem';
import {DropTarget} from 'react-dnd';
import _ from 'lodash';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
}));

const callbacks = {

  drop(props, monitor, component) {
    const sourceProps = monitor.getItem();
    const newItems = component.state.items.slice();
    newItems.push(sourceProps.primary);
    component.setState({
      items: newItems
    });
  }

};

function collect(connet, monitor) {
  return {
    connectDropTarget: connet.dropTarget()
  }
}

function removeFun(self, primary) {
  const newItems = self.state.items.slice();
  _.pull(newItems, primary);
  self.setState({items: newItems});
}

class TicketList extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.state.items = ["Trash", "Item"];
  }

  render() {
    const connectDropTarget = this.props.connectDropTarget;
    const self = this;

    return connectDropTarget(
      <div style={this.props.style}>
        <List>
          {
            this.state.items.map(item => {
              return <TicketBackyardItem primary={item} removeFun={removeFun.bind(null, self)}/>
            })
          }
        </List>
      </div>
    );
  }
}

TicketList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DropTarget(ItemTypes.TicketBackyardItem, callbacks, collect)(TicketList);
