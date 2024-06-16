import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to React Video</h1>
      <nav>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  );
};

export default App;
