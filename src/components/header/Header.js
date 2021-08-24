import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

import "./header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            EMS
          </Typography>
          <Button color="inherit" onClick={() => history.push("/home")}>
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => history.push("/employees-list")}
          >
            Employees
          </Button>
          <Button
            color="inherit"
            onClick={() => history.push("/projects-list")}
          >
            Projects
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
