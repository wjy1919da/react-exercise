// ProductContext.js
import React, { createContext } from "react";

const ProductContext = createContext({
  products: [],
  updateProduct: () => {},
});

export default ProductContext;
