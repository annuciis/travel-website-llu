import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { SideBar } from "../components/SideBar";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { WebPages } from "../pages/WebPages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
  },
});

export const App = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <NavBar handleDrawerToggle={handleDrawerToggle} />
        <SideBar handleDrawerToggle={handleDrawerToggle} isOpen={isOpen} />
        <WebPages />
        <Footer />
      </Router>
    </div>
  );
};
