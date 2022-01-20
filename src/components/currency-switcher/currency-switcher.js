import React from "react";

import "./currency-switcher.css";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import { CurrencyContext } from "../currency-context/currency-context";

export default class CurrencySwitcher extends React.Component {
  _client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

  state = {
    currencies: []
  }

  componentDidMount() {
    this.getData()
      .then(data => {
        this.setState({
          currencies: [...data]
        });
      });
  }

  getData = async () => {
    return await this._client.query({
      query: gql`
        query GetData {
          currencies {
            label,
            symbol
          }
        }`
    }).then(data => {
        return data.data.currencies
    });
  }

  render() {
    return (
      <CurrencyContext.Consumer>
        {
          ({ currency, switchCurrency }) => (
            <ul className="switcher" onClick={switchCurrency}>
              { this.state.currencies.map(({ label, symbol }) => {
                return <li id={label} key={label} className="currency">{symbol} {label}</li>;
              }) }
            </ul>
          )
        }
      </CurrencyContext.Consumer>
    )
  }
}
