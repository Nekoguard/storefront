import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./app.css";

import ProductListingPage from "../PLP/plp";

export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="app">
            <div className="container">
              <ProductListingPage />
            </div>
          </div>
        </Router>
    );
  }
}
