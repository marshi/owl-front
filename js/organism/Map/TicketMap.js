/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import {createStyleSheet, withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TicketMapCell from "../../molecule/Cell/TicketMapCell";

const styleSheet = createStyleSheet(theme => ({
  root: {
    // flexGrow: 1,
  },
  cell: {
    height: 130,
    width: 180,
    border: "solid 1px"
  }
}));

class TicketMap extends React.Component {

  constructor() {
    super();
    this.state = {
      spacing: '16',
    };
  }

  render() {
    const classes = this.props.classes;
    const row = 10;
    const column = 8;

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            {Array.from(new Array(row).keys()).map(row =>
              <Grid container wrap="nowrap" className={classes.demo} justify="center" spacing="0">
                {Array.from(new Array(column).keys()).map(value =>
                  <TicketMapCell key={value} classes={classes.cell} x={row} y={value}/>
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }


}

TicketMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TicketMap);
