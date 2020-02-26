import React from "react";
import TodoList from "./TodoList";
import MainPage from "./components/MainPage";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/dashboard" exact>
            <TodoList />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
