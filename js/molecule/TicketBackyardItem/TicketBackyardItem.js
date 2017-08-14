import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import {ListItem, ListItemText} from "material-ui/List/index";

const ticketBackyardItemSource = {
  beginDrag(props) {
    return {};
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
  render() {
    const { connectDragSource, isDragging } = this.props;
    const primary = this.props.primary;
    return connectDragSource(
      <div>
        <ListItem>
          <ListItemText primary={primary}/>
        </ListItem>
      </div>
    );
  }
}

TicketBackyardItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TicketBackyardItem, ticketBackyardItemSource, collect)(TicketBackyardItem);
