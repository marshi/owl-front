import * as React from "react";
import TaskList from "../../organism/List/TicketList";
import TicketMap from "../../organism/Map/TicketMap";

export default class TicketMapTemplate extends React.Component {

  constructor() {
    super();
    this.style = {
      container: {
        display: "flex",
        flexDirection: "row"
      },
      taskList: {
        height: 100,
        width: 200
      }
    };
  }

  render() {
    return (
      <div style={this.style.container}>
        <TaskList style={this.style.taskList}/>
        <TicketMap/>
      </div>
    );
  }

}
