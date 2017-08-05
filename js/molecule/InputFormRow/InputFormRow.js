import * as React from "react";
import {FormLabel} from "../../atom/FormLabel/FormLabel";
import {FormInput} from "../../atom/FormInput/FormInput";

export class InputFormRow extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <FormLabel for={name} label={this.props.label}/>
        <FormInput name={name}/>
      </div>
    );
  }
}
