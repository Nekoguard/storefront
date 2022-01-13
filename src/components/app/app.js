import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

import "./app.css";

import ProductListingPage from "../PLP/plp";
// import client from "../../services/storeback-service";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

function GetCategories() {
  const { data } = useQuery(CATEGORIES);

  console.log(data);
  return(<p>a</p>)

  // if (loading) console.log('Loading...');
  // if (error) console.log('Error');
  //
  // return data.categories.map((category) => (
  //   <div>
  //     {category.name}
  //   </div>
  // ));
}



export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <div className="container">
              <ProductListingPage />
              <GetCategories />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}
