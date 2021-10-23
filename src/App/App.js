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
    position: "relative",
  },
});

export const App = () => {
  const classes = useStyles();
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);

  const handleDrawerToggle = () => {
    setisSideBarOpen(!isSideBarOpen);
  };

  const handleFavoritesOpen = () => {
    if (!window.location.href.includes("tour")) {
      setIsFavOpen(false);
      return;
    }
    setIsFavOpen(!isFavOpen);
  };

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <NavBar
          handleDrawerToggle={handleDrawerToggle}
          handleFavoritesOpen={handleFavoritesOpen}
        />
        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          isSideBarOpen={isSideBarOpen}
        />
        <WebPages favoritesState={isFavOpen} />
        <Footer />
      </Router>
    </div>
  );
};
