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
  console.log(self);
  console.log(self.state);
  const newItems = self.state.items.slice();
  console.log(newItems);
  _.pull(newItems, primary);
  console.log(newItems);
  self.setState({items: newItems});
  console.log("state");
  console.log(self.state);
}

class TicketList extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.state.items = ["Trash", "Item"];
    console.log("constructor")
  }

  render() {
    const connectDropTarget = this.props.connectDropTarget;
    console.log("render");
    console.log(this.state);
    console.log(this);
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
