import React from "react";

import "./cart.css";

import Price from "../price/price";

export default class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h2 className="cart-title">Cart</h2>

        <div className="cart-items">

        </div>
      </div>
    )
  }
}
