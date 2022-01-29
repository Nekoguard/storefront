import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./app.css";

import AllPage from "../pages/all-page/all-page";
import ClothesPage from "../pages/clothes-page/clothes-page";
import TechPage from "../pages/tech-page/tech-page";
import Header from "../header/header";
import { CurrencyContext } from "../currency-context/currency-context";
import ProductDescriptionPage from "../PDP/pdp";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.switchCurrency = (e) => {
      e.persist();

      this.setState(state => ({
        currency: e.target.id
      }));
    };

    this.state = {
      currency: "USD",
      switchCurrency: this.switchCurrency,
    };
  }

  render() {
    return (
      <CurrencyContext.Provider value={this.state}>
        <Router>
          <div className="app">
            <div className="container">
              <Header />

              <Routes>
                <Route exact path="/" element={ <AllPage /> } />
                <Route exact path="/clothes/" element={ <ClothesPage /> } />
                <Route exact path="/tech/" element={ <TechPage /> } />
                <Route path="/:id" element={ <ProductDescriptionPage /> } />
                <Route path="clothes/:id" element={ <ProductDescriptionPage /> } />
                <Route path="tech/:id" element={ <ProductDescriptionPage /> } />
              </Routes>
            </div>
          </div>
        </Router>
      </CurrencyContext.Provider>
    );
  }
}
