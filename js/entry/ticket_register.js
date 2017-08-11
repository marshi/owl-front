import * as ReactDOM from "react-dom"
import * as React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TicketForm from '../organism/Form/TicketForm'

ReactDOM.render(
  <MuiThemeProvider>
    <TicketForm/>
  </MuiThemeProvider>,
  document.getElementById("register")
);
