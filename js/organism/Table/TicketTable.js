import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TicketFetch from '../../api/TicketFetch';

const styleSheet = createStyleSheet(theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

class TicketTable extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
    this.fetch();
  }

  render() {
    const classes = this.props.classes;
    const data = this.state.data;
    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell>内容</TableCell>
              <TableCell>プロジェクト名</TableCell>
              <TableCell>担当者</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>
                    {n.title}
                  </TableCell>
                  <TableCell>
                    {n.content}
                  </TableCell>
                  <TableCell>
                    {n.projectName}
                  </TableCell>
                  <TableCell>
                    {n.assignee}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  fetch() {
    TicketFetch((models) => {
      this.setState({data: models});
    });
  }

}

TicketTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
  })).isRequired
};

export default withStyles(styleSheet)(TicketTable);
