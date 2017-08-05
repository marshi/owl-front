import * as React from "react";

export class FormInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const name = this.props.name;
    return (
      <input type="text" name={name} value={this.state[name]} onChange={this.onChange}/>
    );
  }

}