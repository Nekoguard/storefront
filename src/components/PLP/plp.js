import React from "react";

import "./plp.css";

import Header from "../header/header";
import ProductCard from "../product-card/product-card";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export default class ProductListingPage extends React.Component {
  _client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

  state = {
    productsCount: 0,
    names: [],
    images: [],
    prices: []
  };

  componentDidMount() {
    this.getData()
      .then(result => {
        let names = [],
            images = [],
            prices = [];

        result.data.categories[0].products.forEach(product => {
          names.push(product.name);
        });

        result.data.categories[0].products.forEach(product => {
          images.push(product.gallery[0]);
        });

        result.data.categories[0].products.forEach(product => {
          prices.push(product.prices[0].amount);
        });

        console.log(result.data.categories[0].products);

        this.setState({
          productsCount: result.data.categories[0].products.length,
          names,
          images,
          prices
        })
      })
  }

  getData = async () => {
    return await this._client.query({
      query: gql`
        query GetData {
          categories {
            name,
            products {
              id,
              name,
              gallery,
              prices {
                currency{
                  label,
                  symbol
                },
                amount
              }
            }
          }
        }`
    }).then(data => data);
  }

  renderCards = () => {
    return this.state.names.map((name) => {
      return <ProductCard name={name} />
    })
  }

  render() {
    return (
      <div className="product-page">
        <Header />
        {/*заголовок будет отличаться на каждой странице категрии*/}
        <h1 className="title">Category name</h1>
        <div className="products">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}
