import React from "react";
import "./car.css";

// js
const Car = ({ brand, tyre, showPrice }) => {
  // js
  function price() {
    alert("My price is only $100");
  }
  let styles = {
    color: "white",
    border: "1px solid gold",
    borderRadius: "10px",
    backgroundColor: "black",
    fontSize: "1.4rem",
  };
  return (
    <div id="Car">
      {/* jsx */}
      <h2
        style={{ color: "red" }}
        onMouseEnter={() => {
          //   alert("You Hovered!")
        }}
      >
        Hi! I'm a Car and my brand {!brand ? "Benz" : brand}.{" "}
      </h2>
      {/* <p>I run faster with {tyre ? tyre : 2} tyres </p> */}
      {tyre && <p style={styles}>I run faster with {tyre} tyres </p>}
      {showPrice && <button onClick={() => showPrice()}>Show Price</button>}
      <button onClick={price}>Price?</button>
      <div className="blog">
        <h3 style={styles}>What is SPA</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus esse
        perspiciatis rem, beatae est nisi fuga veritatis tempore! Dolorem fuga
        placeat exercitationem facere, sit fugiat magnam tenetur deleniti vitae
        illo.
      </div>
    </div>
  );
  // js
};
// js

export default Car;
