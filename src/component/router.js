
import React from 'react'
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';

const Nav = () => {
  return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/Calculator">Calculator</Link>
                </li>
                <li>
                    <Link to="/Counter">Counter</Link>
                </li>
            </ul>
        </nav>
    </div>
  
}

export default Nav

