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
    products: []
  };

  componentDidMount() {
    this.getData()
      .then(result => {
        let transformedProducts = result.map(product => {
          return {
            id: product.id,
            name: product.name,
            img: product.gallery[0],
            price: product.prices[0].amount
          }
        })

        this.setState({
          products: transformedProducts
        });
      });
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
    }).then(data => data.data.categories[0].products);
  }

  renderCards = () => {
    return this.state.products.map(({id, name, img, price}) => {
      return <ProductCard key={ id } name={ name } img={ img } price={ price } />
    });
  }

  render() {
    return (
      <div className="product-page">
        <Header />
        {/*заголовок будет отличаться на каждой странице категории*/}
        <h1 className="title">Category name</h1>
        <div className="products">
          { this.renderCards() }
        </div>
      </div>
    )
  }
}
