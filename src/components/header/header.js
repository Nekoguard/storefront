import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="app_header">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_item">
              <Link className="active" to="/women/">Women</Link>
            </li>
            <li className="nav_item">
              <Link to="/men/">Men</Link>
            </li>
            <li className="nav_item">
              <Link to="/kids/">Kids</Link>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <Link to="/">
            <img src="/img/logo.svg" alt="logo"/>
          </Link>
        </div>

        <div className="actions">
          <div className="currency-icon">
            <img src="/img/currency.svg" alt="currency"/>
            <img className="row" src="/img/row.svg" alt="row"/>
          </div>
          <div className="cart-icon">
            <img src="/img/empty-cart.svg" alt="cart"/>
          </div>
        </div>
      </div>
    );
  }
}
