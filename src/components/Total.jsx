import TotalContext from "../store/total-context.js";
import { useContext } from "react";
const Total = () => {
  // const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  const total = useContext(TotalContext);
  return (
    // <TotalContext.Consumer>
    // {(total) => {
    // return (
    <div className="customDiv">
      <h3>Total Component</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
    // );
    // }}
    // </TotalContext.Consumer>
  );
};
export default Total;
