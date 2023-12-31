import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { NavBar, Movies, Actors, MovieInformation, Profile } from "./index";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.tooolbar}>
          <Routes>
            <Route exact path="/" element={<Movies />}></Route>
            <Route
              exact
              path="/movie/:id"
              element={<MovieInformation />}
            ></Route>
            <Route exact path="/actors/:id" element={<Actors />}></Route>
            <Route exact path="/profile/:id" element={<Profile />}></Route>
            <Route exact path="about" element={"About"} />
          </Routes>
        </div>
      </main>
      hi🙂
    </div>
  );
};

export default App;
