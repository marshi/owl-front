import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from "../TicketBackyardItem/TicketBackyardItem";
import Grid from "material-ui/Grid";

const squareTarget = {
  drop(props) {
    console.log("move");
    console.log(props.x + " " + props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class TicketMapCell extends Component {
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div>
        <Grid key={this.props.key} item>
          <div className={this.props.classes}>aiueo</div>
        </Grid>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TicketBackyardItem, squareTarget, collect)(TicketMapCell);
