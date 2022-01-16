import React from "react";

import "./product-card.css";

export default class ProductCard extends React.Component {
  render() {
    return (
      <a href="/" className="product-card">
        <img className="product-img" src={this.props.img} alt="product"/>
        <span className="product-title">{this.props.name}</span>
        <span className="product-price">{this.props.price}</span>
      </a>
    )
  }
}