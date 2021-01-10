import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataTable({ data }) {
  const classes = useStyles();
  const convertBoolean = (bool) => (bool === true ? 'Y' : 'N');
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell align='right'>Date</TableCell>
            <TableCell align='right'>District</TableCell>
            <TableCell align='right'>Description</TableCell>
            <TableCell align='right'>Location Info</TableCell>
            <TableCell align='right'>Ward</TableCell>
            <TableCell align='right'>Domestic (Y/N)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((crime) => (
            <TableRow key={crime.id}>
              <TableCell component='th' scope='row'>
                {crime.year}
              </TableCell>
              <TableCell align='right'>{crime.date}</TableCell>
              <TableCell align='right'>{crime.district}</TableCell>
              <TableCell align='right'>{crime.description}</TableCell>
              <TableCell align='right'>{crime.location_description}</TableCell>
              <TableCell align='right'>{crime.ward}</TableCell>
              <TableCell align='right'>
                {convertBoolean(crime.domestic)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DataTable.propTypes = {
  data: PropTypes.array,
};

DataTable.defaultProps = {
  data: [],
};

export default DataTable;
