import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0",
    width: "100%",
    alignItems: "center",
  },
  textFeild: {
    width: "42.5%",
    margin: "0 10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "10px 0",
    },
  },
  button: {
    margin: "0 10px",
    width: "10%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "10px auto",
    },
  },
  icon: {
    paddingLeft: "10px",
  },
}));

function Form({ setId, setSemester, semesterList, getResult }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.textFeild}
        id="standard-basic"
        label="Student ID*"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <FormControl className={classes.textFeild}>
        <InputLabel htmlFor="grouped-select">Select Semester*</InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          onChange={(e) => {
            setSemester(e.target.value);
          }}
        >
          {semesterList &&
            semesterList.map((list) => (
              <MenuItem value={list.semesterId}>
                {list.semesterName} {list.semesterYear}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Button
        onClick={() => {
          getResult();
        }}
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Send <SendIcon className={classes.icon} />
      </Button>
    </form>
  );
}

export default Form;
