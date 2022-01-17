import React from "react";

import "./clothes-page.css";

import ProductListingPage from "../../PLP/plp";

export default class ClothesPage extends React.Component {
  render() {
    return <ProductListingPage category="Clothes" />
  }
}
