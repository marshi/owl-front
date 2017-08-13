import * as ReactDOM from "react-dom"
import * as React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TicketMap from "../organism/Map/TicketMap";

ReactDOM.render(
  <MuiThemeProvider>
    <TicketMap/>
  </MuiThemeProvider>,
  document.getElementById("map")
);
