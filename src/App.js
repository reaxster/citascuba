import "./App.css";
import { Switch, Route } from "react-router-dom";

//@COMPONENTS AND PAGE IMPORTS
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import InterviewSummary from "./pages/InterviewSummary";
import DisclosurePage from "./pages/DisclosurePage";
import News from "./pages/News";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <HomePage />}></Route>
          <Route exact path="/form" component={() => <FormPage />}></Route>
          <Route exact path="/table" component={() => <TablePage />}></Route>
          <Route exact path="/news" component={() => <News />}></Route>
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
      </div>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
