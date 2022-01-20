import React from "react";

import "./price.css";

export default class Price extends React.Component {
  render() {
    const { symbol, amount } = this.props;

    return (
      <span className="product-price">{symbol} {amount}</span>
    )
  }
}
