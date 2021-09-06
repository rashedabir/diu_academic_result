import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ugc from "../assets/ugc.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "30px 0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  info: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  text: {
    fontSize: "18px",
    fontWeight: "500",
  },
  heading: {
    borderBottom: "2px solid #e6e6e6",
    paddingBottom: "10px",
  },
}));

function StudentInfo({ info }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container component={Paper} style={{ margin: "0" }}>
        <Grid item xs={12} xl={8} lg={8}>
          <div className={classes.info}>
            <h2 className={classes.heading}>Student Information</h2>
            <p className={classes.text}>
              <label style={{ color: "#888", marginRight: "20px" }}>
                Programe
              </label>{" "}
              {info.programName}
            </p>
            <h3 className={classes.text}>
              <label style={{ color: "#888", marginRight: "20px" }}>
                Name of Student
              </label>{" "}
              {info.studentName}
            </h3>
            <h3 className={classes.text}>
              <label style={{ color: "#888", marginRight: "20px" }}>
                Student ID
              </label>{" "}
              {info.studentId}
            </h3>
            <h3 className={classes.text}>
              <label style={{ color: "#888", marginRight: "20px" }}>
                Enrollment
              </label>{" "}
              {info.semesterName}
            </h3>
            <h3 className={classes.text}>
              <label style={{ color: "#888", marginRight: "20px" }}>
                Batch
              </label>{" "}
              {info.batchNo}
            </h3>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} xl={4}>
          <div className={classes.paper}>
            UGC Uniform Grading System
            <img src={ugc} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default StudentInfo;
