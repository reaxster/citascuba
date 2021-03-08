import "./App.css";
import React, { Suspense, useState, useCallback, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MDBIcon, MDBCol } from "mdbreact";

//@COMPONENTS AND PAGE IMPORTS
import Header from "./components/partials/Header";
import HomePage from "./pages/HomePage";
import Loading from "./components/loading/Loading";
import Footer from "./components/partials/Footer";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import InterviewSummary from "./pages/InterviewSummary";
import DisclosurePage from "./pages/DisclosurePage";
import NewsPage from "./pages/NewsPage";

//ADMIN PAGES
import Admin_EditCases from "./components/ADMIN/pages/AdminEditCasesPage";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import AdminMainPage from "./components/ADMIN/pages/AdminMainPage";

import Test from "./pages/Test";

import { AuthContext } from "./contexs/useAuthContext";
import { useAuthHook } from "./hooks/useAuthHook";
import Contact from "./pages/Contact";

//import AdminPageContainer from "./components/ADMIN/admin_components/AdminPageContainer";

/*const FormPage = React.lazy(() => import("./pages/FormPage"));
const TablePage = React.lazy(() => import("./pages/TablePage"));
const InterviewSummary = React.lazy(() => import("./pages/InterviewSummary"));
const DisclosurePage = React.lazy(() => import("./pages/DisclosurePage"));
const News = React.lazy(() => import("./pages/News"));*/

function App() {
  const { token, login, logout, userId } = useAuthHook();

  let routes;
  if (!!token) {
    routes = (
      <React.Fragment>
        <Switch>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/managecases">
            <Admin_EditCases />
          </Route>
          <Route exact path="/admin">
            <AdminMainPage />
          </Route>
          <Route exact path="/login">
            <AdminMainPage />
          </Route>

          <Route exact path="/form">
            <FormPage />
          </Route>
          <Route exact path="/table">
            <TablePage />
          </Route>
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route exact path="/interviewsummary">
            <InterviewSummary />
          </Route>
          <Route exact path="/disclosure">
            <DisclosurePage />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Switch>
          <Route exact path="/form">
            <FormPage />
          </Route>
          <Route exact path="/table">
            <TablePage />
          </Route>
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route exact path="/interviewsummary">
            <InterviewSummary />
          </Route>
          <Route exact path="/disclosure">
            <DisclosurePage />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        {/* <Redirect to="/" />*/}
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
        userId: userId,
      }}
    >
      <div className="App">
        <Header />
        <Suspense fallback={<Loading />}>
          <div
            className="my-5 py-5 d-flex flex-column flex-md-row"
            style={{ background: "#ff2440" }}
          >
            <MDBCol size="1" className="d-flex">
              <MDBIcon
                icon="cog"
                spin
                style={{ fontSize: 100, color: "white" }}
              />
              <MDBIcon icon="cog" spin style={{ fontSize: 100 }} />
            </MDBCol>
            <MDBCol size="10">
              <h1 style={{ color: "white" }}>
                <strong>
                  This Site is in Development Mode and Does Not Work As Expected
                  Yet.
                </strong>
              </h1>
              <h1 style={{ color: "white" }}>
                {" "}
                <strong>
                  Please, do not delete any information or enter new one.
                </strong>
              </h1>
              <h1 style={{ color: "white" }}>
                {" "}
                <strong>
                  We Will Remove This Message Once it is Fully Operational
                </strong>
              </h1>
            </MDBCol>
            <MDBCol size="1" className="d-flex">
              <MDBIcon icon="cog" spin style={{ fontSize: 100 }} />
              <MDBIcon
                icon="cog"
                spin
                style={{ fontSize: 100, color: "white" }}
              />
            </MDBCol>
          </div>
          {routes}
        </Suspense>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
