import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ProjectsPage from "./pages/Projects";
import Navbar from "./components/Navbar";
import "./App.css";

const useStyles = ({}) =>
  makeStyles(() => ({
    root: {
      backgroundColor: "#F4F7FC",
      minHeight: "100vh",
    },
  }));

const App = () => {
  const classes = useStyles({})();

  return (
    <div className={classes.root}>
      <Navbar />
      <ProjectsPage />
      <p className="cp-text">
    © Copyright 2021 <a href="https://github.com/rj-robinjoseph" target="_blank" style={{textDecoration: 'none'}} >Robin Joseph</a>. All rights reserved.
      </p>
    </div>
  );
};

export default App;