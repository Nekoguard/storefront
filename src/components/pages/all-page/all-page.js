import React from "react";

import "./all-page.css";

import ProductListingPage from "../../PLP/plp";

export default class AllPage extends React.Component {
  render() {
    return <ProductListingPage category="All" />
  }
}
