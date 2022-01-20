import React from "react";

const CurrencyContext = React.createContext({
  currency: "USD",
  switchCurrency: () => {}
});

export { CurrencyContext };