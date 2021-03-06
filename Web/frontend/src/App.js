import React from "react";
import NavBar from "./Components/NavBar.jsx";
import { Register } from "./Screens/Register/Register";
import { Signin } from "./Screens/Signin/Signin";
import { Switch, Route } from "react-router-dom";
import { UnAuthHome } from "./Screens/Home/UnAuthHome.jsx";
import { AuthContext } from "./Context/AuthContext";
import { AuthHome } from "./Screens/Home/AuthHome.jsx";
import { Courses } from "./Screens/Courses/Courses.jsx";
import { ErrorPage } from "./Screens/ErrorPage";
import { Workshop } from "./Screens/Workshop/Workshop.jsx";
import { Conferences } from "./Screens/Conferences/Conferences.jsx";
import Profile from "./Screens/Profile/Profile.jsx";
import "./App.css";

function App() {
  const { isAuthenticated } = React.useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/signin" exact>
          <Signin />
        </Route>

        {isAuthenticated
          ? (<Route path="/" exact>
            <AuthHome />
          </Route>)
          : (<Route path="/" exact>
            <UnAuthHome />
          </Route>)}

        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/workshops" exact>
          <Workshop />
        </Route>
        <Route path="/conferences" exact>
          <Conferences />
        </Route>

        {/* Authenticated Routes */}
        {isAuthenticated
          ? (<Route path="/profile">
            <Profile />
          </Route>)
          : (<Route>
            <ErrorPage />
          </Route>)}

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
