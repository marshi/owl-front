import ReactDOM from "react-dom"
import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TicketTable from "../organism/Table/TicketTable";

ReactDOM.render(
  <MuiThemeProvider>
    <TicketTable/>
  </MuiThemeProvider>,
  document.getElementById("list")
);
