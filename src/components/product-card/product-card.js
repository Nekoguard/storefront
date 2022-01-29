import React from "react";
import { Link } from "react-router-dom";

import "./product-card.css";

import Price from "../price/price";

export default class ProductCard extends React.Component {
  render() {
    const { id, name, img, price } = this.props;

    return (
      <Link to={id} className="product-card">
        <div className="product-img-container">
          <img className="product-img" src={ img } alt="product"/>
        </div>

        <div className="card-content">
          <div className="cart-button">
            <img src="/img/cart-button.svg" alt="cart"/>
          </div>
          <span className="product-title">{ name }</span>
          <Price symbol={ price.currency.symbol } amount={ price.amount }/>
        </div>
      </Link>
    )
  }
}
