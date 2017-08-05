import * as React from "react";

export class FormSubmit extends React.Component {

  render() {
    return (
      <input type="button" value={this.props.value} onClick={this.props.onSubmit}/>
    );
  }

}
