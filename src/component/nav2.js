import React from "react";
import { BrowserRouter as Router , Route , Link , BrowserRouter  } from "react-router-dom";

const Nav2 = () => {
  return (
    <ul>
        <li><Link to="/cal">Calculate</Link></li>
        <li><Link to="/Cou">incre_decre</Link></li>
    </ul>
  )
}

export default Nav2

// what the hell