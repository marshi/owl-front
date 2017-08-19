import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from "../TicketBackyardItem/TicketBackyardItem";
import Grid from "material-ui/Grid";
import TicketBackyardItem from "../TicketBackyardItem/TicketBackyardItem";

const callbacks = {

  drop(props, monitor, component) {
    const sourceProps = monitor.getItem();
    component.setState({ticketNode: <div><TicketBackyardItem primary={sourceProps.primary}/></div>})
  }

};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class TicketMapCell extends Component {

  constructor() {
    super();
    this.state = {};
    this.state.ticketNode = null;
  }

  render() {
    const { x, y, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div>
        <Grid key={this.props.key} item>
          <div className={this.props.classes}>{this.state.ticketNode}</div>
        </Grid>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TicketBackyardItem, callbacks, collect)(TicketMapCell);
