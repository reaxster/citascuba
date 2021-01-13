import "./App.css";
import { Switch, Route } from "react-router-dom";

//@COMPONENTS AND PAGE IMPORTS
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import WaitingTimePAge from "./pages/WaitingTimePAge";
import DisclosurePage from "./pages/DisclosurePage";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <HomePage />}></Route>
          <Route exact path="/form" component={() => <FormPage />}></Route>
          <Route exact path="/table" component={() => <TablePage />}></Route>
          <Route
            exact
            path="/waitingtimes"
            component={() => <WaitingTimePAge />}
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
