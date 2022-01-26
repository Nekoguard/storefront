import React from "react";

import Price from "../price/price";
import {CurrencyContext} from "../currency-context/currency-context";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export default class ProductDescriptionPage extends React.Component {
  _client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

  state = {
    id: null,
    name: null,
    brand: null,
    amounts: [],
    symbols: [],
    gallery: [],
    description: null
  }

  componentDidMount() {
    this.getData()
      .then(data => {
        const amounts = data.prices.map(price => price.amount);
        const symbols = data.prices.map(price => price.currency.symbol);

        this.setState({
          id: this.props.id,
          name: data.name,
          brand: data.brand,
          amounts: amounts,
          symbols: symbols,
          gallery: [...data.gallery],
          description: data.description
        });
      });
  }

  getData = async () => {
    return await this._client.query({
      query: gql`
        query GetProductById {
          product (id: "${this.props.id}") {
            name,
            brand,
            prices {
              currency {
                symbol,
                label
              },
              amount
            },
            gallery,
            description
          }
        }`
    }).then(data => data.data.product);
  }

  render() {
    return (
      <CurrencyContext.Consumer>
        {
          ({currency, switchCurrency}) => {
            let current;

            switch (currency) {
              case "USD":
                current = 0;
                break;
              case "GBP":
                current = 1;
                break;
              case "AUD":
                current = 2;
                break;
              case "JPY":
                current = 3;
                break;
              case "RUB":
                current = 4;
                break;
              default: current = 0;
            }

            return (
              <div className="description-page">
                <div className="photos">
                  <img src="" alt="product"/>
                  <img src="" alt="product"/>
                  <img src="" alt="product"/>
                </div>

                <div className="img">
                  <img src={this.state.gallery[0]} alt="product"/>
                </div>

                <div className="description-box">
                  <div className="brand">{this.state.brand}</div>

                  <div className="name">{this.state.name}</div>

                  <div className="size-box">
                    <span>Size:</span>
                  </div>

                  <div className="price-box">
                    <span>price:</span>
                    <Price symbol={this.state.symbols[current]} amount={this.state.amounts[current]} />
                  </div>

                  <button></button>

                  <div className="description" dangerouslySetInnerHTML={{ __html: this.state.description}}/>
                </div>
              </div>
            )
          }
        }
      </CurrencyContext.Consumer>
    )
  }
}
