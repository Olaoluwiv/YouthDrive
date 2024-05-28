import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div id="Nav">
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/portfolio">Porfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
