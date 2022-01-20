import React from "react";

import "./currency-switcher.css";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

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

  checkCurrency = (e) => {
    console.log(e.target.id);
  }

  renderCurrencyLabels = () => {
    return this.state.currencies.map(({ label, symbol }) => {
      return <li id={label} key={label} className="currency">{symbol} {label}</li>;
    });
  }

  render() {
    return (
      <ul className="switcher" onClick={this.checkCurrency}>
        { this.renderCurrencyLabels() }
      </ul>
    )
  }
}
