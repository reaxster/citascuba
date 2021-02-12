import "./App.css";
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

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
import Admin_EditCases from "./components/ADMIN/pages/Admin_EditCases";

//import AdminPage from "./components/ADMIN/admin_components/AdminPage";

/*const FormPage = React.lazy(() => import("./pages/FormPage"));
const TablePage = React.lazy(() => import("./pages/TablePage"));
const InterviewSummary = React.lazy(() => import("./pages/InterviewSummary"));
const DisclosurePage = React.lazy(() => import("./pages/DisclosurePage"));
const News = React.lazy(() => import("./pages/News"));*/

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={() => <HomePage />}></Route>
            <Route exact path="/form" component={() => <FormPage />}></Route>
            <Route exact path="/table" component={() => <TablePage />}></Route>
            <Route exact path="/news" component={() => <News />}></Route>
            <Route exact path="/test">
              <Admin_EditCases />
            </Route>
            <Route
              exact
              path="/interviewsummary"
              component={() => <InterviewSummary />}
            ></Route>
            <Route
              exact
              path="/disclosure"
              component={() => <DisclosurePage />}
            ></Route>
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
