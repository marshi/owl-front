import * as ReactDOM from "react-dom"
import * as React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TicketTable from "../organism/Table/TicketTable";

const store={
  TicketTable: {
    data: []
  }
};
ReactDOM.render(
  <MuiThemeProvider>
    <TicketTable store={store}/>
  </MuiThemeProvider>,
  document.getElementById("list")
);
