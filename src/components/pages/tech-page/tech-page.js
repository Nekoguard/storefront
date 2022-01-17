import React from "react";

import "./tech-page.css";

import ProductListingPage from "../../PLP/plp";

export default class TechPage extends React.Component {
  render() {
    return <ProductListingPage category="Tech" />
  }
}
