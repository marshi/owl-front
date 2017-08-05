import * as React from "react";

export class FormLabel extends React.Component {

  render() {
    return (
      <label htmlFor={this.props.for}>{this.props.label}</label>
    );
  }

}
