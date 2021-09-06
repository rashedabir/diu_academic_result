import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  heading: {
    margin: "auto",
  },
  main: {
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  },
}));

function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.main}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.heading} color="inherit">
            DIU Academic Result
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;
