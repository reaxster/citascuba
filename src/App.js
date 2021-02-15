import "./App.css";
import React, { Suspense, useState, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//@COMPONENTS AND PAGE IMPORTS
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import InterviewSummary from "./pages/InterviewSummary";
import DisclosurePage from "./pages/DisclosurePage";
import News from "./pages/News";
//import Test from "./pages/Test";
import Admin_EditCases from "./components/ADMIN/pages/AdminEditCasesPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminMainPage from "./components/ADMIN/pages/AdminMainPage";

import Test from "./pages/Test";

import { AuthContext } from "./contexs/useAuthContext";

//import AdminPageContainer from "./components/ADMIN/admin_components/AdminPageContainer";

/*const FormPage = React.lazy(() => import("./pages/FormPage"));
const TablePage = React.lazy(() => import("./pages/TablePage"));
const InterviewSummary = React.lazy(() => import("./pages/InterviewSummary"));
const DisclosurePage = React.lazy(() => import("./pages/DisclosurePage"));
const News = React.lazy(() => import("./pages/News"));*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserinfo] = useState({});

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact path="/admin">
          <AdminMainPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
        <Route exact path="/table">
          <TablePage />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/interviewsummary">
          <InterviewSummary />
        </Route>
        <Route exact path="/disclosure">
          <DisclosurePage />
        </Route>
        <Redirect to="/admin" />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
        <Route exact path="/table">
          <TablePage />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/interviewsummary">
          <InterviewSummary />
        </Route>
        <Route exact path="/disclosure">
          <DisclosurePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Redirect to="/" />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        userInfo: userInfo,
        setUserinfo: setUserinfo,
      }}
    >
      <div className="App">
        <Header />
        <Suspense fallback={<Loading />}>
          <Switch>{routes}</Switch>
        </Suspense>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
