import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart.jsx";
import Total from "./components/Total.jsx";
import TotalContext from "./store/total-context.js";
import { useReducer } from "react";
import priceReducer from "./reducer/priceDispacher.js";
import Form from "./components/form.jsx";
import ProductContext from "./store/product-context.js";

function App() {
  const [cart, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, dispatch] = useReducer(priceReducer, total);
  // 消费者
  const [products, setProd] = useReducer(priceReducer, [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 }
  ]);

  let handleProdChange = (e) => {
    const { pName, price } = JSON.parse(e.target.value);
    let tCart = [...cart];
    let obj = { pName, price };
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);
    setProducts(tCart);
    setTotal(tPrice);
  };
  // console.log(cart);
  return (
    <div className="App">
      <div className="customDiv">
        <h3 onClick={(e) => console.log(e.target.value)}>Purchase Component</h3>
        <hr />
        <select onChange={handleProdChange}>
          {products.map((product, index) => {
            return (
              <option
                value={JSON.stringify({
                  pName: product.pName,
                  price: product.price,
                })}
                key={index}
              >
                {product.pName} - ${product.price}
              </option>
            );
          })}
        </select>
      </div>
      <ProductContext.Provider value={{ products, updateProduct: setProd }}>
        <Cart cart={cart} />
      </ProductContext.Provider>

      <TotalContext.Provider value={total}>
        <Total />
      </TotalContext.Provider>
      <Form />
    </div>
  );
}

export default App;
