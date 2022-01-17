import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./app.css";

import AllPage from "../pages/all-page/all-page";
import ClothesPage from "../pages/clothes-page/clothes-page";
import TechPage from "../pages/tech-page/tech-page";

export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="app">
            <div className="container">
              <Routes>
                <Route exact path="/" element={ <AllPage /> } />
                <Route exact path="/clothes/" element={ <ClothesPage /> } />
                <Route exact path="/tech/" element={ <TechPage /> } />
              </Routes>
            </div>
          </div>
        </Router>
    );
  }
}
