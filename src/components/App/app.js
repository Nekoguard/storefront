import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./app.css";

import Header from "../Header/header";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="container">
            <Header />
          </div>
        </div>
      </Router>
    );
  }
}
