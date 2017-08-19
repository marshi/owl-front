import React from "react";
import DefaultRaisedButton from "../../atom/Button/Buttons"
import TextField from "../../../node_modules/material-ui/TextField/TextField";
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TicketPost from '../../api/TicketPost'

const styleSheet = createStyleSheet(theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
}));

class TicketForm extends React.Component {

  render() {
    const classes = this.props.classes;
    return (
      <form onSubmit={() => TicketPost("http://localhost:8080/tickets", {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        projectId: 1,
      })}>
        <div>
          <TextField
            id="title"
            name="title"
            label="タイトル"
            InputProps={{ placeholder: 'タイトル' }}
            margin="normal"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            id="content"
            name="content"
            label="チケット内容"
            InputProps={{ placeholder: 'チケット内容' }}
            margin="normal"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            id="projectName"
            name="projectName"
            label="プロジェクト名"
            InputProps={{ placeholder: 'プロジェクト名' }}
            margin="normal"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            id="assignee"
            name="assignee"
            label="担当者"
            InputProps={{ placeholder: 'assignee' }}
            margin="normal"
            className={classes.textField}
          />
        </div>
        <DefaultRaisedButton type="submit" text="登録"/>
      </form>
    );
  }

}

export default withStyles(styleSheet)(TicketForm);
