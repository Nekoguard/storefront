import React from "react";

import "./product-card.css";

export default class ProductCard extends React.Component {
  render() {
    const { name, img, price } = this.props;

    return (
      <a href="/" className="product-card">
        <div className="product-img-container">
          <img className="product-img" src={ img } alt="product"/>
        </div>
        <span className="product-title">{ name }</span>
        <span className="product-price">{ price }</span>
      </a>
    )
  }
}
