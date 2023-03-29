import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";

const Root = () => {
  return (
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Root;
