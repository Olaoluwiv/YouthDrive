import React, { useState } from "react";

const useCounter = () => {
  let [counter, setCounter] = useState(0);
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
  }
  function counterBy5() {
    return counter * 5;
  }
  return {
    counter,
    addCount,
    removeCount,
    counterBy5,
  };
};

export default useCounter;
