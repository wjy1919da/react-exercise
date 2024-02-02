import React from "react";
import "../App.css";
import TotalContext from "../store/total-context";
import { useState } from "react";
import ProductContext from "../store/product-context";
import { useContext } from "react";
const Cart = ({ cart }) => {
  const { products, updateProduct } = useContext(ProductContext);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleUpdate = () => {
    setIsEdit(false);
  };
  const handlePriceUpdate = (e, pName) => {
    const newPrice = e.target.value; // 从事件获取新的价格值
    // console.log(newPrice);
    updateProduct({
      type: "UPDATE_PRICE",
      payload: { pName, price: parseFloat(newPrice) || 0 }, // 使用parseFloat确保价格是数值
    });
  };

  return (
    <div className="customDiv">
      <h3>Cart Component</h3>
      <hr />
      <ul>
        {cart.map((pName, index) => {
          // console.log(pName.pName);
          const product = products.find(
            (product) => product.pName === pName.pName
          );
          return product ? (
            !isEdit ? (
              <li key={index}>
                {product.pName} - ${product.price}
                <button onClick={() => handleEdit(product.pName)}>Edit</button>
              </li>
            ) : (
              <li key={index}>
                {product.pName}
                <input
                  type="text"
                  defaultValue={product.price}
                  onBlur={(e) => handlePriceUpdate(e, product.pName)}
                />
                <button onClick={handleUpdate}>Update</button>
              </li>
            )
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default Cart;
