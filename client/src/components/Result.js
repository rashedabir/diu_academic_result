import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "20px 0",
    textAlign: "left",
    color: theme.palette.text.primary,
    marginBottom: "50px",
  },
  table: {
    minWidth: "100%",
  },
  text: {
    fontSize: "20px",
    fontWeight: "500",
  },
  text1: {
    fontSize: "17px",
    fontWeight: "500",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#234",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function Result({ result }) {
  const classes = useStyles();
  const total = result.map((res) => res.totalCredit);
  const credit = total
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <Paper className={classes.paper}>
      {result &&
        result.slice(0, 1).map((res) => (
          <h3 className={classes.text}>
            Academic Result of: {res.semesterName} {res.semesterYear}
          </h3>
        ))}
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Course Credit</StyledTableCell>
              <StyledTableCell align="left">Course Title</StyledTableCell>
              <StyledTableCell align="left">Credit</StyledTableCell>
              <StyledTableCell align="right">Grade</StyledTableCell>
              <StyledTableCell align="right">Grade Point</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result
              ? result.map((res) => (
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      {" "}
                      {res.customCourseId}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {res.courseTitle}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {res.totalCredit}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {res.pointEquivalent}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {res.gradeLetter}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      {result &&
        result.slice(0, 1).map((res) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <h3 className={classes.text1}>Total Credit : {credit}</h3>
            <h3 className={classes.text1}>SGPA : {res.cgpa}</h3>
          </div>
        ))}
    </Paper>
  );
}

export default Result;
