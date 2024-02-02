import React from "react";

const Form = () => {
  const getData = (e) => {
    e.preventDefault();
    console.log("submit process");
  };
  return (
    <div>
      <div>
        <form onSubmit={getData}>
          <input type="text" />
          <br />
          <input type="text" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
