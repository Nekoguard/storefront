import React from "react";

import "./plp.css";

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
    }).then(data => {
      if (this.props.category === "All") {
        return data.data.categories[0].products;
      }

      if (this.props.category === "Clothes") {
        return data.data.categories[1].products;
      }

      if (this.props.category === "Tech") {
        return data.data.categories[2].products;
      }
    });
  }

  renderCards = () => {
    return this.state.products.map(({id, name, img, price}) => {
      return <ProductCard key={ id } name={ name } img={ img } price={ price } />
    });
  }

  render() {
    const { category } = this.props;

    return (
      <div className="product-page">
        <h1 className="title">{ category }</h1>

        <div className="products">
          { this.renderCards() }
        </div>
      </div>
    )
  }
}
