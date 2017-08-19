import * as React from "react";
import TicketBackyardItem, {ItemTypes} from "../TicketBackyardItem/TicketBackyardItem";
import {DropTarget} from 'react-dnd';


const callBacks = {
  drop(props, monitor, component) {
    const sourceProps = monitor.getItem();
    component.setState({
      ticketNode: <div><TicketBackyardItem primary={sourceProps.primary} /></div>
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class TicketListCell extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.ticketNode = <div><TicketBackyardItem primary={props.primary} /></div>;
  }

  render() {
    const primary = this.props.primary;
    return this.props.connectDropTarget(
      <div>
        {this.state.ticketNode}
      </div>
    );
  }

}

export default DropTarget(ItemTypes.TicketBackyardItem, callBacks, collect)(TicketListCell);
