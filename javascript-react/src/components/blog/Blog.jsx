import React from "react";
import useCounter from "../../customHooks/counter";
import VirtualizedjList from "../vitualizeList/VitualizedList";

const Blog = () => {
  let { counter, addCount } = useCounter();
  return (
    <div>
      <h2>Blog</h2>
      <h4>Counter: {counter}</h4>
      <button onClick={() => addCount()}>Counter++</button>
      <VirtualizedjList />
    </div>
  );
};

export default Blog;
