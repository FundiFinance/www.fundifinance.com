import "./App.css";
import NavBar from "./navbar";
import Home from "./home";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/"><Home /></Route>
          <Redirect from="*" to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
