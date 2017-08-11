import React from 'react';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
  button: {
    margin: theme.spacing.unit,
  }
}));

export class DefaultRaisedButton extends React.Component {
  render() {
    let type = this.props.type;
    let text = this.props.text;
    return (
      <Button raised type={type} classes={this.props.classes.button}>{text}</Button>
    );
  }
}

export default withStyles(styleSheet)(DefaultRaisedButton);
