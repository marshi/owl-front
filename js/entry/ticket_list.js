import * as ReactDOM from "react-dom"
import * as React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Example from '../organism/Table/ExampleTable'


ReactDOM.render(
    <MuiThemeProvider>
        <Example />
    </MuiThemeProvider>,
    document.getElementById("list")
);
