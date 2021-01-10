import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 650,
  },
});

function DataTable({ data }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const convertBoolean = (bool) => (bool === true ? 'Y' : 'N');

  return (
    <Paper className={classes.root}>
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((crime) => (
                <TableRow key={crime.id}>
                  <TableCell component='th' scope='row'>
                    {crime.year}
                  </TableCell>
                  <TableCell align='right'>{crime.date}</TableCell>
                  <TableCell align='right'>{crime.district}</TableCell>
                  <TableCell align='right'>{crime.description}</TableCell>
                  <TableCell align='right'>
                    {crime.location_description}
                  </TableCell>
                  <TableCell align='right'>{crime.ward}</TableCell>
                  <TableCell align='right'>
                    {convertBoolean(crime.domestic)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

DataTable.propTypes = {
  data: PropTypes.array,
};

DataTable.defaultProps = {
  data: [],
};

export default DataTable;
