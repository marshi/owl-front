import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import {ListItem, ListItemText} from "material-ui/List/index";

const callbacks = {
  beginDrag(props) {
    return {
      primary: props.primary
    };
  },

  endDrag(props, monitor, component) {
    props.removeFun(props.primary);
  }

};

export const ItemTypes = {
  TicketBackyardItem: 'ticketBackyardItem'
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class TicketBackyardItem extends Component {

  constructor(props) {
    super();
  }

  render() {
    return this.props.connectDragSource(
      <div>
        <ListItem>
          <ListItemText primary={this.props.primary}/>
        </ListItem>
      </div>
    );
  }

}

TicketBackyardItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  removeFun: PropTypes.func.isRequired
};

export default DragSource(ItemTypes.TicketBackyardItem, callbacks, collect)(TicketBackyardItem);
