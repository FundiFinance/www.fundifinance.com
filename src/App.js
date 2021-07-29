import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
