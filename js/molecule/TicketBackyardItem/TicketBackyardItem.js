import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import {ListItem, ListItemText} from "material-ui/List/index";

const ticketBackyardItemSource = {
  beginDrag(props) {
    return {
      primary: props.primary
    };
  },

  endDrag(props, monitor, component) {
    console.log("monitor");
    console.log(component);
    component.setState({node: null});
    return {iii: "aiueo"};
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
    this.state = {};
    this.state.node =
      props.connectDragSource(
        <div>
          <ListItem>
            <ListItemText primary={props.primary}/>
          </ListItem>
        </div>
      )
    ;
  }

  render() {
    return this.state.node;
  }

}

TicketBackyardItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TicketBackyardItem, ticketBackyardItemSource, collect)(TicketBackyardItem);
