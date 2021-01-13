import "./App.css";
import { Switch, Route } from "react-router-dom";

//@COMPONENTS AND PAGE IMPORTS
import Header from "./components/Header";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <h1>APP JS</h1>
        <Switch>
          <Route exact="/table" component={() => <TablePage />}></Route>
        </Switch>
      </div>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
