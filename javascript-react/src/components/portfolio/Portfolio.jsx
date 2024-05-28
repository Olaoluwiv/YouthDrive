import React, { useState } from "react";
import useCounter from "../../customHooks/counter";

const Portfolio = () => {
  let { counter, addCount, removeCount, counterBy5 } = useCounter();
  /*   let [a,setA]= useState(0)
  let [counter,setCount]= useState(0)
 let [variable,functionToUpdateVariable]= useState(initialStateOfvariable)  */
  /*
    a,counter is the initial value of the this hook
    setA,setCounter is the function that useSTate give you to update a or counter
  */
  /*  let [counter, setCounter] = useState(0);
  // let counter = 0;
  function addCount() {
    // counter += 1;
    setCounter((counter += 1));
    // console.log(counter);
  }
  function removeCount() {
    // counter += 1;
    setCounter((counter -= 1));
    // console.log(counter);
  } */
  return (
    <div>
      <h2>Portfolio</h2>
      <h4>
        Counter: {counter} | {counterBy5()}{" "}
      </h4>
      <button onClick={() => addCount()}>Counter++</button>
      <button onClick={() => removeCount()}>Counter--</button>
    </div>
  );
};

export default Portfolio;
